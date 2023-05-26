import {useCallback, useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";

export default function Modal() {
    const location = useLocation()
    const {pathname: path} = location
    // const [isOpen, setIsOpen] = useState(true);

    const dialogRef = useRef<HTMLDialogElement>(null)
    const handleCloseModal = () => {
        dialogRef.current?.close()
        // setIsOpen(false)
    }

    // close the modal on off modal click
    const onClick = useCallback(({target}: any) => {
        const {current: el} = dialogRef;
        if (target === el) handleCloseModal()
    }, [])

    useEffect(() => {
        const dialog = dialogRef.current;
        dialog?.showModal()
        // reset the modal effect
        console.debug(path)
        return () => dialog?.close()
    }, [path])

    return (
        <dialog
            ref={dialogRef}
            onClick={onClick}
        >
            hello
        </dialog>
    )
}
