import logo from './logo.svg';
import './App.css';
import Brand from './Brand/Brand';
import Campaigns from './components/brand/my_campaigns/my_campaigns'

function App() {
  return (
    <div className="App">
        <Brand name="frewf" age="34"></Brand>
        <Campaigns/>
    </div>
  );
}

export default App;
