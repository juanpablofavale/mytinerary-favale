import LayoutMain from '../LayoutMain/LayoutMain.jsx'
import Article from '../../components/Article/Article.jsx'
import Anchor from '../../components/Anchor/Anchor.jsx'
import './home.css'
import Carousel from '../../components/Carousel/Carousel.jsx'

export default function Home() {
    return (
        <LayoutMain>
            <main>
                <section className='hero'>
                    <Article title='Find your perfect destination' desc='Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.'/>
                    <img className='hero-img' src="../cataratas.jpg" alt="cataratas" />
                </section>
                <section className='carr'>
                    <article>
                        <h2>Popular Mytineraries</h2>
                        <Carousel />
                    </article>
                </section>
            </main>
        </LayoutMain>
    )
}