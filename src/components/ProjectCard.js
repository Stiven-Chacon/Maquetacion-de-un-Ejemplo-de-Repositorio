import { Col } from "react-bootstrap";

// Definición del componente ProjectCard que recibe propiedades como título, descripción e URL de imagen
export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    // Columna de Bootstrap para el diseño responsivo de la tarjeta del proyecto
    <Col size={12} sm={6} md={4}>
      {/* Contenedor de la imagen y el texto del proyecto */}
      <div className="proj-imgbx">
        {/* Imagen del proyecto */}
        <img src={imgUrl} />
        {/* Contenedor de texto del proyecto */}
        <div className="proj-txtx">
          {/* Título del proyecto */}
          <h4>{title}</h4>
          {/* Descripción del proyecto */}
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
