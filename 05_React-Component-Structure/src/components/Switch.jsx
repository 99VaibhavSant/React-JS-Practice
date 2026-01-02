// Button component
// A reusable button that can be used anywhere in the app
export default function Button() {
  return (
    <button
      style={{
        padding: "10px 20px",
        backgroundColor: "#2563eb", // blue
        color: "#ffffff",
        border: "none",
        borderRadius: "6px",
        fontSize: "16px"
      }}
    >
      Click Me
    </button>
  )
}
