import Formation from './Formation';

const formations = [
  { diplome: 'Développement Digital', etablissement: ' CMC:Cité des métiers et compétences en Rabat ', debut: '2025', fin: '2027' },
  
];

function ListeFormations() {
  return (
    <section className="mb-4">
      <h3 className="bg-black text-white fs-6 fw-bold text-uppercase px-3 py-2 mb-3">
         Formations
      </h3>

      {formations.map((f, i) => (
        <Formation key={i} {...f} />
      ))}
    </section>
  );
}

export default ListeFormations;