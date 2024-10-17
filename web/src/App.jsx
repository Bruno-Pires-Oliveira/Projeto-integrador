import style from "./App.module.css";
import logo from "./assets/logo.png"
import lupa from "./assets/lupa.png"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card/Index";
export function App() {
  return (
    <>
{/* ------------------------------------HEADER--------------------------------------------------------------------------------------- */}
    <Header />
{/* ------------------------------------------BODY--------------------------------------------------------------- */}
    <div className={style.corpo}>
        <Card/>

      </div>
      {/* -----------------------------------FOOTER---------------------------------------------------------------------------- */}
        
     <Footer />

    </>
  );
}

