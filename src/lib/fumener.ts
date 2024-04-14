import { decode, type Page } from "tetris-fumen/lib/decoder";

const colors = {
    I: {normal: '#41afde', highlight1: '#3dc0fb', highlight2: '#3dc0fb', lighter: '#3dc0fb', light: '#43d3ff'},
    T: {normal: '#b451ac', highlight1: '#d161c9', highlight2: '#d161c9', lighter: '#d161c9', light: '#e56add'},
    S: {normal: '#66c65c', highlight1: '#75d96a', highlight2: '#7cd97a', lighter: '#7cd97a', light: '#88ee86'},
    Z: {normal: '#ef624d', highlight1: '#ff7866', highlight2: '#ff8778', lighter: '#fd7660', light: '#ff9484'},
    L: {normal: '#ef9535', highlight1: '#ffa94d', highlight2: '#ffae58', lighter: '#fea440', light: '#ffbf60'},
    J: {normal: '#1983bf', highlight1: '#1997e3', highlight2: '#1997e3', lighter: '#1997e3', light: '#1ba6f9'},
    O: {normal: '#f7d33e', highlight1: '#ffe34b', highlight2: '#ffe34b', lighter: '#ffe34b', light: '#fff952'},
    X: {normal: '#686868', highlight1: '#686868', highlight2: '#686868', lighter: '#686868', light: '#949494'},
    Empty: {normal: '#f3f3ed'}
}

function draw(fumenPage: Page, tilesize: number, numrows: number | undefined, transparent: boolean) {

    const field = fumenPage.field
    const operation = fumenPage.operation

    if(numrows == undefined) {
        numrows = 0;
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 23; j++) {
                if(field.at(i,j) != '_') {
                    numrows = Math.max(numrows, j);
                }
                //@ts-ignore
                if(operation != undefined && operation.positions().filter((e: any) => i == e.x && j == e.y).length > 0) {
                    numrows = Math.max(numrows, j);
                }
            }
        }
        numrows += 2
    }
    const width = tilesize*10;
    const height = numrows*tilesize;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');

    if(!transparent) {
        context!.fillStyle = colors['Empty'].normal
    }
    else {
        context!.fillStyle = 'rgba(0, 0, 0, 0)'
    }
    context!.fillRect(0, 0, width, height);

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < numrows; j++) {
            if(field.at(i,j) != '_') {
                //@ts-ignore
                context!.fillStyle = colors[field.at(i,j)].light
                context!.fillRect(i*tilesize, height-(j+1)*tilesize-tilesize/5, tilesize, tilesize+tilesize/5)
            }
            //@ts-ignore
            if(operation != undefined && operation.positions().filter((e: any) => i == e.x && j == e.y).length > 0) {
                //@ts-ignore
                context!.fillStyle = colors[operation.type].light
                context!.fillRect(i*tilesize, height-(j+1)*tilesize-tilesize/5, tilesize, tilesize+tilesize/5)
            }
        }
    }
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < numrows; j++) {
            if(field.at(i,j) != '_') {
                //@ts-ignore
                context!.fillStyle = colors[field.at(i,j)].normal
                context!.fillRect(i*tilesize, height-(j+1)*tilesize, tilesize, tilesize)
            }
            //@ts-ignore
            if(operation != undefined && operation.positions().filter((e: any) => i == e.x && j == e.y).length > 0) {
                //@ts-ignore
                context!.fillStyle = colors[operation.type].normal
                context!.fillRect(i*tilesize, height-(j+1)*tilesize, tilesize, tilesize)
            }
        }
    }
    return canvas;
}

export function fumen_canvas(fumen: string) {
    return draw(decode(fumen)[0], 22, undefined, true)
}