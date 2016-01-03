import React, {Component} from 'react'; 
import Header from '../organisms/header'; 
import MenuRail from '../organisms/menu_rail'; 
import { reactStyle, Segment } from 'react-atomic-molecule'; 
class TwoColumnLayout extends Component
{
   render(){
        return (
            <div>
                <Header 
                    brand={this.props.brand}
                    nav={this.props.nav}
                />
                <Segment styles={Styles.container} styleOrder={2}>
                    <MenuRail>{this.props.menu}</MenuRail>
                    {this.props.content}
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

export default TwoColumnLayout;
