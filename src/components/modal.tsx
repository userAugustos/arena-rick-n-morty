import {useCallback, useEffect, useRef} from "react";
import {useParams, useNavigate} from "react-router-dom";
import '../styles/modal.css'

const base = import.meta.env.VITE_BASE_PATH

export default function Modal() {
    const {id} = useParams()
    const navigate = useNavigate()

    const dialogRef = useRef<HTMLDialogElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
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
        // reset the modal effect
        console.debug(id)
        return () => dialog?.close()
    }, [id])

    return (
        <dialog
            ref={dialogRef}
            onClick={onClick}
            // onClose={handleCloseModal}
        >
            <div
                ref={contentRef}
                className="modal-info"
            >
                hello
            </div>
        </dialog>
    )
}
