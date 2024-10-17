/* eslint-disable no-unused-vars */
 import React from "react";
import style from "./style.module.css";
import {Header} from "../../components/Header"
import {Footer} from "../../components/Footer"

import maoComPlanta from "../../assets/mao_com_planta.svg"
import arvore from "../../assets/arvore_inlustrativa.jpg"
import homens from "../../assets/tres_homens.svg"
//import alunos from "../../assets/alunos.jpg"

export function QuemSomos(){
    return (
       <>
          <Header /> 
        <div className={style.Containner}>
               
                <div className={style.title}>
                    <img className={style.icons} src={maoComPlanta} alt="imagem de uma mao com planta" />
                    <h1>Sobre o Projeto</h1>

                </div>
                    <div className={style.subTitle}> 
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium officia, quisquam dignissimos asperiores ut saepe voluptatem iure ab fugiat beatae earum minima aliquam at repudiandae quo aut culpa facilis eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quas veritatis impedit. Exercitationem, consectetur velit. Deserunt molestiae blanditiis dolor mollitia nam iusto quo amet vel corporis fuga ab, sed alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus nobis nulla totam nihil aperiam ut, explicabo natus eum vero delectus asperiores deleniti ipsam fuga sapiente tenetur dolores facilis. Aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati doloribus placeat dolore tenetur nisi eaque rem ratione quam, veritatis, quis quas sed earum itaque cupiditate modi officiis vero voluptate?</p>
                        <img className={style.arvore} src={arvore} alt="Inlustrativa de uma arvore" />
                    </div>

                    <div className={style.Team}>
                        <img className={style.icons} src={homens} alt=" img de um grupo " />
                        <h2>Equipe</h2>

                    </div>
                        <div className={style.teamtext}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum animi laborum, inventore quae reprehenderit deleniti ab praesentium quia enim repellat reiciendis iusto ipsam facere assumenda dolor quas quaerat eos officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquid saepe iste itaque numquam! Et tempora voluptatem esse, pariatur nesciunt facere eos autem fugit officia ipsum, eveniet eaque dolores facilis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore iure non omnis cupiditate ratione modi eius inventore. Deleniti cupiditate, possimus hic molestiae aliquid dolores distinctio eum, sit libero omnis doloremque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate earum odio, atque enim, molestiae est distinctio labore maiores possimus nulla veniam itaque recusandae officiis harum quas beatae accusamus! Eos, a!</p>
                        </div>

                        <div className={style.TeamCollaboration}>

                            <img src="" alt="Grupo em Geral" />
                        </div>
                       
        </div>
        <Footer/>
        </>
    );

}

