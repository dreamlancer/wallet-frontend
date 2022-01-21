import Navigation from "./components/Navigation/Navigation";
import './style.css'
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation/>
            </BrowserRouter>
        </>
    );
}

export default App;
