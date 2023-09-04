export const ArticleCard = (author, title, article_img_url, topic) => {
  return (
    <section>
      <h3>Title</h3>
      <img src={article_img_url} />
      <p>{topic}</p>
      <p>{author}</p>
    </section>
  );
};
