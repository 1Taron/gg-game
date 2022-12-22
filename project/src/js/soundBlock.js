"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class soundBlock {
    constructor() {
        this.drow = () => {
            this.context.drawImage(this.nowImage, this.position.x, this.position.y);
        };
    }
}
