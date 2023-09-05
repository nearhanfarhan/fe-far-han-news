import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://far-han-news.onrender.com",
});

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

export const getCommentsByArticleId = (article_id) => {
  const endpoint = `/api/articles/${article_id}/comments`;
  return newsApi.get(endpoint).then((response) => {
    return response.data.comments;
  });
};

export const updateCommentVote = (comment_id, vote) => {
  const endpoint = `/api/comments/${comment_id}`;
  const body = { inc_votes: vote }
  console.log(endpoint)
  return newsApi.patch(endpoint, { inc_votes: vote }).then((response) => {
    return response.data.comment;
  });
};
