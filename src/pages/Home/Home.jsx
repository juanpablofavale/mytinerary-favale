import LayoutMain from '../LayoutMain/LayoutMain.jsx'
import Article from '../../components/Article/Article.jsx'
import Carousel from '../../components/Carousel/Carousel.jsx'
import { useEffect } from 'react'
import LS from '../../utils/LS.js'
import { useSelector } from 'react-redux'

export default function Home() {
    const {token} = useSelector(store => store.authReducer)
    document.title = "MyTinerary - Home"

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