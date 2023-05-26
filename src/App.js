import { useEffect, useState } from 'react';
import './styles/style.css';
import paper from './assets/paper.jpg';
import scissor from './assets/scissor.jpg';
import rock from './assets/rock.jpg';

function App() {
    const [score, setScore] = useState([0, 0, 0]);
    const [computerChoice, setComputerChoice] = useState('');
    const [userChoice, setUserChoice] = useState('');

    const choices = ['rock', 'scissors', 'paper'];

    const restartGame = () => {
        setScore([0, 0, 0]);
    };

    const getRandomChoice = () => {
        const random = Math.floor(Math.random() * choices.length);
        return choices[random];
    };

    const determineWinner = (user, computer) => {
        if (user === computer) {
            return 1;
        } else if (
            (user === 'rock' && computer === 'scissors') ||
            (user === 'scissors' && computer === 'paper') ||
            (user === 'paper' && computer === 'rock')
        ) {
            return 2;
        } else {
            return 0;
        }
    };

    const handleUserChoice = (choice) => {
        const computerChoice = getRandomChoice();
        setComputerChoice(computerChoice);
        setUserChoice(choice);

        const winner = determineWinner(choice, computerChoice);

        setScore((prevScore) => {
            const newScore = [...prevScore];
            newScore[winner]++;
            return newScore;
        });
    };

    useEffect(() => {
        const randomChoice = getRandomChoice();
        setComputerChoice(randomChoice);
    }, []);



    return (
        <div className='wrapper'>
            <div className='count'>
                <h1>
                    {score[0]}  {score[1]}  {score[2]}
                </h1>
                <button onClick={restartGame}>Restart</button>
            </div>
            <div className='game'>
                <div
                    className='col-6'
                    style={{ backgroundColor: '#e76f51' }}
                >
                    {computerChoice && (
                        <div className='choice-container'>
                            {computerChoice === 'rock' && (
                                <img
                                    src={rock}
                                    alt='rock'
                                    className='choice-image'
                                />
                            )}
                            {computerChoice === 'scissors' && (
                                <img
                                    src={scissor}
                                    alt='scissors'
                                    className='choice-image'
                                />
                            )}
                            {computerChoice === 'paper' && (
                                <img
                                    src={paper}
                                    alt='paper'
                                    className='choice-image'
                                />
                            )}
                        </div>
                    )}
                </div>
                <div
                    className='col-6'
                    style={{ backgroundColor: '#2a9d8f' }}
                >
                    <img
                        onClick={() => handleUserChoice('rock')}
                        src={rock}
                        alt='rock'
                        className='choice-image'
                    />
                    <img
                        onClick={() => handleUserChoice('scissors')}
                        src={scissor}
                        alt='scissors'
                        className='choice-image'
                    />
                    <img
                        onClick={() => handleUserChoice('paper')}
                        src={paper}
                        alt='paper'
                        className='choice-image'
                    />
                    {/* {userChoice && <div>{userChoice}</div>} */}
                </div>
            </div>
        </div>
    );
}

export default App;
