export class Common {
    constructor(elementId){
        if (typeof elementId === 'undefined'){
            return;
        }
        this.element = this.bindToElement(elementId);
    }
    
    bindToElement(elementToBind){
        const element = document.getElementById(elementToBind);
        if(!element) {
            throw new Error(`${elementToBind} not find`);
        }
        return element;
    }
    changeVisibilityMode(element, mode){
        mode == 'true' 
        ? element.classList.remove('hidden')
        : element.classList.add('hidden');
    }
}