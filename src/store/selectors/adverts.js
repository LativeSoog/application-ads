const advertsSelector = (store) => store.Adverts

export const setFilterAdverts = (store) =>
  advertsSelector(store)?.filteredAdverts
