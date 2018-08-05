'use strict';
import React, {Component, Fragment} from 'react';
import SearchForm from './searchForm';
import superagent from 'superagent';
const search = SearchForm.state;
export default class SearchResultList extends Component {
  constructor(props) {
    super(props);
  }
RedditList() {
    this.props.addData.map( (data, i) =>
{return <li> {data.title}</li>});
    // this.props.redditList.data.children.map( (redditList,i) => 
    //         <div Key={i}>
    console.log("other list", this.props.addData);
}

  render () {
    return (<Fragment>
        <h2>SearchResultList</h2>
        <ul>
            {this.RedditList()}
        </ul>
        </Fragment>
    )}
}