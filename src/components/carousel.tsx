import {useState} from "react";
import '../styles/carousel.css'

export interface ResidentsCarousel {
    id: string,
    name: string
}

export function Carousel({data}: { data: ResidentsCarousel[] }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = data.slice(0, (data.length * 20) / 100);
    const totalSlides = slides.length

    const nextSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentSlide((prevIndex) => prevIndex === 0 ? totalSlides - 1 : prevIndex - 1)
    }

    return (
        <div className="carousel">
            <div
                className="current-slide"
                style={{transform: `translateX(${currentSlide * 25}%`}}
            >
                {
                    slides.map(slides => (
                        <div className="slide" key={slides.id}>
                            {slides.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
