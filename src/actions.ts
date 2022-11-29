import { DragItem } from "./DragItem";

// en type som definierar alla actions som reducern behöver hantera:
export type Action = 
| {
    type: "ADD_LIST",
    payload: string
} 
| {
    type: "ADD_TASK",
    payload: {
        text: string
        listId: string
    }
}
| {
    type: "MOVE_LIST",
    payload: {
    draggedId: string
    hoverId: string
    }
}
| {
    type: "SET_DRAGGED_ITEM",
    payload: DragItem | null
}
| {
    type: "MOVE_TASK"
    payload: {
        draggedItemId: string
        hoveredItemId: string
        sourceColumnId: string
        targetColumnId: string
    }
};   

// nedanför har vi funktioner som skapar actions med rätt värden 
// i "type" och "payload" så att reducern kan hantera dem rätt
// när vi skickar in dem via "dispatch" (reducern är appStateReducer)
export const moveTask = (
    draggedItemId: string,
        hoveredItemId: string,
        sourceColumnId: string,
        targetColumnId: string,
): Action => ({
    type: "MOVE_TASK",
    payload: {draggedItemId,
        hoveredItemId,
        sourceColumnId,
        targetColumnId,}
});

export const addTask = (text: string, listId: string): Action => ({
    type: "ADD_TASK",
    payload: {
        text,
        listId
    }
});

export const addList = (text: string): Action => ({
    type: "ADD_LIST",
    payload: text
});

export const moveList = (
    draggedId: string,
    hoverId: string
): Action => ({
    type: "MOVE_LIST",
    payload: {draggedId, hoverId}
});

export const setDraggedItem = (
    draggedItem: DragItem | null
): Action => ({
    type: "SET_DRAGGED_ITEM",
    payload: draggedItem
})