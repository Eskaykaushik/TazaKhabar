import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import defimage from './breakingnews.jpg'
import PropTypes from 'prop-types'


export default class News extends Component {
 
  static propTypes={
    country : PropTypes.string,
    category: PropTypes.string
  }

  static defaultProps={
    country : "in",
    category: "general"
  }
  

  constructor(){
    super();
    this.state={
        articles:[],
        page:1,
        load:false
    }

    
  }

 async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=aa7e40761da04d729b3e0e2a2dcefdb5&pagesize=6`;
    this.setState({load:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles});
    this.setState({load:false});
  }
  
  
  handleNextClick=async ()=>{
    
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=aa7e40761da04d729b3e0e2a2dcefdb5&page=${this.state.page+1}&pagesize=6`;
    this.setState({load:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles, page:this.state.page+1 });
    this.setState({load:false});


  }
  
  handlePrevClick=async ()=>{

    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=aa7e40761da04d729b3e0e2a2dcefdb5&page=${this.state.page-1}&pagesize=6`;
    this.setState({load:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles, page:this.state.page-1 });
    this.setState({load:false});
    
  }

  render() {

    
    return (

        
        <div className='container my-3'>

          <h1>News HeadLines</h1>
          {this.state.load && <Spinner/>}
          
          
      <div className='row my-3 '>
      {!this.state.load && this.state.articles.map((element)=>
      {
            
           return  <div  className='col-md-4 my-2'> <NewsItem key={element.url} title={element.title.slice(0,40)} description={element.description? element.description.slice(0,100):"Sample description"} imageUrl={element.urlToImage ? element.urlToImage: defimage} url={element.url}/> </div>
    
          })}
                
        
        </div>


      <div className='d-flex justify-content-between'>
      <button type="button" disabled={this.state.page===1}  onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
      <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/6)} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
      </div>
        

      </div>
    )
  }
}
