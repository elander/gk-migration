import {
    AppState,
    List,
    Task,
    appStateReducer,
} from "./appStateReducer";
import { Dispatch, createContext, useContext } from "react";

import { Action } from "./actions";
import { DragItem } from "./DragItem";
import { useImmerReducer } from "use-immer";

type AppStateContextProps = {
    lists: List[],
    dispatch: Dispatch<Action>,
    getTasksByListId(id: string): Task[],
    draggedItem: DragItem | null,
}

const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
)

const appData: AppState = {
    draggedItem: null,
    lists: [
        {
            id: "0",
            text: "Dagens schema:",
            tasks: [{id: "t0", text: "Contextmeckande"},
                    {id: "t1", text: "Förmiddagsfika"},
                    {id: "t2", text: "Fortsätta med Drag-and-drop"},
                    ]
        }
    ]
}

export const AppStateProvider = ({children}: any) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData, );
    const { lists, draggedItem } = state;

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || [];
    }


    return(
        <AppStateContext.Provider value={
            {lists, getTasksByListId, dispatch, draggedItem}
            }>
            {children}
        </AppStateContext.Provider>
    );
}

export const useAppState = () => {
    return useContext(AppStateContext);
}