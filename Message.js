export default function Message({ author, quote, text1, text2, image }) {
  return (
    <div>
      <p>
        {text1} {"" + author}
      </p>
      <img src={"https://http.cat/102"} alt="Cats"></img>
      <p>
        {text2} {JSON.stringify(quote)}
      </p>
    </div>
  );
}
