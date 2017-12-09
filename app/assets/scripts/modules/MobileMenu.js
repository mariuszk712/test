import $ from 'jquery';

class MobileMenu {
   constructor() {
       this.menuIcon = $(".mobile-menu-icon");
       this.events();
       this.menuContent = $(".navbar--menu");
       
   } 
    
    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }
    
    toggleTheMenu() {
        this.menuContent.toggleClass("navbar--menu--is-visible");
    }
}

export default MobileMenu;