import {useState} from "react";
import '../styles/carousel.css'

export interface ResidentsCarousel {
    id: string,
    name: string,
    image: string
}

export function Carousel({data}: { data: ResidentsCarousel[] }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const characters = data.slice(0, (data.length * 20) / 100);
    const totalSlides = characters.length

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
                style={{transform: `translateX(-${(currentSlide * 25)}%`}}
            >
                {
                    characters.map(character => (
                        <div className="slide" key={character.id}>
                            <img src={character.image} alt={character.name}/>
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
