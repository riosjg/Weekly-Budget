import React from 'react';
import Expense from './Expense'

const List = ({expenses}) => (
    <div className="gastos-realizados">
        <h2>List</h2>
        {expenses.map(e => (
            <Expense 
                key={e.id}
                expense={e}
            />
        ))}
    </div>
)
 
export default List;