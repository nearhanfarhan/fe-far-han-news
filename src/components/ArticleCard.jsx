export const ArticleCard = ({author, title, article_img_url, topic}) => {
  return (
    <section>
      <h3>{title}</h3>
      <img src={article_img_url} width="25%" />
      <h4>{topic}</h4>
      <h5>{author}</h5>
    </section>
  );
};
