export default class TextSplitter {
  constructor(node, options) {
    this.textNode = node;
    this.options = options;

    this._prepareText();
  }

  _createElement(letter) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    return span;
  }

  _prepareText() {
    const words = this.textNode.textContent.trim().split(/[\s]+/); // разбиение строки на слова
    const wordsNum = words.length;

    const content = words.reduce((frParent, word, index) => {
      const wordElement = Array.from(word).reduce((fragment, letter) => {
        fragment.appendChild(this._createElement(letter));
        return fragment;
      }, document.createDocumentFragment());

      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`fancy-word__item`);
      wordContainer.appendChild(wordElement);
      frParent.appendChild(wordContainer);

      // Add Space text node:
      if (index < wordsNum - 1) {
        frParent.appendChild(document.createTextNode(` `));
      }

      return frParent;
    }, document.createDocumentFragment());


    this.textNode.innerHTML = ``;
    this.textNode.appendChild(content);
  }
  // принимать на вход ссылку на DOM node с текстом внутри, а также настройки анимации
  // каждую строку текста обернуть в спан
  // каждый символ в строке обернуть в спан
  // накладывать анимацию на основе настроек
  // возможность управлять началом запуска анимации для букв

  // отформатировать содержимое и вставить в тот же узел

  // убрать анимацию с элементов
}
