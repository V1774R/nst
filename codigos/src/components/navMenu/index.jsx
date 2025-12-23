import styled from "styled-components";
import { FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";

const MenuEstilizado = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 18px;

    @media(min-width: 700px){
        display: none;
    }

    p {
        height: 72px;
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 8px;
        cursor: pointer;
    }
    
`

export const NavMenu = () => {


    return (
        <MenuEstilizado>
            <p><FaHome />início</p>
            <p><FaProjectDiagram />projetos</p>
            <p><FaUser />sobre</p>
        </MenuEstilizado>
    )
}
