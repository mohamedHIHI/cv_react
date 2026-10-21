function Experience({ poste, entreprise, periode, description }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-0">{poste}</h5>
        <h6 className="text-primary">{entreprise}</h6>
        <small className="text-muted">{periode}</small>
        <p className="card-text mt-2">{description}</p>
      </div>
    </div>
  );
}
export default Experience;