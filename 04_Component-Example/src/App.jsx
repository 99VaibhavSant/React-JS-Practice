// Importing Card as a named export from Card.jsx
// Curly braces {} are required for named exports
import { Card } from "./Card.jsx"

// App component (root component of the application)
function App() {
  return (
    <>
      {/* Using the Card component inside App */}
      <Card />
    </>
  )
}

// Exporting App as default so it can be used in main.jsx
export default App
