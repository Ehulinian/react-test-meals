import { useContext, MouseEvent } from "react";
import { Meal } from "../../types/Meal";
import { MealsContext } from "../../store/MealsContext";
import classNames from "classnames";
import styles from "./FavoriteButton.module.scss";

type FavoriteButtonProps = {
  meal: Meal;
};

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ meal }) => {
  const { addToFavorites, removeFromFavorites, favorites } =
    useContext(MealsContext);

  const isFavorite = favorites.some(
    (favorite) => favorite.idMeal === meal.idMeal
  );

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      removeFromFavorites(meal.idMeal);
    } else {
      addToFavorites(meal);
    }
  };

  return (
    <button
      className={classNames(styles.favoriteButton, {
        [styles.isFavorite]: isFavorite,
      })}
      onClick={handleClick}
    >
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
};
