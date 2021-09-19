import FancyWords from './fancy-words.js';

const TIME_OFFSETS = {
  introTitle: 200,
  introDate: 500,
  story: 100,
  prizes: 100,
  rules: 100,
  game: 100,
};
const TIME_DURATIONS = {
  intro: 400,
  common: 500,
};
const commonTitles = () => {
  const titles = [
    {name: `top`, selector: `intro__title`, duration: TIME_DURATIONS.intro, time: TIME_OFFSETS.introTitle, hash: `#top`},
    {name: `date`, selector: `intro__date`, duration: TIME_DURATIONS.intro, time: TIME_OFFSETS.introDate, hash: `#top`},
    {name: `story`, selector: `slider__item-title`, duration: TIME_DURATIONS.common, time: TIME_OFFSETS.story, hash: `#story`},
    {name: `prizes`, selector: `prizes__title`, duration: TIME_DURATIONS.common, time: TIME_OFFSETS.prizes, hash: `#prizes`},
    {name: `rules`, selector: `rules__title`, duration: TIME_DURATIONS.common, time: TIME_OFFSETS.rules, hash: `#rules`},
    {name: `game`, selector: `game__title`, duration: TIME_DURATIONS.common, time: TIME_OFFSETS.game, hash: `#game`}
  ];
  let animationsMap = new Map();
  for (let title of titles) {
    const titleElement = document.querySelector(`.${title.selector}`);

    const titleComp = new FancyWords({
      element: titleElement,
      duration: title.duration,
      transitionProperty: `transform`
    });
    animationsMap.set(title.name, titleComp);

    // запуск анимации при загрузке в соответствующем экране
    setTimeout(() => {
      animationsMap.get(title.name).runAnimation();
    }, title.time);

    // запуск анимации после перехода по ссылкам в меню
    window.addEventListener(`popstate`, () => {
      if (window.location.hash === title.hash) {
        animationsMap.get(title.name).destroyAnimation();
        setTimeout(() => {
          animationsMap.get(title.name).runAnimation();
        }, title.time);
      }
    });
  }
};


export default function () {
  commonTitles();
}
