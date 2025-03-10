import { useEffect, useState } from "react"
import { Button, Table } from "react-bootstrap";

interface concert {
    id: number,
    fellepo: string,
    kezdesiIdo: string,
    idotartam: number,
    elmaradE: Boolean
}

export default function Home() {
    const [concerts, setConserts] = useState<concert[]>([]);

    useEffect(() => {
        async function load() {
            const result = await fetch("http://localhost:3000/koncert", {
                method: "GET",
                headers: { "Accept": "application/json" }
            });
            if (result.ok) {
                const json = await result.json();
                setConserts(json.data);
            } else {
                console.log(await result.text());
            }
        }
        load();
    }, []);

    async function elmaradFunction(id: number) {
        const result = await fetch("http://localhost:3000/koncert/" + id, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                elmaradE: false
            })
        }
        )
        return
    }

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Fellépő</th>
                        <th>Kezdési idő</th>
                        <th>Időtartam</th>
                        <th>Elmarad?</th>
                    </tr>
                </thead>
                <tbody>
                    {concerts.map((c) => (
                        <tr>
                            <td>{c.fellepo}</td>
                            <td>{c.kezdesiIdo}</td>
                            <td>{c.idotartam}</td>
                            <td>{c.elmaradE? "Igen": "Nem"}<Button onClick={elmaradFunction(c.id)} hidden/></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}