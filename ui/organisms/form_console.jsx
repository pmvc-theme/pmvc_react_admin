import React, {Component} from 'react'; 
import ReactDOM from 'react-dom';
import { 
    reactStyle, 
    Field, 
    Button,
    Item,
    
} from 'react-atomic-molecule'; 
import {
    FormattedJson
} from 'react-atomic-organism';
import {
    TabView
} from 'organism-react-navigation';
import {
    Table,
    Cell,
    Column
} from 'pmvc_react_list';
import AdminForm from "../molecules/form";
export default class FormPreview extends Component
{
   constructor(props)
   {   
      super(props);
      this.state = { 
         preview: '', 
         selected: 'list',
         width: ''
      };  
   }


    render(){
       let preview = null;
       let props = this.props;
       let list = null;
       if (this.state.preview) {
           preview = (
            <FormattedJson atom="div" indent={2} label={this.props.label}>
                {this.state.preview}
            </FormattedJson>
           );
       } 
       if (this.state.list) {
            list = (
            <Table 
             rows={this.state.list} 
             rowsLocator={this.props.rowsLocator}
             tableWidth ={this.state.width}
             getColWidth={this.props.getColWidth}
             getColStyle={this.props.getColStyle}
            >
            <Column
                header={<Cell>Col1</Cell>}
                cell={({rowIndex,columnIndex})=>{
                    let rows = this.props.rowsLocator(this.state.list);
                    return rows[rowIndex]; 
                }}
            />
            </Table>
           );
       }
       return (
            <div>
                <AdminForm 
                    ref={dom=>this.form=dom}
                    callback={((json)=>{
                        if (json) {
                            switch(this.state.selected){
                                case "source":
                                this.setState({preview:json});
                                break;
                                case "list":
                                this.setState({list:json});
                                break;
                            }
                        }
                    }).bind(this)}
                    errorCallback={((json)=>{
                        this.setState({
                            message: json.errors[0].message,
                            messageType: 'error' 
                        });
                    }).bind(this)}
                    message={this.state.message}
                    messageType={this.state.messageType}
                    {...props} 
                />
                <TabView
                    selected={this.state.selected}
                    onTabItemPress={((name)=>{
                        let f =ReactDOM.findDOMNode(this.form);
                        let width = f.getBoundingClientRect().width - 30;
                        this.setState({selected:name, width:width});
                        f.dispatchEvent(new Event("submit"));
                }).bind(this)}>
                    <div name="list">
                        {list}
                        <Item>List</Item>
                    </div>
                    <div name="source">
                        {preview}
                        <Item>Source</Item>
                    </div>
                </TabView>
            </div>
       );  
    }
}
FormPreview.defaultProps = { label: 'Preview' };
