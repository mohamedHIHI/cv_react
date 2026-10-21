import { useState } from 'react';

function Titre({ children }) {
  return (
    <h3
      className="text-uppercase fs-6 fw-bold px-3 py-2 mb-3"
      style={{ backgroundColor: '#c6ff00', color: '#26e226' }}
    >
      {children}
    </h3>
  );
}
function ListeExperiences() {
  const [profil] = useState(
    'Étudiante en Développement Digital, motivée, sérieuse et passionnée par la programmation.'
  );

  const [contacts] = useState([
    { icone: 'bi-telephone-fill', label: 'Téléphone', valeur: '212776259942', lien: 'tel:+212776259942' },
    { icone: 'bi-geo-alt-fill', label: 'Adresse', valeur: 'FES, Maroc' },
    { icone: 'bi-envelope-fill', label: 'E-mail', valeur: 'mohamedhihi361@gmail.com', lien: 'mailto:oubelloucheromaissae@gmail.com' },
    { icone: 'bi-linkedin', label: 'LinkedIn', valeur: 'https://www.linkedin.com/in/mohamed-hihi-4826523b2/', lien: 'https://www.linkedin.com/in/mohamed-hihi-4826523b2/' },
    { icone: 'bi-github', label: 'GitHub', valeur: 'github.com/ton-username', lien: 'https://github.com/mohamedHIHI' },
  ]);

  const [competences] = useState([
    'HTML / CSS',
    'JavaScript',
    'React',
    'PHP / MySQL',
    'Bootstrap',
  ]);

  const [diplomes] = useState([
    { annee: '2027', titre: 'Certificat de robotique' },
    { annee: '2027', titre: 'Certificat de I ai' },
    { annee: '2027', titre: 'Certificat de pie' },
    { annee: '2025/2027', titre: 'Diplôme développement digital option full stack' },
    {annee: '2025', titre:' BAC pc option francaise' },
  ]);
  return (
    <>
      <section className="mb-4">
        <Titre>Profil</Titre>
        <p>{profil}</p>

        <ul className="list-unstyled">
          {contacts.map((c, i) => (
            <li key={i} className="mb-2">
              <i className={`bi ${c.icone} me-2`}></i>
              {c.lien ? (
                <a href={c.lien} target="_blank" rel="noreferrer" className="text-dark text-decoration-none">
                  {c.valeur}
                </a>
              ) : (
                c.valeur
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <Titre>Compétences</Titre>
        <ul className="list-unstyled">
          {competences.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <Titre>
          <i className="bi bi-mortarboard-fill me-2"></i>Diplômes
        </Titre>
        {diplomes.map((d, i) => (
          <div className="row mb-3" key={i}>
            <div className="col-3 fw-bold">{d.annee}</div>
            <div className="col-9">
              <h5 className="fw-bold text-uppercase mb-0">{d.titre}</h5>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default ListeExperiences;