
import CarouselButtons from './CarouselButtons/CarouselButtons';
import CardSearchCategories from './CardSearchCategories/CardSearchCategories';

const SearchCategory = () => {

    //const [cardsList, setCardsList] = useState([dataNews])

    return (
        <>
            <section className="container-fluid pb-4">
                <div className="row">
                    <div className="col">
                        <h2 className="subtitle-site text-center">¿Qué temas te gustaría investigar hoy?</h2>
                    </div>
                </div>
                <CarouselButtons />
                <CardSearchCategories />
                <div id="contentCards"></div>
            </section>
        </>
    )
}

export default SearchCategory;