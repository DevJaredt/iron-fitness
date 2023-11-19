import  Carousel  from '../../componets/carousel/Carousel'

const OurCustom = () => {
    return (
        <div style={{ marginTop: "50px" }}>
          <section className="App-header">
            <h1>𝐍𝐮𝐞𝐬𝐭𝐫𝐨 𝐆𝐢𝐦𝐧𝐚𝐬𝐢𝐨 𝐅𝐢𝐭𝐧𝐞𝐬𝐬𝐏𝐫𝐨</h1>
            <p>Bienvenido a FitnessPro, tu destino para la salud y el bienestar.</p>
            <p>Descubre una gama completa de proteínas y suplementos de alta calidad, junto con un espacio de entrenamiento de vanguardia.</p>
          </section>
          <section className="ProductSection">
            <h2>𝐍𝐮𝐞𝐬𝐭𝐫𝐚 𝐒𝐞𝐥𝐞𝐜𝐜𝐢ó𝐧 𝐝𝐞 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐨𝐬</h2>
            <div className="ProductList">
              <div className="Product">
              <Carousel/>
              </div>
            </div>
          </section>
          <section className="TrainingSection">
            <h2>𝐍𝐮𝐞𝐬𝐭𝐫𝐚𝐬 𝐈𝐧𝐬𝐭𝐚𝐥𝐚𝐜𝐢𝐨𝐧𝐞𝐬 𝐝𝐞 𝐄𝐧𝐭𝐫𝐞𝐧𝐚𝐦𝐢𝐞𝐧𝐭𝐨</h2>
            <p>En FitnessPro, no solo te proporcionamos los mejores productos, sino también un espacio dedicado para alcanzar tus metas de fitness. Nuestras instalaciones incluyen:</p>
            <ul>
              <li>Área de pesas libres</li>
              <li>Máquinas de última generación</li>
              <li>Clases de grupo dirigidas por profesionales</li>
              <li>Entrenadores personales disponibles</li>
            </ul>
            <p>¡Únete a nosotros hoy y experimenta la diferencia en FitnessPro!</p>
          </section>
          <footer>
            <p>&copy; 2023 FitnessPro. Todos los derechos reservados.</p>
          </footer>
        </div>
      );
}
export default OurCustom;