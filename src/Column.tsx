import { ColumnContainer, ColumnTitle } from "./styles";

import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { addTask } from "./actions";
import { useAppState } from "./AppStateContext";

type ColumnProps = {text: string, id: string};

// interface ColumnProps {
//     text: string,
// }

const Column = ({text, id}: ColumnProps) => {
    const { getTasksByListId, dispatch} = useAppState();
    const tasks = getTasksByListId(id);
    return (
        <ColumnContainer>
        <>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map(task => {
                return (  <Card text={task.text} id= {task.id} key={task.id} />)
            })}
            <AddNewItem toggleButtonText="+ Lägg till task"
            onAdd={text => {
                dispatch(addTask(text, id));
            }} dark/>
        </>
        </ColumnContainer>
    );
}
export default Column;