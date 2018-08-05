'use strict';

import React, {Component, Fragment} from 'react';

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
    };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.searchFormLimit = this.searchFormLimit.bind(this);
        }
        handleSearch(e) {
            let search = e.target.value;
            this.setState({search});
            console.log('search form state: ', this.state);
        }
        handleSubmit(e) {
            e.preventDefault();
            let url = `https://www.reddit.com/r/${this.state.search}.json`;
            console.log('URL: ', url);
            return url;
            this.props.searchMethod(url);
        }
        // searchFormLimit(e) {
        //     let limit = e.target.value;
        //     this.
        // }


  render() { 
    return(<Fragment>
        
        <form onSubmit={this.handleSubmit}>
        <label>enter search</label>
          <input onChange={this.handleSearch}/>
          {/* <label>limit search number</label>
        <input type="textArea" onChange={this.searchFormLimit}/> */}
        </form> 

        {/* <form>{
            this.props.redditList.map( (redditList,i) => 
            <div Key={i}>
              <input
              onChange={this.props.redditLoader}
              title = {data.children.data.title}
              />
              <label htmlFor={data.children.data.title}>
              {data.children.data.title}
              </label>
            </div>
            )}
        </form> */}
        </Fragment>);
  }
}