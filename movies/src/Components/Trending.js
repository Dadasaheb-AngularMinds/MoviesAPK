import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Trending() {

    const history = useNavigate()
    const [data, setData] = useState('')
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
    }, [])

    //------------------------------------For Pagination -------------------------------------//.
    const [currentPage, setCurrentPage] = useState(1)
        const [itemPerPage, setItemPerPage] = useState(4)
    const [pageNumberLimit, setPageLimit] = useState(5)
    const [maxPageLimit, setMaxLimit] = useState(5)
    const [minPageLimit, setMinLimit] = useState(0)
    const [searchText, setSearchText] = useState('')
    const renderData = (data) => {
        return (
            <div className='row'>
                {
                    data ? data.map((one, index) =>
                        <React.Fragment key={index} >
                            {console.log(one)}
                            <div className="col-md-3 upcomingHover" key={index} onClick={(e)=> seeInfo(e,one) }>
                                <div className='' id='colors' style={{ boxShadow: '5px 4px 4px  grey' }}>
                                    <img src={`https://image.tmdb.org/t/p/original/${one.poster_path}`} className="trendImage" alt="..." />
                                    <p className='text-info'><span className='text-danger'>Title : </span>{one.title}</p>
                                    <p><i className="fa fa-inr"></i><span className='text-danger'>Release Date :</span> {one.release_date}</p>
                                </div>
                                <br />
                            </div>
                        </React.Fragment>
                    ) : ''
                }
            </div >
        )
    }
    

const seeInfo = (e,one) => {
    e.preventDefault();
    console.log(one)
    history('/MovieInfo1',{state:{one}})
}
    const pages = []
    const handleClick = (event) => {
        console.log(event.target.id);
        setCurrentPage(Number(event.target.id))
    }
    for (let i = 1; i <= Math.ceil(data.length / itemPerPage); i++) {
        pages.push(i)
    }
    const indexOfLastItem = currentPage * itemPerPage
    const indexOfFirstItem = indexOfLastItem - itemPerPage
    const currentItem = data ? data.slice(indexOfFirstItem, indexOfLastItem) : []

    const handlePrevBtn = (e) => {
        if (currentPage === pages[0]) {
            return
        }
        setCurrentPage(currentPage - 1)
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxLimit(maxPageLimit - pageNumberLimit)
            setMinLimit(minPageLimit - pageNumberLimit)
        }
    }
    const handleNextBtn = () => {
        if ((currentPage === pages.length)) {
            return
        }
        setCurrentPage(currentPage + 1)
        if (currentPage + 1 > maxPageLimit) {
            setMaxLimit(maxPageLimit + pageNumberLimit)
            setMinLimit(minPageLimit + pageNumberLimit)
        }
    }

    const renderPageNumbers = pages ? pages.map((number, index) => {
        if (number < maxPageLimit + 1 && number > minPageLimit) {
            return (
                <li key={index} className={currentPage == number ? "page-item active" : "page-item"} onClick={handleClick}><a className="page-link" id={number} onClick={handleClick}>{number}</a></li>
            )
        }
        else
            return null
    }) : ''
    const setItemsPerPage = (e) => {
        setItemPerPage(Number(e))
        localStorage.setItem('itemsperPage', JSON.stringify(Number(e)))
    }
    //--------------------------------------------End Pagination ---------------------------------//

    return (
        <>
        {/* <div className='text-white'>
            {renderData(currentItem)}
            <div className="col-sm-8 ">
                <ul className="pagination">
                    <li className="page-item bg-light pt-1">
                        <button className={(currentPage !== pages[0]) ? 'show' : 'hideBtn'} onClick={handlePrevBtn} disabled={currentPage === pages[0] ? true : false}>Prev</button>
                    </li>
                    {renderPageNumbers}
                    <li className="page-item bg-light pt-1">
                        <button className={(currentPage !== pages.length) ? 'show' : 'hideBtn'} onClick={handleNextBtn} disabled={currentPage === pages.length ? true : false}>Next</button>
                    </li>
                </ul>
            </div>
        </div> */}
            <div className='row text-white'>
                <div className='col-1 text-center' style={{paddingTop:'200px'}}>
                    <a className="page-item bg-light pt-1  fs-1">
                        <div className={(currentPage !== pages[0]) ? 'show' : 'hideBtn'} onClick={handlePrevBtn} disabled={currentPage === pages[0] ? true : false}> {'<'} </div>
                    </a>
                </div>
                <div className='col-10'>
                    {renderData(currentItem)}
                </div>
                <div className='col-1 text-center' style={{ paddingTop: '200px' }}>
                    <a className="page-item bg-light pt-1 fs-1">
                        <div className={(currentPage !== pages.length) ? 'show' : 'hideBtn'} onClick={handleNextBtn} disabled={currentPage === pages.length ? true : false}>{'>'}</div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Trending