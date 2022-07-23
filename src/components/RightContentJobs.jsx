import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const RightContentJobs = () => {
  const containerRef = useRef(null);
  const { events } = useDraggable(containerRef);
  return (
    <div
      className="container-jobs-challenge-right"
      ref={containerRef}
      {...events}
    >
      <div className="content-jobs-challenge-description">
        <div className="content-jobs-challenge-description-first">
          <p>
            El desafio será crear una app para poder encontrar rápidamente baños
            disponibles.
          </p>
        </div>
        <div className="content-jobs-challenge-description-second">
          <p>
            Le proporcionaremos los diseños de las pantallas principales.
            Esperamos que sea capaz de replicar el diseño tal como se muestra en{" "}
            <a
              href="https://www.figma.com/file/6AY04ICrsFClNrBgSAQhoq/Dev-Code-Challenge?node-id=297%3A4"
              target="_blank"
              rel="noreferrer noopener"
            >
              este Figma
            </a>
            , pero si considera alguna mejora en cuanto a usabilidad puede
            abordarla.
          </p>
        </div>
        <div className="content-jobs-challenge-description-third">
          <p>
            Depende de usted, su imaginación y sus habilidades encontrar nuevas
            soluciones y/o interacciones entre los componentes.
          </p>
        </div>
        <div className="content-jobs-challenge-description-fourth">
          <p>
            Notarás que la aplicación necesita el desarrollo de un backend como
            de un frontend.
          </p>
          <p>
            Recuerda que el <span>objetivo principal</span> del producto es{" "}
            <span>
              ayudar a los usuarios a encontrar de forma rápida y eficaz un baño
              cercano.
            </span>
          </p>
          <p>
            <span>
              Esperamos que su producto final sea visualmente atractivo y
              funcionalmente efectivo.
            </span>
          </p>
        </div>
        <div className="content-jobs-challenge-description-fifth">
          <p>
            Antes de comenzar, debe consultar los diseños de la app en la página
            "Design".
          </p>
        </div>
      </div>
      <div className="content-jobs-challenge-deliver">
        <div className="content-jobs-challenge-deliver-first">
          <p>
            <span>Entrega</span>
          </p>
          <p>. El proyecto debe ser fácil de enviar.</p>
          <p>. Debe compartirnos el apk correspondiente.</p>
          <p>
            . También debe subirlo a Github para que podamos revisar el código.
          </p>
        </div>
        <div className="content-jobs-challenge-deliver-second">
          <p>
            En caso de tener problemas para generar el apk, simplemente
            compartir el código por Github.
          </p>
        </div>
        <div className="content-jobs-challenge-deliver-third">
          <p>
            Una vez que su código esté listo, envíelo por correo electrónico a
            hi@ache1.com
          </p>
        </div>
      </div>
      <div className="content-jobs-challenge-criteria">
        <p>
          <span>Criterios</span>
        </p>
        <ol>
          <li>
            1.
            <p>
              {" "}
              No hace falta estar logueado para entrar a la aplicación, pero
              deberá loguearse para poder agregar un nuevo baño en el mapa.
            </p>
          </li>
          <li>
            2.
            <p>
              {" "}
              Es necesario generar una API KEY de google maps para poder
              utilizar los mapas. Use la siguiente
              AlzaSyBIUb7j9kBP7Erg_s2dfYcoUx59OEhF6oA
            </p>
          </li>
          <li>
            3.
            <p> Los baños tendrán</p>
          </li>
          <li>
            <p className="item-criteria">-Latitud y Longitud</p>
          </li>
          <li>
            <p className="item-criteria">-Sexo</p>
          </li>
          <li>
            <p className="item-criteria">-Comentarios que dejan los clientes (con o sin fotos)</p>
          </li>
          <li>
          4.
          <p>
             En los comentarios podrás dejar fotos y agregar una calificación
            con estrellas.
          </p>
          </li>
          <li>
          5. 
            <p>
            Se puede agregar un nuevo baño, para hacer esto, deberás estar
            logueado.
            </p>
          </li>
        </ol>
      </div>
      <div className="content-jobs-challenge-technology">
        <div className="content-jobs-challenge-technology-first">
          <p>
            <span>Tecnología</span>
          </p>
          <p>Tiene absoluta libertad en qué tecnología elige trabajar.</p>
          <p>
            Nos gustaría ver como resuelve el desafío, así como qué tecnologías
            considera apropiadas.
          </p>
          <p>
            Queremos ver cómo trabaja y qué tan innovador puede llegar a ser.
          </p>
        </div>
        <div className="content-jobs-challenge-technology-second">
          <p>
            Estas son algunas palabras claves que tendríamos en cuenta para
            hacerlo, pero no es necesario que use ninguna de ellas:
          </p>
          <p>. React Native</p>
          <p>. Ionic</p>
          <p>. Flutter</p>
          <p>. Nest.js</p>
          <p>. Node</p>
        </div>
      </div>
      <div className="content-jobs-challenge-gl">
        <p>
          <span>¡Mucha Suerte!</span>
        </p>
      </div>
    </div>
  );
};
export default RightContentJobs;
