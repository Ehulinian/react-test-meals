import { useContext } from "react";
import { MealsContext } from "../../store/MealsContext";
import { FavoriteCard } from "../FavoriteCard";
import styles from "./FavoritesList.module.scss";
import { Meal } from "../../types/Meal";
import { Instructions } from "../Instructions";
import { combineIngredients } from "../../helper/combine";

export const FavoritesList = () => {
  const { favorites } = useContext(MealsContext);

  const ingredientsList = combineIngredients(favorites);

  if (favorites.length === 0) {
    return <div className={styles.noMeals}>There are no meals</div>;
  }

  return (
    <div className={styles.favoritesList}>
      <h1 className={styles.favoritesListHeader}>Favorite recipes</h1>

      <div className={styles.favoritesListFavorites}>
        {favorites.map((meal: Meal) => (
          <FavoriteCard key={meal.idMeal} meal={meal} />
        ))}
      </div>

      {favorites.length > 0 && (
        <div className={styles.favoritesListSummary}>
          <h2 className={styles.favoritesListSummaryTitle}>Ingredients List</h2>
          <ul className={styles.favoritesListSummaryIngredients}>
            {ingredientsList.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2 className={styles.favoritesListSummaryTitle}>Instructions</h2>
          <div className={styles.favoritesListSummaryInstructions}>
            <Instructions meals={favorites} />
          </div>
        </div>
      )}
    </div>
  );
};
