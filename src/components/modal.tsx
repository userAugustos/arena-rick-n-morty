import {useCallback, useEffect, useRef} from "react";
import {useParams, useNavigate} from "react-router-dom";
import '../styles/modal.css'
import {useQuery} from "urql";
import {getCharacter} from "../utils/queries";
import {Carousel, ResidentsCarousel} from "./carousel";
import {isDescendantChild} from "../utils/descendantChild";
import {Loading} from "./loading.tsx";

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
        console.debug(data?.character)
        // reset the modal effect
        return () => dialog?.close()
    }, [id, data])

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
                    fetching ? <Loading/> :
                        <>
                            <section className={`persona flex ${fetching && "shimmerBG"}`}>
                                <img src={`${data?.character?.image}`} alt=""/>
                                <strong>{data?.character?.name}</strong>
                            </section>
                            <section className={`info flex ${fetching && "shimmerBG"}`}>
                                <strong>
                                    <span>Specie</span>
                                    {data?.character?.species}
                                </strong>
                                <strong>
                                    <span>Status</span>
                                    {data?.character?.status}
                                </strong>
                                <strong>
                                    <span>Gender</span>
                                    {data?.character?.gender}
                                </strong>
                                <strong>
                                    <span>Home Planet</span>
                                    {data?.character?.origin?.name}
                                </strong>
                                <strong>
                                    <span>Last known location</span>
                                    {data?.character?.location?.name}
                                </strong>
                            </section>
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
