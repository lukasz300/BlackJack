import { Hand } from "./hands.js";

export class Player{
    constructor(name){
        this.point = 0;
        this.hand = new Hand();
    }

calculatePoints(){
    this.point = this.hand.getStrength();
    return this.point;
    }

}