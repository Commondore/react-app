import cn from "clsx";

import styles from "./toggler.module.css";

export const Toggler = ({ show, toggle, children }) => {
  return (
    <button className={cn(styles.btn, !show && styles.active)} onClick={toggle}>
      {children}
    </button>
  );
};
