'use strict';
import React, {Component, Fragment} from 'react';

export default class SearchResultList extends Component {
  constructor(props) {
    super(props);
  }
RedditList() {
  let mylist = this.props.addData.map( (data, i) => {
  return <li key={i}><a href={ data.data.url}>url</a>   <a href={ data.data.title}><header>Title: { data.data.title}</header></a>    <a href={ data.data.ups}><p>ups: { data.data.ups}</p></a></li>
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