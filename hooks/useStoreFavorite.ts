import { useEffect, useState } from "react";

const useStoreFavorite = () => {
  const favoriteListStored =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("favorites") || "[]");

  const [favorites, setFavorites] = useState(favoriteListStored);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return {
    favorites,
    setFavorites,
  };
};

export default useStoreFavorite;
