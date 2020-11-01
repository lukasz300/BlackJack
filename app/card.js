export class Card{
    constructor (name, weight, className){
        this.name = name;
        this.weight = weight;
        this.className = className;
        this.el = `<div class='card ${this.className}'></div>`;
    }
    
};