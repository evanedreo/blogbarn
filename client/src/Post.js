export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2024/01/GettyImages-1238895813.jpg?w=850&h=492&crop=1"
          alt=""
        />
      </div>
      <div className="text">
        <h2>
          EV startup Fisker struggling to meet internal sales goals, documents
          show{" "}
        </h2>
        <p className="info">
          <a className="author">Sean O'Kane</a>
          <time>2024-01-04</time>
        </p>
        <p className="summary">
          Fisker remains far from meeting CEO and founder Henrik Fisker’s
          publicly stated goal of delivering 300 electric SUVs per day globally,
          according to internal documents viewed by TechCrunch.
        </p>
      </div>
    </div>
  );
}
