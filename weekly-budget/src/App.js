import React, {useState, useEffect} from 'react';
import Question from './components/Question'
import Form from './components/Form'
import List from './components/List'
import BudgetController from './components/BudgetController'

function App() {

  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  //UseEffect updates the remaining budget

  useEffect( () => {
    
    if(createExpense){
      setExpenses([
        ...expenses,
        expense
      ])

      const remainingBudget = remaining - expense.count;
      setRemaining(remainingBudget);

    }

    setCreateExpense(false)

  }, [expense, createExpense, expenses, remaining])


  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>
        <div className="contenido-principal contenido">
          {showQuestion ?
          ( <Question 
              setBudget={setBudget}
              setRemaining={setRemaining}
              setShowQuestion={setShowQuestion}
          /> ) : 
          (
            <div className="row">
              <div className="one-half column">
                <Form
                  addNewExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                  remaining={remaining}
                />
              </div>
              <div className="one-half column">
                <List
                  expenses={expenses}
                />
                <BudgetController
                  budget={budget}
                  remaining={remaining}
                />
              </div>
            </div>
          ) } 

          
        </div>
      </header>
    </div>
  );
}

export default App;
