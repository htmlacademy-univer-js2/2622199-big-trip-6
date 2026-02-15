import { createElement } from '../render';

export default class NewEventForm {
  getTemplate() {
    return `
        <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New Event</button>
    `;
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
