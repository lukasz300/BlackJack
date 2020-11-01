

export class Table{
    constructor(dealersCards, playerCards ){
        this.dealersCards = dealersCards;
        this.playerCards = playerCards;
    }
    showPlayerHands(card){
        this.playerCards.insertAdjacentHTML('beforeend', card)
    }

    showDealesHands(card){
        this.dealersCards.insertAdjacentHTML('beforeend', card)
    }

}