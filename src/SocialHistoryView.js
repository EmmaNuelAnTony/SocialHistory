import React, { Component } from 'react';
import './App.css';
import Model from './SocialHistoryListModel'
import { Grid, Label, Card } from 'semantic-ui-react';




class SocialHistoryView extends Component {
  render() {
    const SocialHistory = 
    Model.map((social_history)=> ({
        
        meta: "Triggered by: "+social_history.triggeredBy
    }))
    
    return (
        <div>
        <Card.Group itemsPerRow="1" items={SocialHistory}/>
        </div>  
    )
}
}
export default SocialHistoryView;