import { AddNewItem } from "./AddNewItem";
import { AppContainer } from "./styles";
import Column from "./Column";
import { addList } from "./actions";
import { useAppState } from "./AppStateContext";

export const App = () => {
  const {lists, dispatch} = useAppState(); 
  return (
    <AppContainer>
      <>
      {lists.map((list) => (
        <Column text={list.text} id={list.id} key={list.id} />
      ))}
      <AddNewItem toggleButtonText="+ Lägg till lista"
      onAdd={text => {dispatch(addList(text))}} />
      </>
    </AppContainer>
  );
}

export default App;
