import { Button, Card, TextField } from "@material-ui/core";
import { useState } from "react";

function AdicionarNovo({ onAdd }) {
    const [textoAtual, setTextoAtual] = useState('');

    const handleChange = (event) => {
        setTextoAtual(event.target.value);
    }

    const handleAdd = () => {
        onAdd(textoAtual);
        setTextoAtual('');
    }

    return(
        <Card variant="outlined">
            <TextField label="Digite a tarefa..." value={textoAtual} onChange={handleChange}></TextField>
            <Button variant="contained" color="primary" onClick={handleAdd}>Adicionar</Button>
        </Card>
    )
}

export default AdicionarNovo;