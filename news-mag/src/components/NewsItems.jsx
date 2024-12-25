import PropTypes from 'prop-types';
import image from '../assets/news.jpeg';
console.log(image); // Check if this logs the correct URL


const NewsItems = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
         src={src ? src : image} 

        style={{ height: "200px", width: "360px" }}
        className="card-img-top"
        alt="News item"
      />
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "No Title Available"}
        </h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "No Description Available"}
        </p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

// PropTypes validation (optional but recommended for debugging)
NewsItems.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NewsItems;
