import {useState} from 'react';
import './Calculator.css';

function Calculator() {
    const [result, setResult] = useState(0);
    const [input, setInput] = useState('');
    
    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    // Define the button mapping for calculator operations
    const buttonMapping = { 
        'AC' : () => setInput(''),
        '+/-': () => setInput((-1 * parseFloat(input)).toString()),
        '%': () => setInput((parseFloat(input) / 100).toString()),
        '/': () => setInput(input + '/'),
        '7': () => setInput(input + '7'),
        '8': () => setInput(input + '8'),
        '9': () => setInput(input + '9'),
        '*': () => setInput(input + '*'),
        '4': () => setInput(input + '4'),
        '5': () => setInput(input + '5'),
        '6': () => setInput(input + '6'),
        '-': () => setInput(input + '-'),
        '1': () => setInput(input + '1'),
        '2': () => setInput(input + '2'),
        '3': () => setInput(input + '3'),
        '+': () => setInput(input + '+'),
        'ANS': () => setInput(result.toString()),
        '0': () => setInput(input + '0'),
        '.': () => setInput(input + '.'),
        '=': () => {
            try {
                const calculatedResult = eval(input);
                setResult(calculatedResult);
                setInput(calculatedResult.toString());
            } catch (error) {
                setResult('Error');
                setInput('');
            }
        },
    };

    return(
        <div>
            <h1>Compute Hub</h1>
            {/*Display the result of the calculation*/}
            <div className = "Calculator">
                <div className="display">
                    <div className="result">{result}</div>
                    <input
                    type = "text"
                    value = {input}
                    onChange = {handleInputChange}
                    placeholder = "0"
                    />
                </div>

                {/*Display the calculator button*/}
                <div className = "buttons">
                    {/*1st row of buttons*/}
                    {['AC', '+/-', '%', '/'].map((button) => (
                        <button key={button} onClick={() => buttonMapping[button] && buttonMapping[button]()}>
                            {button}
                        </button>
                    ))}
                    {/*2nd row of buttons*/}
                    {['7','8','9','*'].map((button) => (
                        <button key={button} onClick={() => buttonMapping[button] && buttonMapping[button]()}>
                            {button}
                        </button>
                    ))}
                    {/*3rd row of buttons*/}
                    {['4','5','6','-'].map((button) => (
                        <button key={button} onClick={() => buttonMapping[button] && buttonMapping[button]()}>
                            {button}
                        </button>
                    ))}
                    {/*4th row of buttons*/}
                    {['1','2','3','+'].map((button) => (
                        <button key={button} onClick={() => buttonMapping[button] && buttonMapping[button]()}>
                            {button}
                        </button>
                    ))}
                    {/*5th row of buttons*/}
                    {['ANS', '0', '.', '='].map((button) => (
                        <button key={button} onClick={() => buttonMapping[button] && buttonMapping[button]()}>
                            {button}
                        </button>
                    ))}
                </div>
            </div>

            {/*Social Media Icons*/}
            <div className = "social-icons">
                <a href = "https://github.com/thainguyen1405"
                    target="_blank"
                    rel="noopener noreferrer">
                    <ion-icon name="logo-github"></ion-icon>
                </a>

                <a href = "https://www.linkedin.com/in/thainguyen1405/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
            </div>
        </div>
        
    )
}


export default Calculator;