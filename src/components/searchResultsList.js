'use strict';
import React, {Component, Fragment} from 'react';

export default class SearchResultList extends Component {
  constructor(props) {
    super(props);
  }
RedditList() {
  let mylist = this.props.addData.map( (data, i) => {
  return <li key={i}><a href={ data.data.title }></a></li><li><a href={ data.data.ups}></a></li>
  });

  console.log('other list', this.props.addData);
  return mylist;
    }

  render () {
    return (<Fragment>
        <h2>SearchResultList</h2>
        <ul>
            {this.RedditList()}
        </ul>
        </Fragment>
    );
}
}