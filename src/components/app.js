import React, {Component, Fragment} from 'react';
import superagent from 'superagent';
import {fetchData} from '../lib/utils.js';
import SearchForm from './searchForm.js';
import SearchResultList from './searchResultsList.js';

export default class App extends Component {
    constructor(props) {
      super(props); 
      this.state = {
        topic: {},
        topicList: [],
        loading: false,
      }

      this.loadRedditList = this.loadRedditList.bind(this);
      this.fetchData = this.fetchData.bind(this);
      this.isLoading = this.isLoading.bind(this);
        }
        componentDidUpdate() {
        }
        isLoading(loading) {
            this.setState( Object.assign(...this.state, {loading}) );
        }

        componentDidMount() {
            this.loadRedditList()
              .then(data => 
                this.setState( Object.assign(...this.state, data) ) 
            );
        }
        loadRedditList(url) {
            return this.fetchData(url)
              .then(redditData => {
                let redditList = redditData.data.children;
               this.setState({topicList: redditList});

              });
            }


        fetchData(url) {
            this.isLoading(true);
            return superagent.get(url)
            .then(result => {
                this.isLoading(false);
                return result.body
            })
            .catch(error => {
                //TO DO: add something to turn border red
            })
        }

  render() {
      return (<Fragment>
          <h2>Reddit Search</h2>
          <main className={this.state.loading ? 'loading' : null}>
          <SearchForm searchMethod={this.loadRedditList}/>
          <SearchResultList addData={this.state.topicList}/> 
          </main>
          </Fragment>
      );
  }
        
}
  