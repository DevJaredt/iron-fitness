const OurCustom = () => {
    return (
        <div style={{ marginTop: "50px" }}>
          <section className="App-header">
            <h1>Nuestro Gimnasio FitnessPro</h1>
            <p>Bienvenido a FitnessPro, tu destino para la salud y el bienestar.</p>
            <p>Descubre una gama completa de proteínas y suplementos de alta calidad, junto con un espacio de entrenamiento de vanguardia.</p>
          </section>
          <section className="ProductSection">
            <h2>Nuestra Selección de Productos</h2>
            <div className="ProductList">
              {/* Aquí puedes incluir tus productos y enlaces a la tienda */}
              <div className="Product">
                <img src="protein1.jpg" alt="Proteína en polvo 1" />
                <h3>Proteína en Polvo Premium</h3>
                <p>¡Eleva tus entrenamientos con nuestra proteína en polvo de alta calidad!</p>
                <button>Ver Detalles</button>
              </div>
              <div className="Product">
                <img src="supplement1.jpg" alt="Suplemento 1" />
                <h3>Suplemento Esencial</h3>
                <p>Maximiza tus resultados con nuestros suplementos especializados.</p>
                <button>Ver Detalles</button>
              </div>
              {/* Agrega más productos según sea necesario */}
            </div>
          </section>
          <section className="TrainingSection">
            <h2>Nuestras Instalaciones de Entrenamiento</h2>
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