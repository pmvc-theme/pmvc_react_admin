import React from 'react'; 
import Home from './Home';
import Reshow from 'reshow'; 

const themes = {
    Home,
};

const Index = (props) => 
<Reshow
    themes={themes}
    {...props}
/>

export default Index;
