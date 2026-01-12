// Reusable child component
function Hello() {
  return (
    <div>
      <h1>This is a Function Component</h1>
    </div>
  )
}

// Main App component
export default function App() {
  return (
      <Hello />
  )
}
