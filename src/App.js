import ListeExperiences from './ListeExperiences';
import ListeFormations from './ListeFormations';
import photo from './photo/photo.jpg';

function App() {
  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <img
          src={photo}
          alt="MOHAMED HIHI"
          className="rounded-circle border border-3 border-primary mb-3"
          style={{ width: 150, height: 150, objectFit: 'cover' }}
        />
        <h1>MOHAMED HIHI</h1>
        <p className="lead text-muted">Développeur Web</p>
      </header>

      <div className="row">
        <div className="col-md-6">
          <ListeExperiences />
        </div>
        <div className="col-md-6">
          <ListeFormations />
        </div>
      </div>
    </div>
  );
}
export default App;