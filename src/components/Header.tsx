import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import LineAxisIcon from '@mui/icons-material/LineAxis';
const Header = (props: { openInfo: () => void, openSettings: () => void }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" aria-label="Settings" onClick={props.openSettings} >
                    <SettingsIcon />
                </IconButton>
                <div style={{ flexGrow: 1, justifyContent: 'center' }} >
                    <Typography variant="h6" component="div" >
                        FunctionLe
                    </Typography>
                    <LineAxisIcon />
                </div>

                <IconButton color="inherit" aria-label="Info" onClick={props.openInfo}>
                    <InfoIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;