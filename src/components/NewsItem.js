import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, date, author, source } = props;
    return (
      <div>
        <div className={`card bg-${props.Mode} text-${props.Mode === "light" ? 'dark' : 'light'}`}>
          <div>
            <span className="badge bg-danger " style={{ display: 'flex', justifyContent: 'flex-end' , position:'absolute',right: '0'}}>
              {source}
            </span>
          </div>
          <img src={!imageUrl ? "https://media.npr.org/assets/img/2023/07/29/gettyimages-1413155609_wide-3b8b340143b73d5cfe0bb0bbdca4c69e2199cff3-s1400-c100.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className={`text-${props.Mode === "light" ? 'secondary' : 'success'}`}>By {author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-primary rounded-0 mybtn border border-0">Read more</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
