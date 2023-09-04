import { useEffect, useState } from "react"
import { getArticles } from "../../utils/api"

export const ArticlesView = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((data) => setArticles(data))
    }, [])

    return(
        <section className="articles-card">
            {articles.map(
                ({author, title, article_img_url, topic, article_id}) => {
                return ({
                    <section key={article_id}>
                })
            })}
        </section>
    )
}