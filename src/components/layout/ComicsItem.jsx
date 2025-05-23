export default function ComicsItem({ title, img }) {
  return (
    <div className="col-1-6">
      <div className="card">
        <div className="card-image">
          <img src={img} alt={title} />
        </div>
        <div className="card-title">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
