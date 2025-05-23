import comics from "../../data/comics";
import ComicsItem from "./ComicsItem";

export default function ComicsList() {
  return (
    <div className="row">
      <div id="tag">CURRENT SERIES</div>
      {comics.map((comic) => (
        <ComicsItem title={comic.title} img={comic.thumb} key={comic.id} />
      ))}
      <button className="btn-primary">LOAD MORE</button>
    </div>
  );
}
