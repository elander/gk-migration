import { CardContainer, ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {text: string};

// interface ColumnProps {
//     text: string,
// }

const Column = ({text}: ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            <CardContainer>Mecka TypeScript</CardContainer>
            <CardContainer>Äta lunch</CardContainer>
            <CardContainer>Fortsätta med React</CardContainer>
        </ColumnContainer>
    );
}
export default Column;