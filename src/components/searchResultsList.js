'use strict';
import React, {Component} from 'react';
import Search from './searchForm';
export default SearchResultList extends Component {
  constructor(props) {
      super(props);
  }

  render () {
    return this.props.resultList;
  }
}