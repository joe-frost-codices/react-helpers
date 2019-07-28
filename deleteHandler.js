import React, { Component, Fragment } from "react"
import ArticlesList from "../components/ArticlesList"
import articleContent from "./article-content"

class ArticlesListPage extends Component {
    constructor(props) {
        super(props)
        this.state = { articles: articleContent }
    }

    handleDeleteArticle = (event) => {
        const toDelete = event.target.getAttribute("data-id")
        const articleIds = this.state.articles.map((article) => article.id)
        const articleId = articleIds.findIndex( item => item === parseInt(toDelete))
        const newArticles = this.state.articles.map(article => article)
        newArticles.splice(articleId,1)
        this.setState({articles: newArticles})
    }

    render() {
        return (
            <Fragment>
                <h1>Articles List</h1>
                <ArticlesList articles={this.state.articles} deleteArticle={this.handleDeleteArticle} />
            </Fragment>
        )
    }
}

export default ArticlesListPage
