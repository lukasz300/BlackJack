import { Card } from './card.js';
import { CARDS } from './cards.js'

export class Deck {
    constructor(){
    this.shuffleCards();    
    this.cards = [];
    }
    shuffleCards(){
        this.cards = CARDS;
        this.shuffledCards = [];
        for (let i = this.cards.length - 1;  i > 0; i--){
           let j = Math.floor(Math.random() * (i+1))
        
        let temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp
        }
        
        this.cards.forEach(el => {
            
            this.shuffledCards.push(new Card(el.name, el.weight, el.classname))
           
        });
        
       return this.shuffledCards;  
  }
  pickOne(){
      return this.shuffledCards.pop();
  }


}
