import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { Counter } from "../Counter";
import { useContext } from "react";
import { MealsContext } from "../../store/MealsContext";

const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.headerNavLink} ${styles.active}` : styles.headerNavLink;

export const Header = () => {
  const { favorites } = useContext(MealsContext);

  const favoriteCount = favorites.length;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={getNavLinkClassName}>
          Recipes
        </NavLink>

        <NavLink to="/favorites" className={getNavLinkClassName}>
          Favorites
        </NavLink>
      </nav>

      <Counter itemCount={favoriteCount} />
    </header>
  );
};
