import React, {useState} from 'react';
import PropTypes from 'prop-types'
import shortid from 'shortid'
import Error from './Error'

const Form = ({addNewExpense, setCreateExpense, remaining}) => {

    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');

    const addExpense = e => {
        e.preventDefault();

        if(count < 1 || isNaN(count) || name.trim() === ''){
            setError(true);
            setMessage('Both fields must be filled');
            return;
        }

        //checks if the new expense is bigger than the remaining budget

        if(remaining < count){
            setError(true);
            setMessage("You don't have enought budget.");
            setCount(0);
            return;
        }

        setError(false);

        const expense = {
            name,
            count,
            id: shortid.generate()
        }
    
        addNewExpense(expense);
        setCreateExpense(true);

        setName('');
        setCount(0);

    }


    return ( 
        <form
            onSubmit={addExpense}
        >
            <h2>Add your expenses</h2>

            {error ? 
            <Error message={message}/> : null}

            <div className="campo">
                <label>Expense's name:</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ex. Food"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Expense's amount:</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ex. 300"
                    value={count}
                    onChange={e => setCount(e.target.value)}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Add expense"
            />
        </form>
     );
}

Form.propTypes = {
    addNewExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired
}

export default Form;