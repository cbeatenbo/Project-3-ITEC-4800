import "./styles.css";
import { useState, useEffect } from "react";
import Entry from "./Entry";
import Message from "./Message";
import Title from "./Title";

export default function App() {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const authorName = encodeURIComponent(author);
    const url = "https://zenquotes.io/api/${authorName}/quotes.json";
    fetch(url)
      .then((r) => r.json())
      .then((r) => setQuote(r))
      .catch((e) => setQuote(e));
    fetch("https://http.cat/api/102")
      .then((r) => r.json())
      .then((r) => setImage(r))
      .catch((e) => setImage(e));
  }, [author]);

  return (
    <div className="App">
      <Title text="Zen Quotes" />
      <Title text="Random Quote Generator" />
      <Entry action={setAuthor} />
      <Message author={author} quote={quote} text1="Author: " text2="Quote: " />
      <div class="footer">
        <a href="https://github.com/cbeatenbo/Project-3-ITEC-4800">
          GitHub Project 3 Repository
        </a>
      </div>
    </div>
  );
}

