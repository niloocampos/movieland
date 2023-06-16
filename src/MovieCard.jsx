import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function MovieCard({ type, title, year, poster }) {
  return (
    <div className="">
      <div className="movie mb-20">
        <div className="flex justify-center">
          <p className="text-2xl">{year}</p>
        </div>
        <div className="flex justify-center">
          <img src={poster !== 'N/A' ? poster : 'https://via.placeholder.com/400'} alt={title} />
        </div>

        <div>
          <span className="text-xl">{type}</span>
          <h3 className="text-2xl font-medium text-white">{title}</h3>
        </div>

      </div>

    </div>
  );
}

MovieCard.defaultProps = {
  type: '',
  year: '',
  poster: '',
  title: '',
};

MovieCard.propTypes = {
  type: PropTypes.string,
  year: PropTypes.string,
  poster: PropTypes.string,
  title: PropTypes.string,
};

export default MovieCard;
