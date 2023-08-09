import LayoutMain from '../LayoutMain/LayoutMain.jsx'
import Article from '../../components/Article/Article.jsx'
import './home.css'
import Carousel from '../../components/Carousel/Carousel.jsx'

export default function Home() {
    return (
        <main>
            <section className='hero'>
                <Article title='Find your perfect destination' desc='Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.'/>
            </section>
            <section className='car'>
                <article>
                    <h2>Popular Mytineraries</h2>
                    <Carousel />
                </article>
            </section>
        </main>
    )
}