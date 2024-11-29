import { Link } from "react-router-dom";
import { Meal } from "../../types/Meal";
import styles from "./MealCard.module.scss";
import { FavoriteButton } from "../../UI/Button";

type MealCardProps = {
  meal: Meal;
};

export const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`} className={styles.mealCard}>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className={styles.mealImage}
      />
      <div className={styles.mealInfo}>
        <h2 className={styles.mealTitle}>{meal.strMeal}</h2>
        <p className={styles.mealCategory}>Category: {meal.strCategory}</p>
        <p className={styles.mealOrigin}>Origin: {meal.strArea}</p>
      </div>

      <FavoriteButton meal={meal} />
    </Link>
  );
};
