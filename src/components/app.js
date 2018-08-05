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
      //this.loadRedditDetails = this.loadRedditDetails.bind(this);
      this.searchRedditBoard = this.searchRedditBoard.bind(this);
      //this.fetchData = this.fetchData.bind(this);
      this.isLoading = this.isLoading.bind(this);
        }
        componentDidUpdate() {
            console.log('__STATE__', this.state);
        }
        isLoading(loading) {
            this.setState( Object.assign(...this.state, {loading}) );
        }

        // async componentDidMount() {
        //     const data = await this.loadRedditList();
        //     this.setState( Object.assign(...this.state, data) );
        // }
       
        // async loadRedditList() {
        //     const redditData = await this.fetchData(`https://www.reddit.com/r/${searchFormBoard}.json?`);
        //     let redditList = redditData.results;
        //     return {redditList};
        // }
        // async loadRedditDetails(e) {
        //     let url = e.target.value;
        //     let loading = true;
        //     const redditBoard = await(this.fetchData(url));
        //     this.setState( Object.assign(...this.state, {redditBoard}) );
        // }
       // async searchRedditBoard(searchFormBoard) {
        //     let url = `https://www.reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`;
        //     const redditBoard = await(this.fetchData(url));
        //     this.setState( Object.assign(...this.state, {redditBoard}) );
        // }

        componentDidMount() {
            this.loadRedditList()
              .then(data => 
                this.setState( Object.assign(...this.state, data) ) 
            );
        }
        loadRedditList(e) {
            return this.fetchData(`https://www.reddit.com/r/summer.json?`)
              .then(redditData => {
                  console.log('WHAT IS HERE', redditData);
                let redditList = redditData.results;
                return {redditList};
              });
            }

        loadRedditDetails(e) {
            let url = e.target.value;
            let loading = true;
            return this.fetchData(url)
              .then( redditBoard => 
                this.setState( Object.assign(...this.state, {redditBoard}) )
              );
        }

        searchRedditBoard(e) {
            let url = `https://www.reddit.com/r/${e.target.value}.json`;
            return this.fetchData(url)
            .then( redditBoard => 
              this.setState( Object.assign(...this.state, {redditBoard}) )
            ); 
        }

        // GetFormResults() {
        //     const searchFormLimit = 5;
        //     let searchFormBoard = SearchForm.state.search;
        //     let url = `https://www.reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`;
        //     setState.topic(url);
        // }
        fetchData(url) {
            console.log('did I get a url: ', url);
            this.isLoading(true);
            return superagent.get(url)
            .then(result => {
                this.isLoading(false);
                return result.body
            })
            .catch(console.error);
        }
        // load(url) {
        //     this.setState( Object.assign(...this.state, {loading:true}) );
        //     return fetchData(url)
        //       .then(data => {
        //         this.setState( Object.assign(...this.state, {loading:false}) );
        //         return data;
        //       });
        //   }

  render() {
      return (<Fragment>
          <h2>Reddit Search</h2>
          <main className={this.state.loading ? 'loading' : null}>
          <SearchForm searchMethod={this.state.search}/>
              {/* <SearchForm SearchForm value={this.state} onChange={App.searchRedditBoard}/> */}
            
          </main>
          </Fragment>
      );
  }
        
}
  