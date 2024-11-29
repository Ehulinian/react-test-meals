import { Link } from "react-router-dom";
import { Meal } from "../../types/Meal";
import styles from "./FavoriteCard.module.scss";
import { useState } from "react";
import classNames from "classnames";
import { FavoriteButton } from "../UI/Button";

type FavoriteCardProps = {
  meal: Meal;
};

export const FavoriteCard: React.FC<FavoriteCardProps> = ({ meal }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemoveStart = () => {
    setIsRemoving(true);
  };

  return (
    <Link
      to={`/recipe/${meal.idMeal}`}
      className={classNames(styles.favoriteCard, {
        [styles.removing]: isRemoving,
      })}
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className={styles.image}
      />
      <h3>{meal.strMeal}</h3>

      <FavoriteButton meal={meal} onRemoveStart={handleRemoveStart} />
    </Link>
  );
};
