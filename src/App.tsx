import React, { useState } from 'react';
import Settings from './components/Settings';
import Info from './components/Info';
import Game from './components/Game';
import EndGame from './components/EndGame';

const App = () => {
    const [currentScreen, setCurrentScreen] = useState('settings');

    const renderScreen = () => {
        switch (currentScreen) {
            case 'settings':
                return <Settings />;
            case 'info':
                return <Info />;
            case 'game':
                return <Game />;
            case 'endgame':
                return <EndGame />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>My App</h1>
            <nav>
                <button onClick={() => setCurrentScreen('settings')}>Settings</button>
                <button onClick={() => setCurrentScreen('info')}>Info</button>
                <button onClick={() => setCurrentScreen('game')}>Game</button>
                <button onClick={() => setCurrentScreen('endgame')}>End Game</button>
            </nav>
            {renderScreen()}
        </div>
    );
};

export default App;
