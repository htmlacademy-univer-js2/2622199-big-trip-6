import TripInfoView from '../view/trip-info-view.js';
import {render, remove, RenderPosition, replace} from '../framework/render.js';
import {sortPointDay} from '../utils/sort.js';
import {formatTripDates} from '../utils/date.js';
import {getPointDestination, getPointOffers} from '../utils/point.js';

const MAX_CITIES_TO_DISPLAY = 3;

export default class TripInfoPresenter {
  #tripInfoContainer = null;
  #pointsModel = null;
  #tripInfoComponent = null;

  constructor({tripInfoContainer, pointsModel}) {
    this.#tripInfoContainer = tripInfoContainer;
    this.#pointsModel = pointsModel;
    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  init() {
    const points = this.#pointsModel.points;

    if (points.length === 0) {
      this.#removeTripInfo();
      return;
    }

    const sortedPoints = [...points].sort(sortPointDay);
    const tripInfo = this.#calculateTripInfo(sortedPoints);
    this.#renderTripInfo(tripInfo);
  }

  #handleModelEvent = () => {
    this.init();
  };

  #removeTripInfo() {
    if (this.#tripInfoComponent) {
      remove(this.#tripInfoComponent);
      this.#tripInfoComponent = null;
    }
  }

  #renderTripInfo(tripInfo) {
    const prevTripInfoComponent = this.#tripInfoComponent;
    this.#tripInfoComponent = new TripInfoView({tripInfo});

    if (prevTripInfoComponent === null) {
      render(this.#tripInfoComponent, this.#tripInfoContainer, RenderPosition.AFTERBEGIN);
      return;
    }

    replace(this.#tripInfoComponent, prevTripInfoComponent);
    remove(prevTripInfoComponent);
  }

  #calculateTripInfo(points) {
    const startPoint = points[0];
    const endPoint = points[points.length - 1];

    const routeTitle = this.#getRouteTitle(points);
    const dates = formatTripDates(startPoint.dateFrom, endPoint.dateTo);
    const cost = this.#calculateTotalCost(points);

    return {
      title: routeTitle,
      dates,
      cost
    };
  }

  #getRouteTitle(points) {
    const cityNames = points.map((point) => {
      const destination = getPointDestination(this.#pointsModel.destinations, point.destination);
      return destination ? destination.name : '';
    });

    if (cityNames.length > MAX_CITIES_TO_DISPLAY) {
      return `${cityNames[0]} &mdash; ... &mdash; ${cityNames[cityNames.length - 1]}`;
    }

    return cityNames.join(' &mdash; ');
  }

  #calculateTotalCost(points) {
    let totalCost = 0;

    points.forEach((point) => {
      totalCost += point.basePrice;

      const selectedOffers = getPointOffers(
        this.#pointsModel.offers,
        point
      );

      selectedOffers.forEach((offer) => {
        totalCost += offer.price;
      });
    });

    return totalCost;
  }
}
