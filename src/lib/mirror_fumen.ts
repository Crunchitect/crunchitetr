import { decode } from "tetris-fumen/lib/decoder";
import { encode } from "tetris-fumen/lib/encoder";

const colorMapping = <{[k: string]: number}>{
    S: 7,
    J: 6,
    T: 5,
    Z: 4,
    O: 3,
    L: 2,
    I: 1,
};

const reverseMapping = <{[k: number]: number}>{
    7: 4,
    4: 7,
    6: 2,
    2: 6,
    5: 5,
    3: 3,
    1: 1,
    0: 0,
    8: 8,
};

const reverseMappingLetters = <{[k: string]: string}>{
    L: "J",
    J: "L",
    S: "Z",
    Z: "S",
    T: "T",
    O: "O",
    I: "I",
};

const reverseMappingRotation = <{[k: string]: string}>{
    spawn: "spawn",
    right: "left",
    reverse: "reverse",
    left: "right",
};

export function mirror(fumen: string) {
    let inputPages = decode(fumen);

    const board = inputPages[0]["_field"]["field"]["pieces"];
    for (let rowIndex = 0; rowIndex < 23; rowIndex++) {
        const row = board.slice(rowIndex * 10, (rowIndex + 1) * 10);
        for (let colIndex = 0; colIndex < 10; colIndex++) {
            board[rowIndex * 10 + colIndex] =
                reverseMapping[row[9 - colIndex]];
        }
    }

    let op = inputPages[0]["operation"];
    if (op) {
        //@ts-ignore
        op.type = reverseMappingLetters[op.type];
        op.x = 9 - op.x;
        if ("IO".includes(op.type)) {
            // thonk
            if (op.rotation == "reverse") op.x++;
            else if (op.rotation == "left" && op.type == "O") op.x++;
            else if (op.rotation == "spawn" || op.type == "O") op.x--;
        }
        if ("SZLJT".includes(op.type))
            //@ts-ignore
            op.rotation = reverseMappingRotation[op.rotation];
    }

    return encode(inputPages);
}
