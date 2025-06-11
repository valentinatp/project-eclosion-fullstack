import { Link } from 'react-router-dom';


const CardsNews = () => {
    return (
        <>
            {/* Primer carrusel */}
            <section className="container-fluid cards-visibility-mobile">
                {/* CAROUSEL MOBILE */}
                <div className=" container container-cards-visibility-mobile">
                    <div className="row">
                        <div className="col">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                                </div>
                                {/* CARDS MOBILE*/}
                                <div className="carousel-inner mt-3">
                                    <div className="carousel-item active">
                                        <div className="container-cards-home card">
                                            <img src="https://cientificosdelabasura.ucn.cl/wp-content/uploads/2025/02/Image-3-768x509.jpg"
                                                className="card-image" alt="..."
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    ¿De dónde vienen las botellas plásticas encontradas en las
                                                    playas del océano Pacífico?
                                                </h5>
                                                <p className="card-text">
                                                    El 59% de las botellas recolectadas tienen origen local,
                                                    lo que subraya la urgencia de reducir plásticos
                                                    desechables y fomentar el uso de envases retornables
                                                    estandarizados...
                                                </p>
                                                <Link className="btn btn-primary" to="/feed"> Link Noticia </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="container-cards-home card">
                                            <img
                                                src="https://cientificosdelabasura.ucn.cl/wp-content/uploads/2023/02/WhatsApp-Image-2022-07-25-at-12.21.48-PM.jpeg"
                                                className="card-image"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Primer streaming público y gratuito de imágenes submarinas
                                                    de Chile transmitirá desde Coquimbo
                                                </h5>
                                                <p className="card-text">
                                                    Chile tiene una de las costas más largas del mundo, con
                                                    fauna marina diversa y endémica. Ahora se puede ver la
                                                    vida submarina desde cualquier lugar gracias a una cámara
                                                    en el fondo de Coquimbo...
                                                </p>
                                                <Link className="btn btn-primary" to="/feed"> Link Noticia </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="container-cards-home card">
                                            <img
                                                src="https://services.meteored.com/img/article/las-basuras-de-las-playas-298581-7.jpeg"
                                                className="card-image"
                                                alt="..."
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-justify">
                                                    Basura en la playa: Publican resultados de investigación
                                                    de ciencia ciudadana que abarcó 12.000 km de la costa este
                                                    del Pacífico
                                                </h5>
                                                <p className="card-text">
                                                    El estudio determinó que la basura marina en la costa este
                                                    del Pacífico es principalmente de origen local y
                                                    contribuye con una primera base...
                                                </p>
                                                <Link className="btn btn-primary" to="/feed"> Link Noticia </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* BUTTONS NAVIGATION SLIDER*/}
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CAROUSEL TABLET */}
                <div className="container-cards-visibility-tablet">
                    {/* Card 1 */}
                    <div className="row">
                        <div className="col">
                            <div className="container-cards">
                                <div className="container-cards-home card">
                                    <img
                                        src="https://cientificosdelabasura.ucn.cl/wp-content/uploads/2025/02/Image-3-768x509.jpg"
                                        className="card-image"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            ¿De dónde vienen las botellas plásticas encontradas en las
                                            playas del océano Pacífico?
                                        </h5>
                                        <p className="card-text">
                                            El 59% de las botellas recolectadas tienen origen local, lo
                                            que subraya la urgencia de reducir el uso de plásticos desechables...
                                        </p>
                                        <Link className="btn btn-primary" to="/feed"> Link Noticia </Link>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="container-cards-home card">
                                    <img
                                        src="https://cientificosdelabasura.ucn.cl/wp-content/uploads/2023/02/WhatsApp-Image-2022-07-25-at-12.21.48-PM.jpeg"
                                        className="card-image"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Primer streaming público y gratuito de imágenes submarinas de
                                            Chile transmitirá desde Coquimbo
                                        </h5>
                                        <p className="card-text">
                                            Chile tiene una de las costas más largas del mundo, con fauna
                                            marina diversa y endémica. Ahora se puede ver la vida...
                                        </p>
                                        <Link className="btn btn-primary" to="/feed"> Link Noticia </Link>
                                    </div>
                                </div>
                                {/* Card 3 */}
                                <div className="container-cards-home card">
                                    <img
                                        src="https://services.meteored.com/img/article/las-basuras-de-las-playas-298581-7.jpeg"
                                        className="card-image"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Basura en la playa: Publican resultados de investigación 
                                            que abarcó 12.000 km de la costa este del Pacífico
                                        </h5>
                                        <p className="card-text">
                                            El estudio determinó que la basura en la costa este del
                                            Pacífico es principalmente de origen local...
                                        </p>
                                        <Link className="btn btn-primary" to="/feed"> Link Noticia </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid p-0">
                {/* CAROUSEL DESKTOP */}
                <div className="container-cards-visibility-desktop">
                    {/* CAROUSEL DESKTOP */}
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                        </div>
                        <div id="carouselDesktop" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src="./src/assets/Pictures/fotouno.jpg"
                                        className="d-block w-100"
                                        alt="card1"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>
                                            ¿De dónde vienen las botellas plásticas encontradas en las
                                            playas del océano Pacífico?
                                        </h5>
                                        <p>
                                            El 59% de las botellas recolectadas tienen origen local, lo
                                            que subraya la urgencia...
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="./src/assets/Pictures/fotodos.jpeg"
                                        className="img-desktop"
                                        alt="card2"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>
                                            Primer streaming público y gratuito de imágenes submarinas de
                                            Chile transmitirá desde Coquimbo
                                        </h5>
                                        <p>
                                            Chile tiene una de las costas más largas del mundo, con fauna
                                            marina diversa...
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="./src/assets/pictures/fototres.jpeg"
                                        className="img-desktop"
                                        alt="card3"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>
                                            Basura en la playa: Publican resultados de investigación
                                            que abarcó 12.000 km de la costa este del Pacífico
                                        </h5>
                                        <p>
                                            El estudio determinó que la basura marina en la costa este del
                                            Pacífico es principalmente de origen local y contribuye con...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselDesktop"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselDesktop"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Fin Carrusel Desktop */}
            </section>
        </>

    )
}

export default CardsNews












