import { Outlet } from "react-router-dom"
import { Cabecalho } from "../cabecalho"
import { Rodape } from "../rodape"
import { EstiloGlobal } from "../estiloGlobal"
import { NavMenu } from "../navMenu"

export const Layout = () => {
    return (
        <>
            <EstiloGlobal />
            <Cabecalho />
            <main>
                <Outlet />
            </main>
            <NavMenu />
            <Rodape />

        </>
    )
}