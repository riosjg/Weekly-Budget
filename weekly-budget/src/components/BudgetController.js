import React from 'react';
import PropTypes from 'prop-types'
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

BudgetController.propTypes = {
    budget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
}

export default BudgetController;