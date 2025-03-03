import { Link } from "react-router-dom";
import "../css/nav.css";
import { JSX } from "react";

export function Navbar() {
    return <div className="nav">
        <div className="items">
            <NavElement path="/">Home</NavElement>
            <NavElement path="/create">Create</NavElement>
        </div>
    </div>
}

function click(event: React.MouseEvent<HTMLAnchorElement>) {
const target = event.target as HTMLLinkElement;
    const parent = target.parentElement;
    const selected = parent?.querySelectorAll('a.selected');
    selected?.forEach(e => e.classList.remove('selected'));
    target.classList.add('selected');
}

function NavElement({ children, path }: { children: JSX.Element | string, path: string }) {
    return <Link to={path} className={window.location.pathname == path ? "selected" : undefined} onClick={click}>
        {children}
    </Link>
}