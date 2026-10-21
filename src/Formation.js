function Formation({ diplome, etablissement, annee }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-0">{diplome}</h5>
        <h6 className="text-success">{etablissement}</h6>
        <small className="text-muted">{annee}</small>
      </div>
    </div>
  );
}
export default Formation;