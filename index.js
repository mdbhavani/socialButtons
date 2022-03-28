const Button = (props) => {
  const { name, className } = props;
  return <button className={className}>{name}</button>;
};

const element = (
  <div className="container">
    <h1 className="head">Social Buttons</h1>
    <div className="con">
      <Button name="Like" className="like-btn" />
      <Button name="Comment" className="comment-btn" />
      <Button name="Share" className="share-btn" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
