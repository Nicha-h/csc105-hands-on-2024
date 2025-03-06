import { useState } from "react";
import '../styles/Calculator.css';


export const Calculator = () =>{
    const [result, setResult] = useState(0);
    const [input, setInput] = useState('');

    const Add = () =>{
        setResult(result + parseFloat(input));
        setInput('');
    }
    const Subtract = () =>{
        setResult(result - parseFloat(input));
        setInput('');
    }
    const Multiply = () =>{
        setResult(result * parseFloat(input));
        setInput('');
    }
    const Divide = () =>{
        setResult(result / parseFloat(input));
        setInput('');
    }

    const ResetInput = () => {
        setInput('');
    };

    const ResetResult = () => {
        setResult(0);
    }

    return(
        <div className = "Calculator">
            <center><h1>Simple Calculator 🧮</h1></center>
            <center><div className ="result">Result: {result}</div></center>
            <div className="add-input">
                <input
                    type = "number"
                    value = {input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a number"
                /> 
            </div>
            <div className = "operator">
                <button onClick ={Add}>Add</button>
                <button onClick ={Subtract}>Subtract</button>
                <button onClick ={Multiply}>Multiply</button>
                <button onClick ={Divide}>Divide</button>
                
            </div>

            <div className="resets">
                <button onClick ={ResetInput}>Reset Input</button>
                <button className = "please-go-red" onClick ={ResetResult}>Reset Result</button>
            </div>
        </div>
    )

}

export default Calculator;