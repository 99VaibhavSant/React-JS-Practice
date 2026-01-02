import "./Card.css"

// Card component
// Receives data using props and displays it dynamically
export default function Card({ title, age, test }) {
  return (
    <div className="Card">
      {/* Displaying name passed from parent */}
      <h1>My name is {title}</h1>

      {/* Displaying age passed from parent */}
      <h2>My age is {age}</h2>

      {/* Button text received via props */}
      <button>{test}</button>
    </div>
  )
}
