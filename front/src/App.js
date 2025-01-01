import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Provider } from 'react-redux'
import Store from './redux/store'

import Words from "./pages/Words"
import AddWords from "./pages/AddWords"
import Review from "./pages/Review"
import Reading from "./pages/Reading"


const App = () => {
    return (
        <Provider store={Store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Words />} />
                    <Route path="/add-words" element={<AddWords />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/reading" element={<Reading />} />
                </Routes>
            </Router>
        </Provider>
        
        
    )
}


export default App