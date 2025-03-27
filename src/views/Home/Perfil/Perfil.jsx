import "./perfil.css";

export const Perfil = () => {
  return (
    <>
      <article className="características mt-5">
        <h2 className="perfil">Professional Profile</h2>
        <div className="contenedor">
        <div className="icono">
            <i className="fa-solid fa-database"></i>
            <p>Programming Analyst</p>
          </div>
          <div className="icono">
            <i className="fa-solid fa-laptop-code"></i>
            <p>Fullstack Developer </p>
          </div>
          <div className="icono">
            <i className="fa-solid fa-chalkboard-user"></i>
            <p>Teacher of English as a Foreign Language</p>
          </div>
        </div>
      </article>
    </>
  );
};
