/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2019-09-25 21:28:39
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2019-09-25 22:02:08
 */

export class VisualDebug {
    public static context: CanvasRenderingContext2D;
    public static canvas = <HTMLCanvasElement>document.getElementById("canvas");

    public static init(): void {
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.canvas.setAttribute("style", "border:1px solid #666666");
        this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    }

    public static drawPoly(coordinates: number[]): Coordinates[] {
        let coord: Coordinates[] = new Array();
        this.context.beginPath();

        for (let i = 0; i < coordinates.length; i += 2) {
            let newLength = coord.push({ x: coordinates[i], y: coordinates[i + 1] });

            this.context.lineTo(coord[newLength - 1].x, coord[newLength - 1].y);
        }

        this.context.strokeStyle = "#919191";
        this.context.stroke();

        return coord;
    }
}

interface Coordinates {
    x: number;
    y: number;
}
