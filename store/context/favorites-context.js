import { createContext, useState } from "react";
export const FavoriteContext = createContext({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});
function FavoriteContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  function addFavorite(id) {
    return setFavoriteMealIds((currentFavoriteId) => [
      ...currentFavoriteId,
      id,
    ]);
  }
  function removeFavorite(id) {
    return setFavoriteMealIds((currentFavoriteId) =>
      currentFavoriteId.filter((mealId) => mealId !== id)
    );
  }
  const values = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoriteContext.Provider value={values}>
      {children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContextProvider;
