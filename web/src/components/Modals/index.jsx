import style from "./style.module.css";
// eslint-disable-next-line no-unused-vars
import React from "react";

import TempoVida from "../../assets/Tempo_de_Vida.svg"
import AlturaPlanta from "../../assets/Altura_da_Planta.svg"
import CorFlor from "../../assets/Cor_da_Flor.svg"
import TipoFolha from "../../assets/Tipo_de_Planta.svg"
import CorTronco from "../../assets/Cor_do_Tronco.svg"
import TempoColheita from "../../assets/Tempo_de_Colheita.svg"
import Dormencia from "../../assets/Dormencia.svg"
import TipoPlanta from "../../assets/Tipo_de_Planta.svg"
import TemperaturaIdeal from "../../assets/temperatura_Ideal.svg"

export function Modal() {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#modelModal"
      >
        Aqui tem o nome de uma planta (Parte do Pedro e Lucas)
      </button>
      <div
        className="modal fade"
        id="modelModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-xl"
          style={{ maxWidth: "80%" }}
          role="document"
        >
          <div className="modal-content" style={{ backgroundColor: "#f5f5dc" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                ID da planta escolhida (Mudavel)
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ overflowX: "hidden" }}>
              <div className={style.app}>
                <header className={style.header}>
                  <div className={style.frutasDescricao}>
                    <h1 id="titulo">Nome da Planta(de forma dinamica)</h1>
                    <p id="descricao">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus, nobis. Quae officia consequuntur, ab exercitationem
                      architecto tempore laboriosam. Soluta laborum dolore
                      voluptas officiis dolorum consequatur, vel nesciunt
                      quaerat dolor inventore?
                    </p>
                  </div>
                  <div className={style.imagem}></div>
                </header>
                <main className={style.main}>
                  <div className={style.infoPlanta}>
                    <div className={style.coluna1}>
                      {/* Aqui Digo e Gabe vão colocar os Icons do Figma nas imgs, a estilização deixe comigo
                      Ass: Meu ovos
                      */}
                      <img src={TempoVida} alt="" className={style.incon}/>

                      <span>
                        tempo de vida
                      </span>
                      <span>
                        <img src={AlturaPlanta} alt="" className={style.incon}/>
                        altura da planta
                      </span>
                      <span>
                        <img src={CorFlor} alt="" className={style.incon}/>
                        cor da flor
                      </span>
                      <span>
                        <img src={TipoFolha} alt="" className={style.incon}/>
                        tipo de folha
                      </span>
                      <span>
                        <img src={CorTronco} alt="./assets/Cor_do_Tronco" className={style.incon}/>
                        Cor do tronco
                      </span>
                    </div>
                    <div className={style.coluna2}>
                      <span>
                        <img src={TempoColheita} alt="" className={style.incon} />
                        tempo de colheita
                      </span>
                      <span>
                        <img src={Dormencia} alt="" className={style.incon}/>
                        dormência
                      </span>
                      <span>
                        <img src={TipoPlanta} alt="" className={style.incon}/>
                        tipo de planta
                      </span>
                      <span>
                        <img src={TemperaturaIdeal} alt="" className={style.incon}/>
                        temperatura ideal
                      </span>
                    </div>
                  </div>
                </main>
                <aside className={style.aside}>
                  <div className={style.imagemFlor}></div>
                  <div className={style.outraImagem}></div>
                </aside>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Retomar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
