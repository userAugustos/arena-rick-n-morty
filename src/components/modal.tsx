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
        console.debug(target)
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
    }, [id, data])

    return (
        <dialog
            ref={dialogRef}
            onClick={onClick}
            // onClose={handleCloseModal}
            className="modal-info"
        >
            <div
                ref={contentRef}
            >
                hello
            </div>
        </dialog>
    )
}
