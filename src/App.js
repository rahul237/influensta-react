
import './App.css';
import Campaign_detail from './containers/brand/campaign_detail/campaign_detail'
import Layout from './Layout/Layout';
import {BrowserRouter} from 'react-router-dom';
import BrandHome from './containers/brand/BrandHome/BrandHome';
import {Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          < Route path="/" exact component={BrandHome} />
          < Route path="/campaignName" exact component={Campaign_detail} />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
