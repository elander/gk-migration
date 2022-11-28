import { ColumnContainer, ColumnTitle } from "./styles";

import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";

type ColumnProps = {text: string};

// interface ColumnProps {
//     text: string,
// }

const Column = ({text}: ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            <Card text ="Mecka TypeScript ✔" />
            <Card text="Äta lunch ✔" />
            <Card text="Fortsätta med React" />
            <AddNewItem toggleButtonText="+ Lägg till task"
            onAdd={console.log} dark/>
        </ColumnContainer>
    );
}
export default Column;