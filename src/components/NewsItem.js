import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, urlToImage,author, url, date } = this.props;

        return (
            <div className="container my-3">
                <div className="card" style={{ width: "18rem" }}>
                <span class="position-absolute top-0 end-0 translate-middle-y badge rounded-pill bg-danger">
                        {author}
                    </span>
                    <img src={urlToImage ? urlToImage : "https://www.examsegg.com/wp-content/uploads/2021/02/hindi-news-channels-list-e1613312066124-810x379.png"} alt="" />
                    
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <small className="text-body-secondary">Last updated: {new Date(date).toLocaleTimeString('en-IN')}</small>
                        <br/>
                        <small className="text-body-secondary">{new Date(date).toDateString()}</small>
                        <br />
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary my-3">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
