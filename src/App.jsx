import { useState } from "react";
import itensContainer from "./ItensContainer";
import addItemsContainer from "./AddItemsContainer";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState(["Lavar roupa", "Ir ao mercado"]);

  const removeFromList = (item) => {
    const newList = [...taskList];
    const itemIndex = newList.indexOf(item);
    newList.splice(itemIndex, 1);
    setTaskList(newList);
  };

  const addToList = (item) => {
    /*   const newList = [...taskList];
    newList.push(item);
    setTaskList(newList); */
    setTaskList([...taskList, item]);
  };

  return (
    <div>
      <h1>Minha lista de tarefas</h1>;
      <addItemsContainer addToList={addToList}/>
      <itensContainer taskList={taskList} removeFromList={removeFromList} />
    </div>
  );
}

export default App;
