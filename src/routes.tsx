import {Routes, Route, useLocation} from "react-router-dom";
import App from "./App.tsx";
import Modal from "./components/modal.tsx";

const base = '/arena-rick-n-morty'

export function Router(){
    const location = useLocation();

    const state = location.state as { backgroundLocation?: Location }

    return (
        <>
            <Routes location={state?.backgroundLocation || location}>
                <Route index element={<App />} />
            </Routes>
            {/* so with this logic, we show the modal when has a backgroundLocation set, overlaping the screen with the modal */}
            {state?.backgroundLocation && (
                <Routes>
                    <Route path={`${base}/character/:id`} element={<Modal />} />
                </Routes>
            )}
        </>
    )
}
