import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'

function MovieInfo1() {
    let data = []
    const location = useLocation()
    data = location.state.one
    console.log(data)
    return (
        <div className='bg-dark vh-100'>
            <Navbar />
            <div className='row justify-content-center'>
                <div className="card seeInfo bg-dark text-white border-danger">
                    <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} className="seeinfoImg" />
                    <div className="card bg-dark">
                        <p className="card-title text-start fs-2 text-danger" style={{ textTransform: 'uppercase' }}>Title : {data.title}</p>
                        <div className='row p-0 fs-5'>
                            <div className='col-6'>
                                <p className="card-text"><span className='text-info'>Popularity :</span> {data.popularity}</p>
                            </div>
                            <div className='col-6'>
                                <p className='ms-5'><span className='ms-3 text-info'>Release :</span> {data.release_date}</p>
                            </div>
                        </div>
                        <p>
                            <span className='text-info fs-6'>OverView</span> : {data.overview}
                        </p>
                        <div className='row mx-auto text-center'>
                            <a href="" className="btn btn-primary">Add to Favorite!</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MovieInfo1