const Forecast = () => {
  return (
    <section className="section">
      <article>
        <div>
          <h4>Martes</h4>
          <p>Día y mes</p>
        </div>
        <div>
          <svg>Icono del clima</svg>
        </div>
        <div>
          <div>
            <p>Mínima</p>
            <span>25º</span>
          </div>
          <div>
            <p>Máxima</p>
            <span>38º</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Forecast;
