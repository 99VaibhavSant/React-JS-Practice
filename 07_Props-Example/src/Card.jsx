import "./Card.css"

export default function Card({ name, age = "10" , img }) {
  return (
    <div className="card">
      <h1>My name is {name}</h1>
      <h3>Age: {age}</h3>
      <img src={img} alt="" />
    </div>
  );
}
  