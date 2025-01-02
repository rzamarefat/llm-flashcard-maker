import { useDispatch, useSelector } from "react-redux"

import Navbar from "../components/Navbar"
import { setContentForReviewWords } from "../redux/actions";

const Reading = () => {
    const dispatch = useDispatch()
    const contentWithReviewWords = useSelector(state => state.contentWithReviewWords)

    const handleGenerate = () => {
        const callGeneration = async () => {
            try {
                const response = await fetch("http://localhost:5000/generate");
                const data = await response.json();
                
                console.log(data);
                // console.log("dssadasdadassdadadasdasdasdasdads")
                dispatch(setContentForReviewWords(data.content))
                
                
            } catch (error) {
                console.error("Error fetching words:", error);
            } finally {
                // setLoading(false);
            }
        };

        callGeneration();
    }
    return (
        <>
            <Navbar/>
            <div className="row d-flex justify-content-center align-items-center">
                {!contentWithReviewWords && <div className="col-12 d-flex justify-content-center align-items-center">
                    <h4>Here you can generate a simple content using for the words reviewed today.</h4>
                </div>}
                {contentWithReviewWords && <div className="col-12 d-flex justify-content-center align-items-center">
                    <p>{contentWithReviewWords}</p>
                </div>}
                <button class="btn btn-dark w-50" onClick={handleGenerate}><span className="display-6">Generate</span></button>
            </div> 
        </>
        
    )
}

export default Reading