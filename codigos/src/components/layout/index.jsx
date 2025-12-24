import { Outlet } from "react-router-dom"
import { Cabecalho } from "../cabecalho"
import { Rodape } from "../rodape"
import { EstiloGlobal } from "../estiloGlobal"
import { NavMenu } from "../navMenu"
import { Menu } from "../menu"

export const Layout = () => {
    return (
        <>
            <EstiloGlobal />
            <Menu />
            <Cabecalho />
            <main>
                <Outlet />
            </main>
            <NavMenu />
            <Rodape />

        </>
    )
}