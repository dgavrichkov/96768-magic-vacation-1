// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import TextSplitter from './modules/textSplitter';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const fancyWords = function () {
  const nodes = document.querySelectorAll(`.fancy-words`);
  const options = {};
  nodes.forEach((node) => {
    const fancyObject = new TextSplitter(node, options);
    return fancyObject;
  });
};

window.addEventListener(`load`, () => {
  document.body.classList.add(`is-loaded`);

  fancyWords();
});
