import Button from "@mui/material/Button/Button";

// Info component
const Info = (props: { closeInfo: () => void }) => {
    return (
        <div>
            <h1>Info</h1>
            <Button onClick={props.closeInfo}>Start Game</Button>
        </div>
    );
};

export default Info;