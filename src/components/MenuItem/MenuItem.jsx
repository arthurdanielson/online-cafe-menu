function MenuItem(props) {
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img className="card-img-top" src={props.image} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p class="card-text">R$ {props.price}</p>
                        <small className="text-body-secondary">{props.description}</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuItem