import { Koncert } from "../types";
import '../css/card.css'

export function Card({ item }: { item: Koncert }) {
    const dateString = item.kezdes.toLocaleString()
        .replaceAll('-', '. ')
        .replace('T', ' ')
        .slice(0, -5);

    function cancel(event: React.MouseEvent<HTMLElement>) {
        const parent = (event.target as HTMLElement).parentElement;
        parent?.classList.add("disabled");
        fetch("http://localhost:3001/koncert/" + parent?.dataset.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ elmarad: true })
        });
    }

    return <div data-id={item.id} className={"card" + (item.elmarad ? " disabled" : "")}>
        <p className="fellepo">{item.fellepo}</p>
        <p className="kezdes">{dateString}</p>
        <p className="ido">{item.idotartam}</p>
        <button onClick={cancel}>Elmarad</button>
    </div>
}