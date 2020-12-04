import logo from './logo.svg';
import './App.css';
import Brand from './Brand/Brand';
import Campaigns from './containers/brand/my_campaigns/my_campaigns';
import Card from './components/brand/campaign_card/campaign_card';
import Toolbar from './components/Common/Toolbar/Toolbar';
import SideDrawer from './components/Common/SideDrawer/SideDrawer'

function App() {
  return (
    <div className="App">
        <Toolbar brandName="frewf" />
        <SideDrawer brandName="frewf"/>
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
    </div>
  );
}

export default App;
