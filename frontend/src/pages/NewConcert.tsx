import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import "./index.css";


export default function NewConcert() {

    const [error, setError] = useState('');
    const [sikerult, setSikerult] = useState('');


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setSikerult('');
        event.preventDefault();
        setError('');
        const data: FormData = new FormData(event.target as HTMLFormElement);

        try {
            const res = await fetch('http://localhost:3000/koncert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fellepo: data.get("fellepo"),
                    kezdesiIdo: data.get("kezdesiIdo"),
                    idotartam: data.get("idotartam") ? parseInt(data.get("idotartam")!.toString()) : ""
                })
            });

            if (!res.ok) {
                const errorData = await res.json();
                setError(errorData.message || 'Nem sikeres hozzáadás');
                return;
            }
            else{
                setSikerult("Sikeres hozzáadás!");
            }
        } catch (err: any) {
            setError('An error occurred: ' + err.message);
        }
    };

    return (
        <>
            <div className="form">
                <Form onSubmit={handleSubmit}>
                    {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                    <Form.Group className="mb-3">
                        <Form.Label>Fellépő: </Form.Label>
                        <Form.Control type="text" placeholder="Fellépő beírás" name='fellepo' id='fellepo' required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Kezdési idő: </Form.Label>
                        <Form.Control type="datetime-local" placeholder="Kezdési idő beírás" name='kezdesiIdo' id='kezdesiIdo' required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Időtartam: </Form.Label>
                        <Form.Control type="number" placeholder="Időtartam beírás" name='idotartam' id='idotartam' required />
                    </Form.Group>

                    <Button variant="dark" type="submit" className="w-100 mt-3">Hozzáadás</Button>
                </Form>
                {sikerult && <Alert variant="success" className="mt-3">{sikerult}</Alert>}
            </div>
        </>
    )
}