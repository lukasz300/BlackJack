export class Hand{
    constructor(){
        this.cards = [];
    }
    addCard(card){
        this.cards.push(card);
    }

    countsCardByWeight(weight){
        return this.cards.filter(card => card.weight == weight).length;
    }
    
    getStrength(){
        if(this.countsCardByWeight('a') == 2 && this.cards.length == 2){
            return 21;    
        }
        const cards = this.cards.map(card =>{
            if(['k','q','j'].includes(card.weight)){
                return 10;
            }
            else if(this.cards.length == 2 && card.weight == 'a' || this.cards.length == 1 && card.weight == 'a'){
                return 11
            } 
            else if(this.cards.length >2 && card.weight == 'a'){
                return 1;
            }
            else{
                return card.weight;
            }
        
        })
        return cards.reduce((sum, weight) => {
            return sum + weight;
        })
        
    }

}