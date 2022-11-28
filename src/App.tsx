import { AddNewItem } from "./AddNewItem";
import { AppContainer } from "./styles";
import Column from "./Column";

export const App = () => {
  return (
    <AppContainer>
      <Column text="Att göra:" />
      <AddNewItem toggleButtonText="+ Lägg till lista"
      onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
