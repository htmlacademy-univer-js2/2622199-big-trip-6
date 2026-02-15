import { createElement } from '../render';

export default class EditEventForm {
  getTemplate() {
    return `<form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/event.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Transfer</legend>
                <div class="event__type-item">
                  <input id="event-type-taxi" class="event__type-input  visually-hidden" type="radio" name="event-type" value="Taxi">
                  <label class="event__type-btn" for="event-type-taxi">
                    <img class="event__type-icon" width="30" height="30" src="img/icons/taxi.png" alt="Taxi">
                  </label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-bus" class="event__type-input  visually-hidden" type="radio" name="event-type" value="Bus">
                  <label class="event__type-btn" for="event-type-bus">
                    <img class="event__type-icon" width="30" height="30" src="img/icons/bus.png" alt="Bus">
                  </label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-train" class="event__type-input  visually-hidden" type="radio" name="event-type" value="Train">
                  <label class="event__type-btn" for="event-type-train">
                    <img class="event__type-icon" width="30" height="30" src="img/icons/train.png" alt="Train">
                  </label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-ship" class="event__type-input  visually-hidden" type="radio" name="event-type" value="Ship">
                  <label class="event__type-btn" for="event-type-ship">
                    <img class="event__type-icon" width="30" height="30" src="img/icons/ship.png" alt="Ship">
                  </label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-drive" class="event__type-input  visually-hidden" type="radio" name="event-type" value="Drive">
                  <label class="event__type-btn" for="event-type-drive">
                    <img class="event__type-icon" width="30" height="30" src="img/icons/drive.png" alt="Drive">
                  </label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-flight" class="event__type-input  visually-hidden" type="radio" name="event-type" value="Flight" checked>
                  <label class="event__type-btn" for="event-type-flight">
                    <img class="event__type-icon" width="30" height="30" src="img/icons/flight.png" alt="Flight">
                  </label>
                </div>
              </fieldset>
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Activity</legend>
                <div class="event__type-item">
                  <input id="event-type-check-in" class="event__type-input  visually-hidden" type="radio" name="event-type" value="Check-in">
                  <label class="event__type-btn" for="event-type-check-in">
                    <img class="event__type-icon" width="30" height="30" src="img/icons/check-in.png" alt="Check-in">
                  </label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-sightseeing" class="event__type-input  visually-hidden" type="radio" name="event-type" value="Sightseeing">
                  <label class="event__type-btn" for="event-type-sightseeing">
                    <img class="event__type-icon" width="30" height="30" src="img/icons/sightseeing.png" alt="Sightseeing">
                  </label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-restaurant" class="event__type-input  visually-hidden" type="radio" name="event-type" value="Restaurant">
                  <label class="event__type-btn" for="event-type-restaurant">
                    <img class="event__type-icon" width="30" height="30" src="img/icons/restaurant.png" alt="Restaurant">
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">Flight to Chamonix</label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">
            <datalist id="destination-list-1">
              <option value="Amsterdam"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
            </datalist>
          </div>
          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/09/19 12:30">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/09/19 13:00">
          </div>
          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">Price</label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="120">
          </div>
          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">
          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>
            <div class="event__available-offers">
              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage" type="checkbox" name="event-offer" checked>
                <label class="event__offer-label" for="event-offer-luggage">
                  <span class="event__offer-title">Add luggage</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">30</span>
                </label>
              </div>
              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort" type="checkbox" name="event-offer">
                <label class="event__offer-label" for="event-offer-comfort">
                  <span class="event__offer-title">Switch to comfort class</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">30</span>
                </label>
              </div>
              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal" type="checkbox" name="event-offer">
                <label class="event__offer-label" for="event-offer-meal">
                  <span class="event__offer-title">Add meal</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">30</span>
                </label>
              </div>
              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats" type="checkbox" name="event-offer">
                <label class="event__offer-label" for="event-offer-seats">
                  <span class="event__offer-title">Choose seats</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">30</span>
                </label>
              </div>
              <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-travel" type="checkbox" name="event-offer">
                <label class="event__offer-label" for="event-offer-travel">
                  <span class="event__offer-title">Travel by train</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">30</span>
                </label>
              </div>
            </div>
          </section>
          <section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">Chamonix is a beautiful town in the French Alps. It's known for its skiing and mountaineering.</p>
            <div class="event__photos-container">
              <div class="event__photo-preview">
                <img class="event__photo" src="img/photos/chamonix.jpg" alt="Chamonix">
              </div>
            </div>
          </section>
        </section>
      </form>`;
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
