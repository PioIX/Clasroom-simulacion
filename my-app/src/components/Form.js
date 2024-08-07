import Button from "./button";
import Title from "./Title";

export default function Form(text, textBtn1, textBtn2) {
    return(
        <form>
            <Title> text={text}</Title>
            <input type="text" />
            <input type="number" />
            <Button text={textBtn1} />
            <Button text={textBtn2} />
        </form>
    )
}