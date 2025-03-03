import { useEffect, useState } from "react";
import { Koncert } from "../types";
import { Card } from "./Card";
import '../css/listing.css';


export function Listing() {
    const [data, setData] = useState<Koncert[]>();

    useEffect(() => {
        const load = async () => {
            const result = await fetch("http://localhost:3001/koncert");    
            if (!result.ok) console.error("Filade to load data");
            setData(await result.json());
        };

        load();
    }, []);


    return <div className="listing">
        {data && data.map(e => <Card key={e.id} item={e} />)}
    </div>
}