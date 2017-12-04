import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.siteHeader = $(".navbar");
        this.headerTriggerElement = $(".trigger");
        this.createHeaderWaypoint();
        this.pageSections = $(".page-section");
        this.createPageSectionWpts();
        this.navbarLinks = $(".navbar a");
        this.addSmoothScrolling();
    }
    
    addSmoothScrolling() {
        this.navbarLinks.smoothScroll();
    }
    
    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
                if (direction == "down") {
                    that.siteHeader.addClass("navbar--dark");
                } else {
                    that.siteHeader.removeClass("navbar--dark");
                }
            }
        });
    }
    
    createPageSectionWpts() {
        var that = this;
        this.pageSections.each(function() {
            var currentPageSection = this;
           new Waypoint({
               element: currentPageSection,
               handler: function(direction) {
                   if (direction == 'down') {
                       var matchingLink = currentPageSection.getAttribute("data-matching-link");
                       that.navbarLinks.removeClass("is-current-link");
                       $(matchingLink).addClass("is-current-link"); 
                   }
               },
               offset: "20%"
           }); 
            
            new Waypoint({
               element: currentPageSection,
               handler: function(direction) {
                   if (direction == 'up') {
                       var matchingLink = currentPageSection.getAttribute("data-matching-link");
                       that.navbarLinks.removeClass("is-current-link");
                       $(matchingLink).addClass("is-current-link"); 
                   }
               },
               offset: "-40%"
           }); 
        });
    }
}

export default StickyHeader;