import React from "react";
import styles from "./Counter.module.scss";

type FavoriteIconProps = {
  itemCount: number;
};

export const Counter: React.FC<FavoriteIconProps> = ({ itemCount }) => {
  return (
    <div className={styles.favoriteCount}>
      {itemCount > 0 && (
        <div className={styles.badge}>
          <span>{itemCount}</span>
        </div>
      )}
    </div>
  );
};
