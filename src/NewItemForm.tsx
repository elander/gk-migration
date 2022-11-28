import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styles";
import { ReactText, useState } from "react";

import { useFocus } from "./useFocus";

type NewItemFormProps = {
    onAdd(text: string): void
}

export const NewItemForm = ({onAdd}: NewItemFormProps) => {
    const [text, setText] = useState("");
    const inputRef = useFocus();
    const handleReturn = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            onAdd(text);
        }
    };

    return(
        <NewItemFormContainer>
            <NewItemInput 
            ref={inputRef}
            value={text}
            onKeyUp = {handleReturn}
            onChange = {(e) => setText(e.target.value)}
            />
            <NewItemButton onClick={() => onAdd(text)}>
                Skapa
            </NewItemButton>
        </NewItemFormContainer>
    );
};