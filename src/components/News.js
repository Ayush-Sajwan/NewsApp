import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps = {

        pageSize: 8,
        country: 'in',
        category: 'general'
    }

    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);


        this.state = {
            articles: [],
            loading: true,
            page: 1,
        }

    }


    fetchArticles = async () => {

        console.log(this.state.page);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ccf2888718043d29393c7e3dc109034&page=${this.state.page}
        &pageSize=${this.props.pageSize}`;
        return fetch(url)
            .then((response) => {
                return response.json();
            });
    }


    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ccf2888718043d29393c7e3dc109034&page=${this.state.page}
        &pageSize=${this.props.pageSize}`;
        let response = await fetch(url);
        let data = await response.json();

        this.setState(
            {
                articles: data.articles,
                totalResults: data.totalResults,
                page: 1,
                loading: false,
                start: true
            }
        )


    }


    previousClick = async () => {
        await this.setState({ loading: true });
        await this.setState({ page: this.state.page - 1 });
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1)
            }, 2000);
        })


        this.fetchArticles()
            .then((data) => {
                this.setState(
                    {
                        articles: data.articles,
                        loading: false
                    }
                )
            })
    }

    nextClick = async () => {


        await this.setState({ loading: true });
        await this.setState({ page: this.state.page + 1 });
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1)
            }, 2000);
        })



        this.fetchArticles()
            .then((data) => {
                this.setState(
                    {
                        articles: data.articles,
                        loading: false
                    }
                )
            })

    }


    render() {

        return (
            <div className="container my-3">

                <h2 className="text-center">{this.props.category.charAt(0).toUpperCase()+this.props.category.substring(1)} -Top Headlines</h2>
                {this.state.loading && <Spinner />}

                <div className="row">


                    {!this.state.loading && this.state.articles.map((Element) => {

                        return (
                            <div className="col-md-4" key={Element.url}>

                                <NewsItem
                                    url={Element.url}
                                    title={Element.title ? Element.title.substring(0, 45) : ""}
                                    description={Element.description ? Element.description.substring(0, 90) + "....." : "Description Not Available"}
                                    urlToImage={Element.urlToImage}
                                    date={Element.publishedAt}
                                    author={Element.author}
                                />

                            </div>
                        );


                    })}

                </div>


                <div className="container d-flex justify-content-between my-3">
                    <button type="button" onClick={this.previousClick}
                        className={"btn btn-primary" + (this.state.page - 1 >= 1 ? "" : " disabled")}>Previous</button>
                    <button type="button" onClick={this.nextClick}
                        className={"btn btn-primary" + (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize) ? "" : " disabled")}>Next</button>
                </div>


            </div>
        )
    }


}
