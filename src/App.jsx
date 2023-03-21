import React, {useState, useEffect} from "react";
//import styles from "./App.modules.css";
//import {ButtonComponent, NavBarComponent} from "./components";
import { MainLayout } from "./layouts";
import { ItemListContainer } from "./components/ItemListConteiner/ItemListConteiner";
//import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  
  return (
    <div>
    <MainLayout/>
    <ItemListContainer/>
    </div>
  );
}

export default App;
