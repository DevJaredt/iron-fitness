
import "./Register.css";

const Register = () => {
    return <>
        <h2>Registro de Usuarios</h2>
        <form action="#" method="post">
            <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required/>
            </div>
            <div className="form-group">
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido" required/>
            </div>
            <div className="form-group">
                <label htmlFor="telefono">Número de Teléfono:</label>
                <input type="tel" id="telefono" name="telefono" required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <input type="submit" value="Registrarse"/>
        </form>
    </>
};

export default Register;