import React from 'react';
import { reviewBudget } from '../helpers'

const BudgetController = ({budget, remaining}) => {
    return ( 
        <>
            <div className="alert alert-primary">
                Budget: {budget}
            </div>
            <div className={reviewBudget(budget, remaining)}>
                Remaining Budget: {remaining}
            </div>
        </>
     );
}
 
export default BudgetController;