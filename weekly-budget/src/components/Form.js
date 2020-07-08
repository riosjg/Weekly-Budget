import React, {useState} from 'react';
import Error from './Error'
import shortid from 'shortid'

const Form = ({addNewExpense, setCreateExpense}) => {

    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    const [error, setError] = useState(false);

    const addExpense = e => {
        e.preventDefault();

        if(count < 1 || isNaN(count) || name.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        const expense = {
            name,
            count,
            id: shortid.generate()
        }
    
        console.log(expense);

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
            <Error message="Both fields must be filled"/> : null}

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
 
export default Form;