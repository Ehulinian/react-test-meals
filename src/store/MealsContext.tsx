import { createContext } from "react";
import { Meal } from "../types/Meal";

export type State = {
  page: number;
  favorites: Meal[];
};

type MealsContextType = State & {
  setPage: (payload: number) => void;
  addToFavorites: (payload: Meal) => void;
  removeFromFavorites: (payload: string) => void;
  setFavorites: (payload: Meal[]) => void;
};

export const MealsContext = createContext<MealsContextType>({
  page: 1,
  favorites: [],
  setPage: () => {},
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  setFavorites: () => {},
});
