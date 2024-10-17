/* eslint-disable no-unused-vars */
/* import style from "../../App.module.css"; */
import React from "react";
import style from "./style.module.css"
import grama from "../../assets/grama_rodape.png"

export function Footer(){
    return(
        <>
        <footer className={style.fundo}>
            <p className="text-center">Jardim Senac 2024 &#169;</p>
            <div className={style.grama} ></div>
        </footer>
        </>
    )
}