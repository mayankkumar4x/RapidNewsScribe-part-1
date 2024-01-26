import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsApp`;

  }

  async update() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4ac901088be431da066739fd5dd2fbc&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.props.setProgress(30);
    this.setState({ loading: false })
    let data = await fetch(url);
    this.props.setProgress(60);
    let parsedata = await data.json();
    this.props.setProgress(80);
    console.log(parsedata);
    this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults, loading: true });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.update();
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4ac901088be431da066739fd5dd2fbc&page=1&pagesize=${this.props.pageSize}`;
    // this.setState({loading:false})
    // let data = await fetch(url);
    // let parsedata = await data.json();
    // console.log(parsedata);
    // this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults, loading:true});
  }
  prevfun = async () => {
    // this.setState({loading:false});
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4ac901088be431da066739fd5dd2fbc&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedata = await data.json();
    // console.log(parsedata);
    this.setState({
      page: --this.state.page,
      // articles: parsedata.articles,
      // loading:true
    });
    this.update();
  }
  nextfun = async () => {
    // this.setState({loading:false})
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4ac901088be431da066739fd5dd2fbc&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
    // let data=await fetch(url);
    // let parsedata=await data.json();
    // console.log(parsedata);
    this.setState({
      page: ++this.state.page,
      // articles:parsedata.articles,
      // loading:true,
    });
    this.update();
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e4ac901088be431da066739fd5dd2fbc&page=${this.state.page}&pagesize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({ articles: this.state.articles.concat(parsedata.articles), totalResults: parsedata.totalResults });
  };
  render() {
    return (<>
      <h2 className='text-center' style={{ margin: '20px 0px' }}>Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
      {!this.state.loading && <Spinner />}
      <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length !== this.state.totalResults}
        loader={<Spinner />}
      >
        {/* {this.state.items.map((i, index) => (
            <div style={style} key={index}>
            div - #{index}
            </div>
          ))} */}
        <div className='container my-3'>
          <div className='row'>
            {this.state.articles.map((element) => {
              return (<div className='col-md-4' key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} name={element.source.name} />
              </div>);
            })}
          </div></div>
      </InfiniteScroll>
      {/* <div className="d-flex justify-content-between">
          <button disabled={this.state.page==1} type="button" className="btn btn-dark" onClick={this.prevfun}>&larr;Previous</button>
          <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.nextfun}>Next&rarr;</button>
        </div> */}


      {/* <div className='col-md-4'>
            <NewsItem title="mytitile" description="mydescription" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
        </div> */}


    </>)
  }
}

export default News
