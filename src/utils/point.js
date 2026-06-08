const getPointDestination = (destinations, destinationId) =>
  destinations.find((destination) => destination.id === destinationId);

const getPointOffers = (allOffers, point) => {
  const pointTypeOffers = allOffers.find((offer) => offer.type === point.type);
  const offers = pointTypeOffers ? pointTypeOffers.offers : [];
  return offers.filter((offer) => point.offers.includes(offer.id));
};

export { getPointDestination, getPointOffers };
