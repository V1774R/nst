import { createGlobalStyle } from "styled-components";

export const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        font-family: sans-serif;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
    }

    :root{
        --cor-fundo: #202020;
        --cor-cabecalho: #f5f5f5;
        --cor-rodape: #f5f5f5;
        --cor-botoes: #030303;
    }

    main{
        background-color: var(--cor-fundo);
        height: calc(100dvh - 80px - 72px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 16px;
        overflow: auto;

        @media(min-width: 700px){
            height: calc(100dvh - 80px - 40px);
        }
    }
    
    button{
        width: 300px;
        padding: 12px;
        border: none;
        border-radius: 8px;
        background-color: #4e4e4e;
        color: white;
        transition: 500ms;
        cursor: pointer;
    }
    button:hover{
        background-color: #0c0c0c;
        transition: 500ms;
    }

`