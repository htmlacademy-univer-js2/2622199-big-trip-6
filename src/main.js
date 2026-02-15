import PagePresenter from './presenter/PagePresenter.js';

const siteMainElement = document.querySelector('.trip-events');
const pagePresenter = new PagePresenter(siteMainElement);
pagePresenter.init();
