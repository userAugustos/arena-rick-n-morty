import {useCallback, useEffect, useRef} from "react";
import {useParams, useNavigate} from "react-router-dom";
import '../styles/modal.css'
import {useQuery} from "urql";
import {getCharacter} from "../queries.ts";

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
        if (target !== el) {
            handleCloseModal()
        }
    }, [])

    useEffect(() => {
        const dialog = dialogRef.current;
        dialog?.showModal()
        console.debug(data?.character)
        // reset the modal effect
        return () => dialog?.close()
    }, [id])

    if (error) {
        window.alert(`error ${error.message}`)
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
                className="modal-grid"
            >
                <section className="persona">
                    <img src={`${data?.character?.image}`} alt=""/>
                </section>
                <section className="info"></section>
                <footer></footer>
            </div>
        </dialog>
    )
}
