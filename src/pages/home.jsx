import React, {Component} from 'react'; 
import TwoColumnLayout from '../templates/two_columns'; 
import Menu from '../organisms/menu'; 
import { reactStyle, Item } from 'react-atomic-molecule'; 

class MyMenu extends Component
{
   render(){
        return (
            <Menu>
                <Item><a href="http://tw.yahoo.com">test1</a></Item>
                <Item>test2</Item>
                <Item>test3</Item>
            </Menu>
        );  
    }
}



class Home extends Component
{
   render(){
        var menu = <MyMenu />;
        return (
            <TwoColumnLayout 
                menu={menu}
                content={"I'm home for admin"} 
                brand={"brand"}
                nav={"nav"}
            />
        );  
    }
}

export default Home;
