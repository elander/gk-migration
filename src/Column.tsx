import { ColumnContainer, ColumnTitle } from "./styles";
import { moveList, moveTask, setDraggedItem } from "./actions";

import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { addTask } from "./actions";
import { useAppState } from "./AppStateContext";
import { useDrop } from "react-dnd";
import { useItemDrag } from "./useItemDrag";
import { useRef } from "react";

type ColumnProps = {text: string, id: string};

// interface ColumnProps {
//     text: string,
// }

const Column = ({text, id}: ColumnProps) => {
    const { getTasksByListId, dispatch, draggedItem} = useAppState();
    const tasks = getTasksByListId(id);
    const ref = useRef<HTMLDivElement>(null);
    const {drag} = useItemDrag ({type: "COLUMN", id, text})

    const [, drop] = useDrop({
        accept: ["COLUMN", "CARD"],
        hover: () => {
            if(!draggedItem) return;
            if(draggedItem.type === "COLUMN") {
            if (draggedItem.id === id) {
                return
            }
            dispatch(moveList(draggedItem.id, id))
            } else {
                if(draggedItem.id === id) {
                  return
                }
                if(tasks.length) {
                    return
                }
                dispatch(moveTask(draggedItem.id, id, draggedItem.id, id))
                dispatch(setDraggedItem({ ...draggedItem, id: id }))
            }
        }
    })
    drag(drop(ref));

    return (
        <ColumnContainer ref={ref}>
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