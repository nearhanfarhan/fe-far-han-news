import { useEffect, useState } from "react";
import { getArticles } from "../../utils/api";
import { useSearchParams } from "react-router-dom";

export const SortArticlesForm = ({ topics, setArticles }) => {
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const urlSortBy = searchParams.get("sortBy")
    const urlSortOrder = searchParams.get("sortOrder")
    if (urlSortBy) {
        setSortBy(urlSortBy);
      }
      if (urlSortOrder) {
        setSortOrder(urlSortOrder);
      }
    }, [searchParams]);

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchParams.set("sortBy", sortBy)
    searchParams.set("sortOrder", sortOrder)
    setSearchParams(searchParams)
    getArticles(topics, sortBy, sortOrder).then((data) => {
      setArticles(data);
    });
  };

  return (
<div className="sort-articles-form">
  <form onSubmit={handleSubmit} className="form-container">
    <div className="select-container">
      <label>
        
        <select value={sortBy} onChange={handleSortByChange}>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
      </label>
    </div>
    <div className="select-container">
      <label>
        <select value={sortOrder} onChange={handleSortOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
    <div className="sort-button-container">
      <button type="submit" className="sort-button">
        Sort
      </button>
    </div>
  </form>
</div>  
);
};
