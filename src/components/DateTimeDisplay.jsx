export const DateTimeDisplay = ({dateTimeString}) => {
  const date = new Date(dateTimeString);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  
  const formattedDate = date.toLocaleString(undefined, options);
  return <div>{formattedDate}</div>;
};
