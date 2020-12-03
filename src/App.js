import logo from './logo.svg';
import './App.css';
import Brand from './Brand/Brand';
import Campaigns from './containers/brand/my_campaigns/my_campaigns';
import Card from './components/brand/campaign_card/campaign_card';

function App() {
  return (
    <div className="App">
        <Brand name="frewf" age="34"></Brand>

        <Campaigns>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        </Campaigns>
    </div>
  );
}

export default App;
