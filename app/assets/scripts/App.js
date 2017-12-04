var $ = require('jquery');
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

new RevealOnScroll($(".reveal-title"), "85%");
new RevealOnScroll($(".skills-icons-img"), "55%");
var stickyHeader = new StickyHeader();
