import Filter from '../view/Filter.js';
import Sorting from '../view/Sorting.js';
import NewEventForm from '../view/NewEventForm.js';
import EditEventForm from '../view/EditEventForm.js';
import TripPoint from '../view/TripPoint.js';
import { render, RenderPosition } from '../render.js';

export default class PagePresenter {
  constructor(container) {
    this.container = container;
  }

  init() {
    const filterContainer = document.querySelector('.trip-controls__filters');
    if (filterContainer) {
      render(new Filter(), filterContainer, RenderPosition.BEFOREEND);
    }

    const sortingContainer = document.querySelector(
      '.trip-events > .trip-main__trip-controls'
    );
    if (sortingContainer) {
      render(new Sorting(), sortingContainer, RenderPosition.BEFOREEND);
    }

    render(new EditEventForm(), this.container, RenderPosition.AFTERBEGIN);

    for (let i = 0; i < 3; i++) {
      render(new TripPoint(), this.container, RenderPosition.BEFOREEND);
    }

    render(new NewEventForm(), this.container, RenderPosition.BEFOREEND);
  }
}
