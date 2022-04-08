import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const history = useNavigate()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-white bg-dark" style={{ fontFamily: 'Times New Roman, serif' }}>
                <div className="container-fluid">
                    <a className="navbar-brand fs-2 text-danger"  >HDMovies</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                            <li className="nav-item ">
                                <a className="nav-link active text-info" aria-current="page"  style={{ fontFamily: 'Times New Roman, serif' }} onClick={() => history('/')}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-info"  onClick={() => history('/Latest')}>Latest</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-info"   tabIndex="-1" aria-disabled="true" onClick={() => history('/Favorite')}>Favorite </a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search movie" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar