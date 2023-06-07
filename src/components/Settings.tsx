import Button from "@mui/material/Button/Button";

// Settings component
const Settings = (props: { closeSettings: () => void }) => {
    return (
        <div>
            <h1>Settings</h1>
            <Button onClick={props.closeSettings}>Settings</Button>
        </div>
    );
};

export default Settings;