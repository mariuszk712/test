var $ = require('jquery');
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import MobileMenu from './modules/MobileMenu';

new RevealOnScroll($(".reveal-title"), "85%");
new RevealOnScroll($(".skills-icons-img"), "55%");
var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
