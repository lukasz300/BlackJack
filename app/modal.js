import {Common} from './common.js';

export const MODAL_ID = 'js-modal'
const MESSAGE_ID = 'js-message'

export class Modal extends Common{
    constructor(){
    super(MODAL_ID)
    this.message = this.bindToElement(MESSAGE_ID);
    
}
   showMessage(message){
       this.message.textContent = message;

   }  
   showModal(condition){
        this.changeVisibilityMode(this.element, condition);
   }

}