import {Common} from './common.js';

export const MAINMENU_ID = "js_main-menu";
export const MENUVISIBILITY = 'true';

export class MainMenu extends Common{
    constructor() {
        super(MAINMENU_ID);
        this.toglleMenu();
    }
    
    toglleMenu() {
        if (MENUVISIBILITY){
        this.changeVisibilityMode(this.element, 'true')
    }

}
}