import React from 'react'; 
import MenuRail from '../organisms/menu_rail'; 
import { Segment } from 'react-atomic-molecule'; 
const DocTemplate = (props) => 
<Segment>
    <MenuRail>
        {props.menu}
    </MenuRail>
    {props.children}
</Segment>

export default DocTemplate;
