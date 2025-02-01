import { useState } from "react";
import { posts } from "../library/constants";

const NewsList = () => {
  const [news, setNews] = useState(posts);
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  function deletePost() {
    setNews(news.slice(1));
  }

  function addPost() {
    if (value.trim() === "") return;
    setNews([
      ...news,
      {
        category: category,
        id: Date.now(),
        title: value,
      },
    ]);

    setValue("");
  }

  const filteredNews = category
    ? news.filter((post) => post.category === category)
    : news;

  return (
    <div>
      <div>
        <input
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button onClick={addPost}>Добавить пост</button>
      </div>

      <select
        value={category}
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      >
        <option value="">Все</option>
        <option value={"Чай"}>Чай</option>
        <option value={"Кофе"}>Кофе</option>
      </select>

      <button onClick={deletePost}>Удалить пост</button>
      {filteredNews.map((post) => (
        <article>
          <h2>{post.title}</h2>
        </article>
      ))}

      {news.length === 0 && <div>Простите, но постов нет :(</div>}
    </div>
  );
};

export default NewsList;
