import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://far-han-news.onrender.com'
})

export const getArticles = () => {
  const endpoint = `/api/articles`;
  return newsApi.get(endpoint).then((response) => {
    return response.data.articles;
  });
};

export const getArticleById = (article_id) => {
  const endpoint = `/api/articles/${article_id}`;
  return newsApi.get(endpoint).then((response) => {
    return response.data.article;
  });
};
