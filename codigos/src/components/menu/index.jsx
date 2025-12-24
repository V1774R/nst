import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { ContextoGlobal } from "../../contexto"
import { Link } from "react-router-dom"

const MenuEstilizado = styled.div`
    width: 100vw;
    height: calc(100vh - 80px);
    background-color: #000000f9;
    position: absolute;
    left: 0px;
    z-index: 100;
    transition: 1s;
    padding: 24px;

    p{
        color: white;
        text-align: center;
        font-size: 0.8rem;
    }
`

const AreaBotoes = styled.div`
    height: calc(100% - 24px);
    display: flex;
    flex-direction: column;
    gap: 16px;
    a{
        text-align: left;
        font-size: 1rem;
        text-decoration: none;
        color: #fff;
    }
`

export const Menu = () => {
    const { state, dispatch } = useContext(ContextoGlobal)

    return (
        <MenuEstilizado onClick={() => { dispatch({ type: "FECHAR_MENU" }) }} style={{ top: state.menu ? "80px" : "-101vh" }}>
            <AreaBotoes>
                <Link to={"/"}>Inicio</Link>
                <Link to={"/projetos"}>Projetos</Link>
                <Link to={"/sobre"}>Sobre</Link>
                <Link to={"/contato"}>Contato</Link>
                <Link to={"/feedback"}>Feedbacks</Link>
            </AreaBotoes>
            <p>Desenvolvido por Núcleo Setorial de Tecnologia <br /> Guarda Civil Municipal do Recife</p>
        </MenuEstilizado>
    )
}