// Importing Card component from Card.jsx file
import Card from "./Card.jsx"

// App component (root component)
function App() {
  return (
    <>
      {/* Using imported Card component */}
      <Card />
      <Card />
      <Card />
    </>
  )
}

// Exporting App component so it can be used in main.jsx
export default App
