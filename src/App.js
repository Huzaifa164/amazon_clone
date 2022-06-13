import './App.css';
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'


const promise = loadStripe(
  'pk_test_51L9kNjSDE8KYTCyiBe9kr0SFcp9rrNAiqT91IpUPYEvcRLVaM1dPXYqgsom9XGXOvv04clQLupNY4SrJrWrrWPsu00Waciz0tH'
)

function App() {
  return (
    // BEM
    <Router>
      <div className="App">

        <Routes>
          <Route path='/login' element={<Login />}>
          </Route>
          <Route path='/checkout' element={<><Header /><Checkout /></>}>
          </Route>
          <Route path='/payment' element={<><Header /><Elements stripe={promise}><Payment /></Elements></>}></Route>
          <Route path='/' element={<><Header /><Home /></>}>
          </Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
