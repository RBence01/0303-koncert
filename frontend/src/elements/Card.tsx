import { Koncert } from "../types";
import '../css/card.css'

export function Card({item}: {item: Koncert}) {
    const dateString = item.kezdes.toLocaleString()
            .replaceAll('-', '. ')
            .replace('T', ' ')
            .slice(0, -5);

    return <div className="card">
        <p className="fellepo">{item.fellepo}</p>
        <p className="kezdes">{dateString}</p>
        <p className="ido">{item.idotartam}</p>
        <button>Elmarad</button>
    </div>
}