import './ProximasJornadas.css';

function ProximasJornadas() {
  return (
    <section className="proximas-jornadas">
      <div className="seccion-header">
        <h2>PRÓXIMAS JORNADAS</h2>
        <a href="#">Ver todas las jornadas →</a>
      </div>
      <h3>Súmate esta semana</h3>
      <div className="jornadas-grid">
        {}
        <div className="jornada-card">
          <span className="tag-ambiental">Ambiental</span>
          <p className="fecha">Sáb 10 oct</p>
          <h4>Limpieza de la quebrada La Iguana</h4>
          <p>8:00 – 11:00 · Comuna 7</p>
          <p>Cupo: 20 personas</p>
          <a href="#">Ver detalle →</a>
        </div>
        {/*otras jornadas */}
      </div>
    </section>
  );
}
export default ProximasJornadas;