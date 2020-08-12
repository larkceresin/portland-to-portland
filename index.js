class State {
  constructor(stateSelector) {
    this._state = document.querySelector(stateSelector);
  }
  paragraphs() {
    this._paragraphs = Array.from(
      this._state.querySelectorAll(".state__paragraph")
    );
  }
}
const maine = new State(".state__container_maine");
const newHampshire = new State(".state__container_new-hampshire");
console.log(maine.paragraphs);
console.log(newHampshire.paragraphs);
