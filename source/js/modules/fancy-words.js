export default class FancyWords {
  constructor({
    element,
    duration,
    transitionProperty
  }) {
    this._element = element;
    this._duration = duration;
    this._activeClass = `is-active`;
    this._transitionPropery = transitionProperty;
    this._prepareText();
  }

  _createLetterElement(letter) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    const timeOffset = Math.random() * this._duration;
    span.style.transition = `${this._transitionPropery} ${this._duration}ms ease ${timeOffset}ms`;
    return span;
  }

  _prepareText() {
    if (!this._element) {
      return;
    }

    // разбиение строки на слова
    const words = this._element.textContent.trim().split(/[\s]+/);
    const wordsNum = words.length;

    const content = words.reduce((frParent, word, index) => {
      const wordElement = Array.from(word).reduce((fragment, letter) => {
        fragment.appendChild(this._createLetterElement(letter));
        return fragment;
      }, document.createDocumentFragment());

      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`fancy-words__item`);
      wordContainer.appendChild(wordElement);
      frParent.appendChild(wordContainer);

      // Add Space text node:
      if (index < wordsNum - 1) {
        frParent.appendChild(document.createTextNode(` `));
      }

      return frParent;
    }, document.createDocumentFragment());


    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }


  // запуск анимации
  runAnimation() {
    if (this._element) {
      this._element.classList.add(this._activeClass);
    }
  }
  // убрать анимацию с элементов
  destroyAnimation() {
    if (this._element) {
      this._element.classList.remove(this._activeClass);
    }
  }
}
