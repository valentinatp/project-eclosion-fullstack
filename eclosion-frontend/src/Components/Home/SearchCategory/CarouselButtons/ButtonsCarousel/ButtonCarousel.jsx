import dataNews from '../../../../../data/data'
import CardSearchCategories from '../../CardSearchCategories/CardSearchCategories';

const ButtonCarousel = () => {
    const handleClick = (e) => {
        let categoryNews = e.target.textContent;
        
        if (categoryNews == 'playas') {
            console.log(document.querySelector('#playas').style = 'display: flex')
        } else if (categoryNews == 'oceanos') {
            console.log(document.querySelector('#oceanos').style = 'display: flex')
        }
    }
    return (
        dataNews.map((newsItem) => (
            <button key={newsItem.id} className="btn btn-secondary" onClick={handleClick}>{ newsItem.category }</button>
        ))
    )
}

export default ButtonCarousel;