import React, { useState } from 'react';
import Settings from './components/Settings';
import Info from './components/Info';
import Game from './components/Game';
import EndGame from './components/EndGame';
import Header from './components/Header';

enum Screen {
    Settings = 'settings',
    Info = 'info',
    Game = 'game',
    EndGame = 'endgame',
}
const App = () => {
    const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Info);
    const endGame = () => { setCurrentScreen(Screen.EndGame) };
    const showGame = () => { setCurrentScreen(Screen.Game) };
    const openSettings = () => { setCurrentScreen(Screen.Settings) };
    const openInfo = () => { setCurrentScreen(Screen.Info) };
    const renderScreen = () => {
        switch (currentScreen) {
            case Screen.Settings:
                return <Settings closeSettings={showGame} />;
            case Screen.Info:
                return <Info closeInfo={showGame} />;
            case Screen.Game:
                return <Game endGame={endGame} />;
            case Screen.EndGame:
                return <EndGame playAgain={showGame} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <Header openSettings={openSettings} openInfo={openInfo} />
            {renderScreen()}
        </div>
    );
};

export default App;
