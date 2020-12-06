import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Footer from '../Footer/Footer';
import Brand from '../../../Brand/Brand';
import Campaigns from '../../../containers/brand/my_campaigns/my_campaigns';
import Card from '../../brand/campaign_card/campaign_card';
import Recomm_influencers from '../../../containers/brand/recomm_influencers/recomm_influencers';
import Auth from '../../../containers/auth/auth';

const SidebarExampleVisible = () => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation='push'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as='a'>
            <a href="/"><h3>Profile</h3></a>
            <a href="/"><p>View Profile</p></a>
      </Menu.Item>
      <Menu.Item as='a'>
            <a href="/"><h3>Influencers</h3></a>
            <a href="/"><p>Find new Influencers</p></a>
            <a href="/"><p>Manage influencers working for you</p></a>
      </Menu.Item>
      <Menu.Item as='a'>
            <a href="/"><h3>Campaigns</h3></a>
            <a href="/"><p>Create a new campaign</p></a>
            <a href="/"><p>Manage existing campaigns</p></a>
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
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
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default SidebarExampleVisible
