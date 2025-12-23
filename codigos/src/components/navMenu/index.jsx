import styled from "styled-components";
import { FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const MenuEstilizado = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 18px;

    @media(min-width: 700px){
        display: none;
    }

    a {
        height: 72px;
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 8px;
        cursor: pointer;
        text-decoration: none;
        color: #000;
    }
    
`

export const NavMenu = () => {


    return (
        <MenuEstilizado>
            <Link to={"/"}><FaHome />início</Link>
            <Link to={"/projetos"}><FaProjectDiagram />projetos</Link>
            <Link to={"sobre"}><FaUser />sobre</Link>
        </MenuEstilizado>
    )
}
