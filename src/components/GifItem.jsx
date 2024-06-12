import PropTypes from "prop-types";

export const GifItem = ({ title , url }) => {

  

  return (
    <div className="card">
      <img src={ url } alt={ title } />
      <p className="poppins-regular"> {title} </p>
    </div>
  )
}

GifItem.prototype = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

