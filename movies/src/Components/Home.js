import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from './banner'
import Navbar from './Navbar'
import Trending from './Trending'

function Home() {
    const history = useNavigate()
    const [data, setData] = useState('')
    useEffect(() => {
        const getData = async () => {
            try {
                const resp = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5f0dbfb5e418d265f02e343bfc57ffe6')
                    .then(res => res.json())
                    .then(set => setData(set.results))
            } catch (error) {
            }
        }
        getData()
    }, [])

   
    const seInfo = (e,one) =>{
        e.preventDefault()
        history('/MovieInfo1', { state: { one } })
    }

    return (
        <div className='home' style={{ fontFamily: 'Times New Roman, serif' }}>
            <Navbar />
            <h1 className='ms-3 text-success text-center' >UpComing Movies ....</h1>
            <Banner />
            <div className='row border-danger ms-2 fs-1 mx-auto text-white text-center'>
                <h1 style={{ fontFamily: 'Times New Roman, serif' }} className='text-danger'>
                    Trending Movies
                </h1>
            </div>
            <Trending />
            {/* <div class="carousel-item active"><img src={'https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'} class="" alt="..." />
            </div><div class="carousel-item"><img src={'https://image.tmdb.org/t/p/original/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg'} class="" alt="..." />
            </div> */}
            <div className='row mx-auto ps-2 pe-2'>
                {
                    data ? data.map(item =>
                        <div className='col-2 p-2 ' key={item.id}>
                            <div className="card bg-dark text-white border-danger" onClick={(e) => seInfo(e,item)}>
                                {/* {console.log(`image.tmdb.org/t/p/original/${item.poster_path}`)} */}
                                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} className="image"/>
                                <div className="card bg-dark">
                                    <p className="card-title text-center text-danger" style={{ textTransform: 'uppercase' }}>{item.title}</p>
                                    <div className='d-flex p-0'>
                                        <p className="card-text">Popularity  {item.popularity}</p>
                                        <p>Release  {item.release_date}</p>
                                    </div>
                                    <div className='row mx-auto text-center'>
                                        <a href="" className="btn btn-primary">Add to Favorite!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : ''
                }
            </div>
        </div>
    )
}

export default Home