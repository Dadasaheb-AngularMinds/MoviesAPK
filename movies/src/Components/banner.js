import React, { useEffect, useState } from 'react'

function Banner() {

    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const data1 = []

    useEffect(() => {
        const getData = async () => {
            try {
                const resp = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=5f0dbfb5e418d265f02e343bfc57ffe6')
                    .then(res => res.json())
                    .then(set => setData(set.results))
            } catch (error) {
            }
        }
        getData()
        // setCount(!count)
    }, [])

    useEffect(() => {
        if (count + 1 == data.length) {
            setCount(0);
        }
        setTimeout(() => setCount((prevCount) => prevCount + 1), 5000);
    }, [count]);

    console.log(data)

    return (
        <>
            {data.length === 0 ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) :
                (
                    <div className='row mx-auto'>
                        <div className="card1 banner-card">
                            <img
                                src={`https://image.tmdb.org/t/p/original${data[count].poster_path}`}
                                alt={data[count].title}
                                className="card-img-top banner-img"
                            />
                            <div className="card-body">
                                <h1 className="card-title banner-title text-dark">{data[count].title}</h1>
                                <p className="card-text banner-text text-muted ">{data[count].overview}</p>
                                <h3 className="card-title banner-release text-danger">Release Date : {data[count].release_date}</h3>
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}

export default Banner