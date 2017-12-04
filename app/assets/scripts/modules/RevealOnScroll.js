class RevealOnScroll {
    constructor() {
        this.itemsToReveal = window.getElementsByClassName("skills-icons");
        this.hideInitially();
    }
    
    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }
}

export default RevealOnScroll;