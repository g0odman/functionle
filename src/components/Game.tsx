import { ChangeEvent, FormEvent, useState } from "react";
import FunctionPlotter from "./FunctionPlotter";
import { generateFormula } from "../helpers/math";
const GameInput = (props: { addGuess: (guess: string) => void }) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const addGuess = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.addGuess(inputValue);
        setInputValue('');
    }
    return (<form onSubmit={addGuess}>
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter a value"
        />
    </form>)
}
const GameUI = (props: { targetFormula: string, addGuess: (guess: string) => void, guesses: string[] }) => {

    return <div>
        <h5>{props.targetFormula}</h5>
        <GameInput addGuess={props.addGuess} />
        <FunctionPlotter target={props.targetFormula} guesses={props.guesses} />
    </div>
}
// Game component
const Game = (props: { endGame: () => void }) => {
    const targetFormula = generateFormula(2)
    const [guesses, setGuesses] = useState<string[]>([]);
    const addGuess = (guess: string) => {
        if (targetFormula === guess) {
            props.endGame();
        }
        setGuesses([...guesses, guess]);
    }
    return (
        <div>
            <h1>Game</h1>
            <GameUI targetFormula={targetFormula} addGuess={addGuess} guesses={guesses} />
        </div>
    );
};

export default Game;