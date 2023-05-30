import {useCallback, useEffect, useRef} from "react";
import {useParams, useNavigate} from "react-router-dom";
import '../styles/modal.css'
import {useQuery} from "urql";
import {getCharacter} from "../utils/queries.ts";
import {Carousel, ResidentsCarousel} from "./carousel.tsx";
import {isDescendantChild} from "../utils/descendantChild.ts";

const base = import.meta.env.VITE_BASE_PATH

export default function Modal() {
    const {id} = useParams()
    const navigate = useNavigate()

    const dialogRef = useRef<HTMLDialogElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const [{data, fetching, error}] = useQuery({
        query: getCharacter,
        variables: {
            id: id || '',
        }
    })
    const handleCloseModal = () => {
        dialogRef.current?.close()
        navigate(base)
    }

    // close the modal on off modal content click
    const onClick = useCallback(({target}: any) => {
        const {current: el} = contentRef;

        if (!el) {
            // so if we have a error with the parent element, just close the modal, because he doesn't load
            return handleCloseModal()
        }

        if (!isDescendantChild(el, target)) {
            handleCloseModal()
        }
    }, [])

    useEffect(() => {
        const dialog = dialogRef.current;
        dialog?.showModal()
        // reset the modal effect
        return () => dialog?.close()
    }, [id])

    if (error) {
        window.alert(`error ${error?.message}`)
        handleCloseModal()
    }

    return (
        <dialog
            ref={dialogRef}
            onClick={onClick}
            // onClose={handleCloseModal}
            className="modal-info"
        >
            <div
                ref={contentRef}
                className={`modal-grid`}
            >
                {
                    fetching ? <p>fetching</p> :
                        <>
                            <section className="persona">
                                <img src={`${data?.character?.image}`} alt=""/>
                            </section>
                            <section className="info"></section>
                            <footer>
                                <Carousel
                                    data={data?.character?.location?.residents as unknown as ResidentsCarousel[]}/>
                            </footer>
                        </>
                }
            </div>
        </dialog>
    )
}
