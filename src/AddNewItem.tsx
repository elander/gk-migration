import { AddItemButton } from "./AddItemButton";
import { NewItemForm } from "./NewItemForm";
import { useState } from "react";

type AddNewItemProps = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}
// om man vill ha flera värden än två på ett state
// är det bättre att använda en union type än att ha
// flera olika "useState"
// type Status = "showForm" | "hideForm" | "nåntingannat";


export const AddNewItem = (props: AddNewItemProps) => {
    // [hideForm, setHideForm] = useState(false);
    // [nanting, setNanting] = useState(false);
    // [Status, setStatus] = useState("nåntingannat");
    
    const [showForm, setShowForm] = useState(false);
    const { onAdd, toggleButtonText, dark} = props;

    if(showForm) {
        return (<NewItemForm
            onAdd={(text) => {
                onAdd(text)
                setShowForm(false)
            }} />);
    }

    return (
        <AddItemButton dark={dark} onClick={() => {
            setShowForm(true);
        }}>{toggleButtonText}</AddItemButton>
    );
};