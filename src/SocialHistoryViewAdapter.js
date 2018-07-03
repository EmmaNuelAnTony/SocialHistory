import React,{Component} from 'react';
import { Card,Input  ,Label, Grid, Dropdown, Menu, GridColumn, Button } from 'semantic-ui-react';
import SocialHistoryListModel from './SocialHistoryListModel';
class SocialHistoryViewAdapter extends Component{
    render(){
        const product = SocialHistoryListModel.products;
        return (
          <div className='ui unstackable items'>
            <Product
              id={product.id}
              title={product.title}
              description={product.description}
              url={product.url}
              votes={product.votes}
              submitterAvatarUrl={product.submitterAvatarUrl}
              productImageUrl={product.productImageUrl}
            />
          </div>
        );
      }

}
class Product extends React.Component {
    render() {
      return (
        <div className='item'>
          <div className='image'>
            <img src={this.props.productImageUrl} />
          </div>
          <div className='middle aligned content'>
            <div className='header'>
              <a>
                <i className='large caret up icon' />
              </a>
              {this.props.votes}
            </div>
            <div className='description'>
              <a href={this.props.url}>
                {this.props.title}
              </a>
              <p>
                {this.props.description}
              </p>
            </div>
            <div className='extra'>
              <span>Submitted by:</span>
              <img
                className='ui avatar image'
                src={this.props.submitterAvatarUrl}
              />
            </div>
          </div>
        </div>
      );
    }
  } export default SocialHistoryViewAdapter;