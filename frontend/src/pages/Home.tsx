import { useEffect, useState } from "react"
import { Button, Table } from "react-bootstrap";

interface concert {
    id: number,
    fellepo: string,
    kezdesiIdo: string,
    idotartam: number,
    elmaradE: boolean
}

export default function Home() {
    const [concerts, setConserts] = useState<concert[]>([]);

    useEffect(() => {
        async function load() {
            const result = await fetch("http://localhost:3000/koncert", {
                method: "GET"
            });
            if (result.ok) {
                const json = await result.json();
                setConserts(json);
            } else {
                console.log(await result.text());
            }
        }
        load();
    }, []);

    async function elmaradFunction(id: number) {
        const result = await fetch("http://localhost:3000/koncert/" + id, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ elmaradE: true })
        });

        if (result.ok) {
            setConserts((prevConserts) =>
                prevConserts.map(c =>
                    c.id === id ? { ...c, elmaradE: true } : c
                )
            );
        } else {
            console.log(await result.text());
        }
    }

    return (
        <>
            <Table variant="dark">
                <thead>
                    <tr>
                        <th>Fellépő</th>
                        <th>Kezdési idő</th>
                        <th>Időtartam</th>
                        <th>Elmarad?</th>
                    </tr>
                </thead>
                <tbody>
                    {concerts && concerts.map((c) => (
                        <tr key={c.id} className={c.elmaradE? "elmaradRow": ""}>
                            <td>{c.fellepo}</td>
                            <td>{c.kezdesiIdo}</td>
                            <td>{c.idotartam}</td>
                            <td>{c.elmaradE ? "Igen\t" : "Nem\t"}<Button variant="danger" onClick={() => elmaradFunction(c.id)} disabled={c.elmaradE}>Elmarad</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}