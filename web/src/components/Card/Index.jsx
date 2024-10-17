/* eslint-disable no-unused-vars */
import React from "react";
import Button from "react-bootstrap/esm/Button";
import style from "./style.module.css";
import Acerola from "../../assets/acerola.jpg";
import coisa from "../../assets/coisa.jpg";

export function Card() {
  return (
    <div className={style.AllCard}>
      
      <div className={style.info}>
        <div className={style.Img}>
        <img src={Acerola} alt="" />
        </div>
        <div className={style.cardContainer}>
        <div className={style.H3}>
          <h3>Descrição</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quae ab
          distinctio, reprehenderit ea porro ipsam assumenda eos ex minima,
          temporibus neque ratione aperiam repellendus magnam. Veritatis
          necessitatibus neque commodi!
        </p>
        <Button type="button" variant="info" className={style.Button}>
          Saiba mais
        </Button>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.Img}>
        <img src={Acerola} alt="" />
        </div>
        <div className={style.cardContainer}>
        <div className={style.H3}>
          <h3>Descrição</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quae ab
          distinctio, reprehenderit ea porro ipsam assumenda eos ex minima,
          temporibus neque ratione aperiam repellendus magnam. Veritatis
          necessitatibus neque commodi!
        </p>
        <Button type="button" variant="info" className={style.Button}>
          Saiba mais
        </Button>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.Img}>
        <img src={Acerola} alt="" />
        </div>
        <div className={style.cardContainer}>
        <div className={style.H3}>
          <h3>Descrição</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quae ab
          distinctio, reprehenderit ea porro ipsam assumenda eos ex minima,
          temporibus neque ratione aperiam repellendus magnam. Veritatis
          necessitatibus neque commodi!
        </p>
        <Button type="button" variant="info" className={style.Button}>
          Saiba mais
        </Button>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.Img}>
        <img src={Acerola} alt="" />
        </div>
        <div className={style.cardContainer}>
        <div className={style.H3}>
          <h3>Descrição</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quae ab
          distinctio, reprehenderit ea porro ipsam assumenda eos ex minima,
          temporibus neque ratione aperiam repellendus magnam. Veritatis
          necessitatibus neque commodi!
        </p>
        <Button type="button" variant="info" className={style.Button}>
          Saiba mais
        </Button>
        </div>
      </div>
    </div>
  );
}
