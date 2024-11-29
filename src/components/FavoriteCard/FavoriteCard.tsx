import { Link } from "react-router-dom";
import { Meal } from "../../types/Meal";
import styles from "./FavoriteCard.module.scss";
import { FavoriteButton } from "../../UI/Button";

type FavoriteCardProps = {
  meal: Meal;
};

export const FavoriteCard: React.FC<FavoriteCardProps> = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`} className={styles.favoriteCard}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>

      <FavoriteButton meal={meal} />
    </Link>
  );
};
