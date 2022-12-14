import { DragItem } from "./DragItem";
import { setDraggedItem } from "./actions";
import { useAppState } from "./AppStateContext";
import { useDrag } from "react-dnd";

export const useItemDrag = (item: DragItem) => {
    const { dispatch } = useAppState();
    const [, drag] = useDrag({
        type: item.type,
        item: () => {
            dispatch(setDraggedItem(item));
            return item;
        },
        end: () => dispatch(setDraggedItem(null))
    });
    return {drag};
}