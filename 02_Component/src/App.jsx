// Card component
// This is a reusable functional component
// It returns a simple heading
function Card() {
  return (
    <h2>Hello from Card</h2>
  )
}

// App component (Main/root component)
// This component renders multiple Card components
function App() { 
  return (
    <>
      {/* Reusing the Card component */}
      <Card />

      {/* Same Card component used again */}
      <Card />

      {/* Card component reused multiple times */}
      <Card />
    </>
  )
}

// Exporting App so it can be used in index.js/main.jsx
export default App
