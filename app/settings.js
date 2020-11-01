import {Common} from './common.js';

const SETTINGS_ID = 'js-settings'
export class Settings extends Common{
    constructor(){
        super(SETTINGS_ID)
        this.settingScreen = this.bindToElement(SETTINGS_ID);
    }
    showSettings(){
        this.changeVisibilityMode(this.element, 'true');
    }
    hideSettings(){
        this.changeVisibilityMode(this.element, false);
    }
}