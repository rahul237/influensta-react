import react from 'react';

import Aux from '../hoc/auxil';
import Toolbar from '../components/Common/Toolbar/Toolbar';
import SideDrawer from '../components/Common/SideDrawer/Sidebar2';

const layout = (props)=>(
    <Aux>
    <div>
        <Toolbar brandName="pewdiepie"/>
        <SideDrawer>
        Toolbar,Sidedrawer, Backdrop
            <main>
                {props.children}
            </main>
        </SideDrawer>        
    </div>
    </Aux>
);

export default layout;
