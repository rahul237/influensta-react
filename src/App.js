
import './App.css';
import Brand from './Brand/Brand';
import Campaigns from './containers/brand/my_campaigns/my_campaigns';
import Card from './components/brand/campaign_card/campaign_card';
import Toolbar from './components/Common/Toolbar/Toolbar';
import SideBar from './components/Common/SideDrawer/Sidebar2';
import Recomm_influencers from './containers/brand/recomm_influencers/recomm_influencers';
import Footer from './components/Common/Footer/Footer';
import Campaign_detail from './containers/brand/campaign_detail/campaign_detail'
import Auth from './containers/auth/auth';
function App() {
  return (
    <div className="App">
        <Toolbar brandName="frewf" />
        <SideBar >
        <Brand name="frewf" age="34"></Brand>

        <Campaigns>
        <Card img_url="https://images.unsplash.com/photo-1586016499740-fb13cc4e4b66?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fHRodW1ibmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
        <Card img_url="https://images.unsplash.com/photo-1586016499740-fb13cc4e4b66?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fHRodW1ibmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/> 
        <Card img_url="https://images.unsplash.com/photo-1586016499740-fb13cc4e4b66?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fHRodW1ibmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
        <Card img_url="https://images.unsplash.com/photo-1586016499740-fb13cc4e4b66?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fHRodW1ibmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
        <Card img_url="https://images.unsplash.com/photo-1586016499740-fb13cc4e4b66?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fHRodW1ibmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
        <Card img_url="https://images.unsplash.com/photo-1586016499740-fb13cc4e4b66?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fHRodW1ibmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
        <Card img_url="https://images.unsplash.com/photo-1586016499740-fb13cc4e4b66?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fHRodW1ibmFpbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
        </Campaigns>
        <Auth/>
        <Recomm_influencers />
        <Footer />
        </SideBar>
        <Campaign_detail campaignName="Nutom campaign" campaignInfo="This is for an Olympiad" campaignCategory="Education"/>
    </div>
  );
}

export default App;
