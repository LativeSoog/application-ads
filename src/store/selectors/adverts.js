const advertsSelector = (store) => store.Adverts

export const getFilterAdverts = (store) =>
  advertsSelector(store)?.filteredAdverts

export const getFilteredListAdverts = (store) =>
  advertsSelector(store)?.filteredListAdverts
