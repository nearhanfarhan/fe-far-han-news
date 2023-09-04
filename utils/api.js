const BASE_URL = "https://far-han-news.onrender.com";

import axios from "axios";

export const getArticles = () => {
  const endpoint = `/api/articles`;
  return axios.get(`${BASE_URL}${endpoint}`).then((response) => {
    return response.data.articles;
  });
};

export const getArticleById = (article_id) => {
  const endpoint = `/api/articles/${article_id}`;
  return axios.get(`${BASE_URL}${endpoint}`).then((response) => {
    return response.data.article;
  });
};
