import React from 'react'

const MovieCard = ({ movie }) => {
    return (
        <div className=''>
            <div className='movie mb-20'>
                <div className='flex justify-center'>
                    <p className='text-2xl'>{movie.Year}</p>
                </div>
                <div className='flex justify-center'>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
                </div>

                <div>
                    <span className='text-xl'>{movie.Type}</span>
                    <h3 className='text-2xl font-medium text-white'>{movie.Title}</h3>
                </div>

            </div>

        </div>
    )
}

export default MovieCard;
