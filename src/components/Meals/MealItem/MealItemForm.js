import { useRef, useState } from 'react';

// import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import inputclasses from '../../UI/Input.module.css' ;

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={inputclasses.input}>
        <label htmlFor={'amount_' + props.id}> Amount </label>
        <input
          ref={amountInputRef}
          label='Amount'

          id = {'amount_' + props.id}
          type = 'number'
          min = '1'
          max =  '5'
          step = '1'
          defaultValue = '1'
        />
      </div>
      
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
