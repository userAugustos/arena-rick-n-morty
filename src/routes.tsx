import {Routes, Route, useLocation} from "react-router-dom";
import App from "./App.tsx";
import Modal from "./components/modal.tsx";

const base = import.meta.env.VITE_BASE_PATH

export function Router(){
    console.debug(base)
    const location = useLocation();

    const state = location.state as { backgroundLocation?: Location }

    return (
        <>
            <Routes location={state?.backgroundLocation || location}>
                <Route path={`${base}/`} element={<App />} />
            </Routes>
            {/* so with this logic, we show the modal when has a backgroundLocation set, overlying the screen with the modal */}
            {state?.backgroundLocation && (
                <Routes>
                    <Route path={`${base}/character/:id`} element={<Modal />} />
                </Routes>
            )}
        </>
    )
}
