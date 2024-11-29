import { ReactNode, useReducer, useMemo } from "react";
import { MealsContext, State } from "./MealsContext";
import { Meal } from "../types/Meal";

interface Props {
  children: ReactNode;
}

const initialState: State = {
  page: 1,
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

type Action =
  | { type: "SET_PAGE"; payload: number }
  | { type: "SET_ADD_TO_FAVORITES"; payload: Meal }
  | { type: "SET_REMOVE_FROM_FAVORITES"; payload: string }
  | { type: "SET_FAVORITES"; payload: Meal[] };

const mealsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "SET_ADD_TO_FAVORITES": {
      const newFavorites = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return { ...state, favorites: newFavorites };
    }
    case "SET_REMOVE_FROM_FAVORITES": {
      const updatedFavorites = state.favorites.filter(
        (meal) => meal.idMeal !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return { ...state, favorites: updatedFavorites };
    }
    case "SET_FAVORITES": {
      localStorage.setItem("favorites", JSON.stringify(action.payload));
      return { ...state, favorites: action.payload };
    }
    default:
      return state;
  }
};

export const MealsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mealsReducer, initialState);

  const setPage = (payload: number) => {
    dispatch({ type: "SET_PAGE", payload });
  };

  const addToFavorites = (meal: Meal) => {
    dispatch({ type: "SET_ADD_TO_FAVORITES", payload: meal });
  };

  const removeFromFavorites = (mealId: string) => {
    dispatch({ type: "SET_REMOVE_FROM_FAVORITES", payload: mealId });
  };

  const setFavorites = (newOrder: Meal[]) => {
    dispatch({ type: "SET_FAVORITES", payload: newOrder });
  };

  const value = useMemo(
    () => ({
      ...state,
      setPage,
      addToFavorites,
      removeFromFavorites,
      setFavorites,
    }),
    [state]
  );

  return (
    <MealsContext.Provider value={value}>{children}</MealsContext.Provider>
  );
};
