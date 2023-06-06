import {useState} from "react";
import '../styles/carousel.css'

export interface ResidentsCarousel {
    id: string,
    name: string,
    image: string
}

export function Carousel({data}: { data: ResidentsCarousel[] }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    // const data = data.slice(0, (data.length * 20) / 100);
    const totalSlides = data.length

    const nextSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentSlide((prevIndex) => prevIndex === 0 ? totalSlides - 1 : prevIndex - 1)
    }

    return (
        <div className="carousel">
            <button onClick={prevSlide} className="prev-slide">
                {`${"<"}`}
            </button>
            <div
                className="slides"
                style={{transform: `translateX(-${(currentSlide)}%`}}
            >
                {
                    data.map(data => (
                        <div className="slide" key={data.id}>
                            <img src={data.image} alt={data.name}/>
                        </div>
                    ))
                }
            </div>
            <button onClick={nextSlide} className="next-slide">
                {`${">"}`}
            </button>
        </div>
    )
}
