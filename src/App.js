import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import AdicionarNovo from "./components/adicionarNovo.component";
import ItemComponent from "./components/item.component";
import getTodos from "./services/todo.service";

function App() {
  const [itens, setItens] = useState([]);

  const handleAdd = (textoAtual) => {
    let novoState = [];
    novoState.push(textoAtual);
    novoState = novoState.concat(itens);
    setItens(novoState);
  }

  const handleExcluir = (index) => {
    let novoState = [];
    novoState = novoState.concat(itens);
    novoState.splice(index, 1);
    setItens(novoState);
  }

  const handleInit = async () => {
    const listApi = await getTodos();
    setItens(listApi.map((item) => { return item.title }));
  }

  useEffect(() => {
    handleInit();
  }, []);

  return (
    <Container maxWidth="sm">
      <AdicionarNovo onAdd={handleAdd} />
      {itens.map((item, index) => (<ItemComponent texto={item} index={index} onExcluir={handleExcluir} />))}
    </Container>
  );
}

export default App;
