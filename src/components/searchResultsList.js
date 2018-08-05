'use strict';
import React, {Component, Fragment} from 'react';
import SearchForm from './searchForm';
import superagent from 'superagent';
const search = SearchForm.state;
export default class SearchResultList extends Component {
  constructor(props) {
    super(props);
  }

  searchRedditBoard() {
    let url = `https://www.reddit.com/r/${search}.json`;
    return this.fetchData(url)
      .then( redditBoard => 
        this.setState( Object.assign(...this.state, {redditBoard}) )
      ); 
  }

  fetchData(url) {
    this.isLoading(true);
    return superagent.get(url)
      .then(result => {
        this.isLoading(false);
        return result.body;
      })
      .catch(console.error);

  }
  render () {
    return (<Fragment>
        <h2>SearchResultList</h2>
        </Fragment>
    )}
}