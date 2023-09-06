import { DateTimeDisplay } from "./DateTimeDisplay";

export const ArticleCard = ({author, title, article_img_url, topic, created_at}) => {
  return (
    <section>
      <h3>{title}</h3>
      <img src={article_img_url} alt={`thumbnail image relating to ${topic}`}width="25%" />
      <h4>{topic}</h4>
      <h5>by {author} <DateTimeDisplay dateTimeString={created_at} /></h5>
    </section>
  );
};
