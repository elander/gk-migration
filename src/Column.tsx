import { ColumnContainer, ColumnTitle } from "./styles";

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
        </ColumnContainer>
    );
}
export default Column;