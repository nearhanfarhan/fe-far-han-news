import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://far-han-news.onrender.com",
});

export const getArticles = (topic, sortBy, sortOrder) => {
  let endpoint = `/api/articles`
  if (topic||sortBy) endpoint += `?`
  if (topic) endpoint += `topic=${topic}`;
  if (topic&&sortBy) endpoint += `&`
  if (sortBy) endpoint += `sort_by=${sortBy}&order=${sortOrder}`
    return newsApi.get(endpoint).then((response) => {
      return response.data.articles;
    });
  }

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
  const data = { inc_votes: vote };
  return newsApi.patch(endpoint, data).then((response) => {
    return response.data.comment;
  });
};

export const postCommentByArticleId = (article_id, author, body) => {
  const endpoint = `/api/articles/${article_id}/comments`;
  const data = { author, body };
  return newsApi.post(endpoint, data).then((response) => {
    return response.data.comment;
  });
};

export const updateArticleVote = (article_id, inc_votes) => {
  const endpoint = `/api/articles/${article_id}`;
  const data = { inc_votes };
  return newsApi.patch(endpoint, data).then((response) => {
    return response.data.article;
  });
};

export const getTopics = () => {
  const endpoint = `/api/topics`;
  return newsApi.get(endpoint).then((response) => {
    return response.data.topics;
  });
};
