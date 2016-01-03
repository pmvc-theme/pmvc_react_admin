import React, {Component} from 'react'; 
import Header from '../organisms/header'; 
import Menu from '../organisms/menu'; 
import { reactStyle, Segment } from 'react-atomic-molecule'; 
class Home extends Component
{
   render(){
        return (
            <div>
                <Header />
                <Segment styles={Styles.container} styleOrder={2}>
                    <Menu />
                    I'm home for admin
                </Segment>
            </div>
        );  
    }
}

let Styles = {
    container: reactStyle({
        margin: '0 10px 0 340px',
    })
};

export default Home;
