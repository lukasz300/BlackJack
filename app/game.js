import {MainMenu, MAINMENU_ID} from './mainMenu.js'
import {Common} from './common.js';
import {Deck} from './deck.js';
import { Player } from './player.js';
import { Table } from './table.js';
import { Modal, MODAL_ID } from './modal.js'
import { Media } from './media.js'
import { Settings } from './settings.js';

const GAME_BOARD_ID = "js_game-board";
const STARTBUTTON_ID = "js_button_new_game";
const CONFIGBUTTON_ID = "js_button_settings";
const PLAYERCARD_ID = "js-playersCards";
const CROUPIERCARD_ID = "js-croupierCards";
const HITBUTTON_ID = "js-buttonHit";
const STANDBUTTON_ID = "js-buttonStand";
const PLAYERPOINTS_ID = "js-playerPoints";
const DEALERPOINTS_ID = "js-dealerPoints";
const SETTINGEXIT_ID = "js-setting-exit";
const SMALLSETTING_ID = "js-button_setting_small";
const MUSICPLAY = "js-button_music_play"
const MUSICMUTE = "js-button_music_mute";

class Game extends Common{
    constructor(){
        super(GAME_BOARD_ID);
        this.gameBoard = this.bindToElement(GAME_BOARD_ID);
        this.startButton = this.bindToElement(STARTBUTTON_ID);   
        this.configButton = this.bindToElement(CONFIGBUTTON_ID);  
        this.playersCard = this.bindToElement(PLAYERCARD_ID);  
        this.croupierCard = this.bindToElement(CROUPIERCARD_ID);  
        this.mainMenu = this.bindToElement(MAINMENU_ID);
        this.hitButton = this.bindToElement(HITBUTTON_ID);
        this.standButton = this.bindToElement(STANDBUTTON_ID);
        this.playerPoints = this.bindToElement(PLAYERPOINTS_ID);
        this.dealerPoints = this.bindToElement(DEALERPOINTS_ID);
        this.modalClick = this.bindToElement(MODAL_ID);
        this.buttonReturn = this.bindToElement(SETTINGEXIT_ID);
        this.buttonSmall = this.bindToElement(SMALLSETTING_ID);
        this.musicPlay = this.bindToElement(MUSICPLAY);
        this.musicMute = this.bindToElement(MUSICMUTE);
        this.initalizeGame();
        this.changeScale();    
    }
    initalizeGame(){
    this.startButton.addEventListener('click', () => this.startGame(), true);
    this.configButton.addEventListener('click', () => this.showSettings(), true);
    this.hitButton.addEventListener('click', () => this.hitCard(), true);
    this.standButton.addEventListener('click', () => this.dealerPlay(), true);
    this.media = new Media();
    this.media.playMusic();
    this.settings = new Settings;
    this.buttonReturn.addEventListener('click', () => this.hideSetting());
    this.buttonSmall.addEventListener('click', () => this.showSettings());
    this.musicPlay.addEventListener('click', () => this.media.unMute());
    this.musicMute.addEventListener('click', () => this.media.mute());
    
}

    startGame(){
        this.changeVisibilityMode(this.element, 'true');
        this.changeVisibilityMode(this.mainMenu, 'false');
        this.player = new Player('player');
        this.aiPlayer = new Player('Dealer');
        this.deck = new Deck();
        this.deck.shuffleCards();
        this.table = new Table(this.croupierCard, this.playersCard);
        this.dealCard()
        this.media.playCardShuffle();
        this.modal = new Modal();
    }

    showSettings(){
        this.settings.showSettings();
        this.changeVisibilityMode(this.mainMenu, 'false')
    }

    hideSetting(){
        this.settings.hideSettings();
        if (this.gameBoard.classList.contains('hidden')){
            this.changeVisibilityMode(this.mainMenu, 'true')            
        }
    }
    changeScale(){
        window.addEventListener('resize', () => this.getScale(), true);
    }
    getScale(){
        let root = document.documentElement;
        const width = window.innerWidth;
        const height = window.innerHeight;
        const scale = Math.min((0.8 *width)/640, (0.8 *height)/480);
        root.style.setProperty('--scale', scale);
    }


    hitCard(){
        const card = this.deck.pickOne();
        this.player.hand.addCard(card);
        this.table.showPlayerHands(card.el)
        this.playerPoints.textContent = this.player.calculatePoints();
        this.media.playCardSlide();
        if(this.player.point >= 21){
            this.endGame()
        }
    
    }

    dealCard(){
        for (let i = 0; i <2; i++){
            const card1 = this.deck.pickOne();
            this.player.hand.addCard(card1);
            this.table.showPlayerHands(card1.el);
        }
        
            const card2 = this.deck.pickOne();
            this.aiPlayer.hand.addCard(card2);
            this.table.showDealesHands(card2.el);
        
        this.playerPoints.textContent = this.player.calculatePoints();
        this.dealerPoints.textContent = this.aiPlayer.calculatePoints();
        
    }

    dealerPlay(){
        while(this.aiPlayer.point <= this.player.point && this.aiPlayer.point <=21 && this.player.point <=21)
        {       
            const card = this.deck.pickOne();
            this.aiPlayer.hand.addCard(card);
            this.table.showDealesHands(card.el)
            this.dealerPoints.textContent = this.aiPlayer.calculatePoints()    
            
            }
        this.media.playCardSlide();       
    this.endGame()
        }
        
            
        

    endGame(){
        this.hitButton.removeEventListener('click', () => this.hitCard(), true);
        this.standButton.removeEventListener('click', () => this.dealerPlay(), true);

        if (this.player.point == 21 && this.aiPlayer.point == 21 || this.player.point == this.aiPlayer.point){
            this.modal.showMessage('DRAW')
        }
        if (this.player.point > 21 || this.aiPlayer.point<=21 && this.aiPlayer.point>this.player.point ){
            this.modal.showMessage('YOU LOSE')
        }
        if(this.player.point<=21 && !(this.player.point==21) & this.aiPlayer.point>21 || this.player.point<21 && this.aiPlayer.point<this.player.point){
            this.modal.showMessage('YOU WON !!!')
        }
        this.modal.showModal('true')
        this.modalClick.addEventListener('click', ()=> this.newRound());
    }

    newRound(){
        this.modal.showModal('false');
        this.player.hand.cards = [];
        this.aiPlayer.hand.cards = [];
        this.playersCard.innerHTML = '';
        this.croupierCard.innerHTML = '';
        this.startGame();
        
    }
}
const game = new Game(); 