// Importing the reusable Button component
// This button can be used across different sections/pages
import Button from "../components/Switch.JSX"

// HeroSection component
// This component represents the top (hero) section of the Home page
export default function HeroSection() {
  return (
    <section>
      {/* Hero image displayed at the top of the page */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvODw1yGuG_Namp77DEo1VEoXt5jYpXubWmA&s"
        alt="Hero section banner"
      />

      {/* Call-to-action button */}
      {/* Reusable Button component for user interaction */}
      <Button />
    </section>
  )
}
