import Bank from './components/bank'
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const amount=useSelector(state=>state.amount);
console.log(amount)
  return (
    <>
      <h1>balance:{amount}</h1>
   <Bank/>
    
    </>
 
  );
}

export default App;
