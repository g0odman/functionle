import Button from "@mui/material/Button/Button";

// EndGame component
const EndGame = (props: { playAgain: () => void }) => {
    return (
        <div>
            <h1>End Game</h1>
            <Button onClick={props.playAgain}>Play Again</Button>
        </div>
    );
};
export default EndGame;