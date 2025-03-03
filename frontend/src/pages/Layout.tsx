import { Outlet } from "react-router-dom";
import { Navbar } from "../elements/Navbar";

export function Layout() {
    return <>
        <Navbar />
        <main>
            <Outlet />
        </main>
    </>
}