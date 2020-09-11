import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//==================USING props object
// const Curso = (props) => (
//   <article className="card">
//     <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
//       <img src={props.image} alt={props.title} />
//     </div>
//     <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
//       <h3 className="center">{props.title}</h3>
//       <div className="s-main-center">
//         <a
//           className="button--ghost-alert button--tiny"
//           href="http://dennisadrian.me"
//         >
//           {`$ ${props.price}`}
//         </a>
//       </div>
//     </div>
//   </article>
// );

//===================USING specific attributes
const CourseCard = ({ id, image, title, price }) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`/cursos/${id}`}>
        <img src={image} alt={title} />
      </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{title}</h3>
      <div className="s-main-center">
        <a
          className="button--ghost-alert button--tiny"
          href="http://dennisadrian.me"
        >
          {`$ ${price} USD`}
        </a>
      </div>
    </div>
  </article>
);

CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};
CourseCard.defaultProps = {
  title: 'No se encontró título',
  image:
    'https://images.pexels.com/photos/4406222/pexels-photo-4406222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  price: '--',
};

export default CourseCard;
