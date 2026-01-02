export default function ProfileCard({ name, role, age, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="avatar" />

      <h2>{name}</h2>
      <p>{role}</p>
      <p>Age: {age}</p>
    </div>
  );
}
