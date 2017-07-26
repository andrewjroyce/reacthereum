import React, {Component} from 'react';
import _ from 'lodash';
import EthCard from './EthCard';

class CategoriesDetail extends Component {
    render(){
    const located = this.props.selected;
    const titles = (_.map(this.props.categories, 'title'));
    const categories = this.props.categories
    const found = _.find(categories,  { 'title' : located });
        if (!this.props.selected){
            return <div>Select a category to start</div>;    
        }
        if (located==titles){
            }
            const url = `https://www.youtube.com/embed/${found.video}`;
            return(
            <div>
                <div>{found.audio}</div>
                <EthCard details={found}/>  
            </div>
        )
    }
}



export default CategoriesDetail;