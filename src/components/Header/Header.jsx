function Header(props) {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary rounded m-3 p-3">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <i class="bi bi-cup-hot-fill"></i>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto me-5">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Opções
                                    </a>
                                    <ul class="dropdown-menu mb-3">
                                        <li>
                                            <div className="dropdown-item form-check">
                                                <input className="btn-check" type="radio" name="options-base" id="inputRadioOption01" autoComplete="off" defaultChecked
                                                onClick={() => props.updateSelectedPage(0)} />
                                                <label className="btn" htmlFor="inputRadioOption01">
                                                    Café da manhã
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropdown-item form-check">
                                                <input className="btn-check" type="radio" name="options-base" id="inputRadioOption02" autoComplete="off" 
                                                onClick={() => props.updateSelectedPage(1)} />
                                                <label className="btn" htmlFor="inputRadioOption02">
                                                    Pratos principais
                                                </label>        
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropdown-item form-check">
                                                <input className="btn-check" type="radio" name="options-base" id="inputRadioOption03" autoComplete="off" 
                                                onClick={() => props.updateSelectedPage(2)} />
                                                <label className="btn" htmlFor="inputRadioOption03">
                                                    Bebidas
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" action="">
                                <input className="form-control me-2" type="search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header