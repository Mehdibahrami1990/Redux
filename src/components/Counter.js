import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/Counter';
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' });
    dispatch(counterActions.togglrCounter());
  };
  const incrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    // dispatch({ type: 'decrement' });
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    // dispatch({ type: 'increase', payload: 5 });
    dispatch(counterActions.increase(5));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
