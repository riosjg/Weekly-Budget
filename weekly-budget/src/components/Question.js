import React, {useState} from 'react';
import Error from './Error'

const Question = ({ setBudget, setRemaining, setShowQuestion}) => {
    const [count, setCount] = useState(0);
    const [error, setError] = useState(false);

    const defineBudget = e => {
        setCount(e.target.value);
    }

    const submitBudget = e => {
        e.preventDefault();
        if(count < 1 || isNaN(count) ){
            setError(true);
            return
        }
        setError(false);
        setBudget(count);
        setRemaining(count);
        setShowQuestion(false);
    }

    return ( 
        <>
        <h2>Submit your budget</h2>
        
        { error ? <Error message="The budget is not valid"/>
        : null}

        <form
            onSubmit={submitBudget}
        >
            <input
            type="number"
            className="u-full-width"
            placeholder="Submit your budget"
            onChange={defineBudget}
            />

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Define budget"
            />
        </form>
        </>
     );
}
 
export default Question;