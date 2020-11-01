export class Media {
    constructor(){
       this.backgroundSound = new Audio('../sounds/background.mp3');
       this.cardShuffle = new Audio('../sounds/cardshuffle.wav');
       this.cardSlide = new Audio('../sounds/card_slide.wav')
    }

    playMusic(){
        this.backgroundSound.loop = true;
        this.backgroundSound.volume = 1;
        this.backgroundSound.autoplay = false;
        this.backgroundSound.play();
        }

    playCardShuffle(){
        this.cardShuffle.loop = false;
        this.cardShuffle.volume = 1;
        this.cardShuffle.autoplay = false;
        this.cardShuffle.play();
    }
    playCardSlide(){
        this.cardSlide.loop = false;
        this.cardSlide.volume = 1;
        this.cardSlide.autoplay = false;
        this.cardSlide.play();
    }
    mute(){
    this.backgroundSound.volume = 0;
    this.cardShuffle.volume = 0;
    this.cardSlide.volume = 0;
    }
    unMute(){
    this.backgroundSound.volume = 1;
    this.cardShuffle.volume = 1;
    this.cardSlide.volume = 1;
    }
}