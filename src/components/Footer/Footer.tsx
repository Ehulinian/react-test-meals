import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerСontent}>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className={styles.footerLinks}>
          <Link to="/privacy-policy" className={styles.footerLink}>
            Privacy Policy
          </Link>
          <Link to="/terms" className={styles.footerLink}>
            Terms of Service
          </Link>
          <Link to="/contact" className={styles.footerLink}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
