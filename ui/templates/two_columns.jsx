import React, {Component} from 'react'; 
import Header from '../organisms/header'; 
import {
    reactStyle,
    Segment,
    Rail
} from 'react-atomic-molecule'; 
class TwoColumnLayout extends Component
{
   render(){
        return (
            <div>
                <Header 
                    brand={this.props.brand}
                    nav={this.props.nav}
                />
                <Segment
                    style={this.props.style}
                    className={this.props.contentClassName}
                    styles={[Styles.container,this.props.styles]}
                    styleOrder={2}
                >
                    <Rail>{this.props.menu}</Rail>
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
