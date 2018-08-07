'use strict';

import React, {Component, Fragment} from 'react';
import scss from '../style/app.scss';
export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            limit: 0
    };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchFormLimit = this.searchFormLimit.bind(this);
        }
        handleSearch(e) {
            let search = e.target.value;
            this.setState({search});
        }
        searchFormLimit(e) {
            let limit = e.target.value;
            this.setState({limit});
        }
        handleSubmit(e) {
            e.preventDefault();
            let url = `https://www.reddit.com/r/${this.state.search}.json?limit=${this.state.limit}`;
            this.props.searchMethod(url);
        }
      


  render() { 
    return(<Fragment>
        
        <form className="form" onSubmit={this.handleSubmit}>
          <label>enter search</label>
          <input onChange={this.handleSearch}/>
          
        </form> 
        <form onSubmit={this.handlesubmit}>
        <label>limit search quantity</label>
          <input type="number" onChange={this.searchFormLimit}/>
        </form>
        </Fragment>);
  }
}