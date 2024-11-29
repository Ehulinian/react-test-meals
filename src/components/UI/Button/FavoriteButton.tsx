import { useContext, MouseEvent } from "react";
import classNames from "classnames";
import styles from "./FavoriteButton.module.scss";
import { MealsContext } from "../../../store/MealsContext";
import { Meal } from "../../../types/Meal";

type FavoriteButtonProps = {
  meal: Meal;
  onRemoveStart?: (id: string) => void;
};

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  meal,
  onRemoveStart,
}) => {
  const { addToFavorites, removeFromFavorites, favorites } =
    useContext(MealsContext);

  const isFavorite = favorites.some(
    (favorite) => favorite.idMeal === meal.idMeal
  );

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      onRemoveStart?.(meal.idMeal);
      setTimeout(() => {
        removeFromFavorites(meal.idMeal);
      }, 300);
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
