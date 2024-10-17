/* eslint-disable no-unused-vars */

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import logo from "../../assets/logo.png"
import lupa from "../../assets/lupa.png"
import React, { useCallback } from "react";
import style from "./style.module.css"

export function Header(){
    return(
        <>
          <div className={style.topo}>
          <img className={style.logo} src={logo} alt="logo" />
          <div className={style.search_bar}>
          <Form.Control className={style.pesquisa} type="text" placeholder="Pesquisar Plantas" />
          <Button type="button">
            <img className={style.lupa} src={lupa}  alt="" />
          </Button>
          </div>

          <div className={style.nav}>
            <Button id="home" variant="outline-light">
              Home
            </Button>
            <Button id="info" variant="outline-light">Quem Somos</Button>
          </div>
        </div>
        </>
    )
}