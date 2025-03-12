import { useState } from "react";
import "../css/create.css"

export function Create() {
    const [status, setStatus] = useState<{ text: string, success: boolean } | undefined>(undefined);
    async function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const target = event.target as HTMLFormElement;
        const formData = new FormData(target);
        const data: any = {}
        for (const [name, value] of formData) {
            data[name] = value;
        }
        data.kezdes = new Date(data.kezdes);
        data.idotartam = parseInt(data.idotartam);
        try {
            const result = await fetch("http://localhost:3001/koncert", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (result.ok) setStatus({ text: "Sikeres hozzáadás", success: true });
            else if (result.status == 409) setStatus({ text: (await result.json()).message, success: false });
            else setStatus({ text: "Sikertelen hozzáadás", success: false })
        } catch {
            setStatus({ text: "Nem sikerült csatlakozni", success: false })
        }
    }

    return <>
        <form className="create" onSubmit={submit}>
            <label>Fellepo:
                <input type="text" name="fellepo" minLength={1} required />
            </label>
            <label>Kezdés:
                <input type="datetime-local" name="kezdes" min={Date.now()} required />
            </label>
            <label>Időtartam:
                <input type="number" name="idotartam" min={1} required />
            </label>
            <input type="submit" value="Létrehozás" />
            {status &&
                <div className={"alert " + (status.success ? "success" : "error")}>
                    <p>{status.text}</p>
                </div>
            }
        </form>
    </>
}