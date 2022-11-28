import styles from './AddItemButton.module.css';

// vi definierar en egen typ (datastruktur) för de properties
// som den här komponenten kräver när den ska instantieras
// de props som har ett frågetecken efter namnet är inte obligatoriska
// "children" är en speciell prop, som vi använder för att göra 
// det möjligt att stoppa in andra komponenter inuti den här 
// komponenten.
type AddItemButtonProps = {
    dark?: boolean;
    children: React.ReactNode;
    onClick: () => void;
}

// Detta är knappen som användaren ska klicka på för att visa 
// formuläret för att lägga till en ny lista eller task
export const AddItemButton = (props: AddItemButtonProps) => {
    const { dark, children } = props;
    const cssClass = dark ? styles.dark : styles.light;

    // kom ihåg att "class" är ett reserverat ord i JavaScipt
    // och TypeScript, så vi använder "className" för CSS-klasser
    return (
        <button onClick={props.onClick}
        className={cssClass}
        >{children}</button>
    )
};