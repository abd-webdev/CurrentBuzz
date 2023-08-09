import { useEffect, useState } from 'react'
import React from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);



  const handleUpdate = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1de736a7554246169129e41635c72fe0&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - CurrentBuzz`;
    handleUpdate();
  }, []);


  // const handleNextClick = async () => {
  //   console.log("Next Click");
  //   setPage(page+1);
  //   handleUpdate();
  // }
  // const handlePrevClick = async () => {
  //   console.log("Previous Click");
  //   setPage(page-1);
  //   handleUpdate();
  // }

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1de736a7554246169129e41635c72fe0&page=${page + 1}&pageSize=${props.pageSize}`;
    setLoading(true);
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)
    setLoading(false);

  };


  return (
    <>

      <h1 className={`text-${props.Mode === "light" ? 'dark' : 'light'} text-center`} style={{ margin: '30px 0', marginTop: '84px' }}>CurrentBuzz - {capitalizeFirstLetter(props.category)} News</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-3 my-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={!element.author ? "Unknown" : element.author} date={element.publishedAt} source={element.source.name} Mode={props.Mode} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>

    </>

  )

}

News.defaultProps = {
  country: 'in',
  pageSize: 20,
  category: 'general',
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
