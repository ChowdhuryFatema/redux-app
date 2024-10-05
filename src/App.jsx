import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decNumber, incNumber } from './redux/actions';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      <div className='quantity'>
        <a onClick={() => dispatch(decNumber())} className='quantity__minus' title='Decrement'><span>-</span></a>
        <input name='quantity' className='quantity__input' type="text" value={myState} />
        <a onClick={() => dispatch(incNumber())} className='quantity__plus' title='Increment'><span>+</span></a>
      </div>
    </div>
  );
};

export default App;