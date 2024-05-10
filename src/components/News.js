import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import NewsItem from './newsItem'
import propTypes from 'prop-types'


export class news extends Component {

  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }

  static defaultProps ={
    country: "in",
    pageSize:15,
    category:"general"
  }


  static propTypes ={
    country: propTypes.string,
    pageSize:propTypes.number,
    category:propTypes.string,
    
  }


  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7da5f79688c74abf9bb421a7a45c5732&pageSize=20`;
    let data = await fetch(url);
    let parsedData= await data.json(data);
    this.setState({articles : parsedData.articles})
  }

   funPrev =async ()=>{
    console.log("Prev");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7da5f79688c74abf9bb421a7a45c5732&page=${this.state.page-1}&pageSize=20`
    let data = await fetch(url);
    let parsedData= await data.json(data);
    this.setState({articles : parsedData.articles, totalResults:parsedData.totalResults})


  }

  funNext=async()=>{
    console.log("Next")
    if(this.state.page>Math.ceil(this.state.totalResults/20)){

    }
    else{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7da5f79688c74abf9bb421a7a45c5732&page=${this.state.page+1}&pageSize=20`
    let data = await fetch(url);
    let parsedData= await data.json(data);
    this.setState({articles : parsedData.articles, totalResults:parsedData.totalResults})
    }
  }

  render() {
    return (
      <div>
        <div className="container my-3 text-center my-3">
          <h2>News Monkey- Top Headline</h2>
          <div className="row my-2">
            {/* <div className="col-md-4"> */}
            {/* </div> */}
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title?element.title:""} description={element.description?element.description:""}
                      imageUrl={element.urlToImage} newsUrl={element.url}/>
                      </div>
            })}

          
        </div>
      <div class="d-flex justify-content-between" role="group" >
          <button disabled={this.state.page<=1} type="button" class="btn btn-sm btn-dark" onClick={this.funPrev}>&larr; Previous</button>
          <button disabled={this.state.page>Math.ceil(this.state.totalResults/20)} type="button" class="btn btn-sm btn-dark" onClick={this.funNext}>Next &rarr;</button>
      </div>
      </div>
      </div>
    )
  }
}

export default news
