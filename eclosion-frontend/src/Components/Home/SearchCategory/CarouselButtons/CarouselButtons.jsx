import ButtonCarousel from "./ButtonsCarousel/ButtonCarousel";

const CarouselButtons = () => {

    //const [listaDeCategorias, setListaDeCategorias] = useState([{id: 1, category : 'rios'}, { id : 2, category : 'playas' }])
 
    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="carusel-botones">
                        <ButtonCarousel />
                    </div>
                </div>
            </div> 
        </>       
    )
}

export default CarouselButtons;