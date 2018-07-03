import React,{Component} from 'react';
import { Card,Input  ,Label, Grid, Dropdown, Menu, GridColumn, Button } from 'semantic-ui-react';

var SampleArray = [] ;

const options_year = [
    { key: 1, text: '2018', value: 1 },
    { key: 2, text: '2017', value: 2 },
    { key: 3, text: '2016', value: 3 },
]
const options_maritalStatus = [
    { key: 1, text: 'Single', value: 1 },
    { key: 2, text: 'Married', value: 2 },
    { key: 3, text: 'Divorced', value: 3 },
]
class SocialHistoryAddForm extends Component{
    constructor(props) {
    
        super(props)
     
        this.state = {
            name: ''     
        }
     
      }
AddItemsToArray=()=>{
    SampleArray.push(this.state.name)
    this.setState({
        name: ""
    })
    console.log(SampleArray)

}

_onOccupationTextChange = (event, {name, value}) => {
    this.setState ({
        name: value
    })
}
    render(){
        return(
         <Grid  columns={2}>
            <Grid.Column container="true">
                    <Grid.Column width="8">
                    <div fluid="true" className='Field'>
                        <Input name='occupation' label="Occupation" placeholder='e.g. Engineer , Farmer etc..' labelPosition='left' onChange={this._onOccupationTextChange}/>
                    </div>
                    </Grid.Column>
                    <Grid  columns={2}>
                         <Grid.Column container="true"> 
                            <div className='Field'>
                                <Input label="Education" placeholder='e.g. MSc, Ms' labelPosition='left '/>
                            </div>
                         </Grid.Column>
                        <Grid.Column container="true">
                            <Dropdown  text='2018' className='Field' compact='true'  fluid search selection options={options_year} simple item />
                        </Grid.Column>
                   </Grid>
                        <div className='Field'>
                            <Input label="Birthplace" placeholder='e.g. City: Mumbai , State: Maharashtra , Country: India' labelPosition='left '/>
                        </div>
                        <Grid  columns={2}>
                            <Grid.Column container="true"> 
                                <div className='Label_scemantic'>
                                    <Label >Marital Status</Label>
                                </div>
                            </Grid.Column>
                            <Grid.Column container="true">
                                <Dropdown  text='Select One' className='Field' compact='true'  fluid search selection options={options_maritalStatus} simple item />
                            </Grid.Column>
                   </Grid>
                    <div className='Field'><Input label="Children" placeholder='e.g. No children, two daughters and one son , one daughter etc...' labelPosition='left '/></div>
                                
             </Grid.Column>
             <Grid.Column>
                    
                    <div className='Field'><Input label="Substance use" placeholder='e.g. Marijuana , Cocaine , Heroin etc..' labelPosition='left '/></div>
                    <div className='Field'><Input label="Exercise" placeholder='e.g. Sedentary , Moderate physical activity etc...' labelPosition='left '/></div>
                    <div className='Field'><Input label="Stress Factor" placeholder='e.g. relaxed , highly stressed etc...' labelPosition='left '/></div>
                    <div className='Field'><Input label="Language spoken" placeholder='e.g. English , French etc...' labelPosition='left '/></div>
                    <div className='Field'><Input label="Religion" placeholder='e.g. Agnostic, Atheist, Hinduism , Islam , Christianity etc...' labelPosition='left '/></div>
                    <div className='Field'><Input label="General Diet"placeholder='e.g. Includes a good mix of  vegetarian and non-vegetarian foods '  labelPosition='left '/></div>
                    <div className='Button_socialHistory'>
                        <Button  primary onClick={this.AddItemsToArray}>Save</Button>
                        <Button secondary>Cancel</Button>
                    </div>
            </Grid.Column>
            </Grid>
          
        
             );
    }
} export default SocialHistoryAddForm;