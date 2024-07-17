import PropTypes from 'prop-types';


function InfoPerso({ onGeneratePDF }) {
  return (
    <>
      <div id="content-to-pdf">
        <main className='text-black'>
          <div className="mainGauche">
            <h2>Ma Page Principale</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Libero unde sequi expedita quibusdam quasi, natus ab velit ipsa pariatur sed!</p>
          </div>

          <div className="oblique-separator"></div>

          <div className="mainDroite">
            <h2>Titre 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quas.</p>
          </div>
        </main>
      </div>
      <button onClick={onGeneratePDF}>Générer PDF</button>
    </>
  );
}

InfoPerso.propTypes = {
  onGeneratePDF: PropTypes.func.isRequired,
};

export default InfoPerso;