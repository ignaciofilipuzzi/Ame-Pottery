import React from "react";
import NavItem from "./NavItem";
import styles from "./NavComponent.module.css";
import pottery from "../../../images/pottery.png"
import { CartWidgetComponent } from '../CartWidgetComponent/CartWidgetComponent';

export const NavBarComponent = () => {
  return (
    <nav className={styles.nav}>
      <header>React Pottery</header>
      <div className={styles.navItems}>
        <NavItem label="Pottery">
        <img src={pottery} alt="logo pottery" />
        </NavItem>
        <NavItem label="Home" src="#" />
        <NavItem label="Nosotros" src="#" />
        <NavItem label="Vajilla" src="#" />
        <NavItem label="Deco" src="#" />
        <CartWidgetComponent/>
      </div>
    </nav>
  );
};
