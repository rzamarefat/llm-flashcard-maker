import Navbar from "../components/Navbar"
import { useSelector, useDispatch } from "react-redux";
import { addWords, setWordsForVerification } from "../redux/actions";
import WordItemForVerification from '../components/WordItemForVerification'

const AddWords = () => {
    const words = useSelector(state => state.addingWords)
    const wordsForVerification = useSelector(state => state.wordsForVerification)

    const dispatch =  useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch("http://localhost:5000/submit-new-words", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ words }),
        });

        if (response.ok) {
            const data = await response.json();
            dispatch(setWordsForVerification(data.words))
            // setMessage(`Success: ${data.message}`);
        } else {
            const error = await response.json();
            // setMessage(`Error: ${error.message}`);
        }
        } catch (err) {
        // setMessage(`Error: ${err.message}`);
        }

        dispatch(addWords(""));
    };

    return (
        <>
            <Navbar/>
            <div className="container mt-5">
            {wordsForVerification.length == 0 && 
                <>
                    <h1 className="text-center">Submit a Word</h1>
                    <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-3">
                    <label htmlFor="word" className="form-label">
                        Word
                    </label>
                    <input
                        type="text"
                        id="word"
                        className="form-control"
                        value={words}
                        onChange={(e) => dispatch(addWords(e.target.value))}
                        required
                    />
                    </div>
                    <button type="submit" className="btn btn-dark btn-block">
                    Submit
                    </button>
                    </form>
                </>
                }

            {wordsForVerification.length > 0 && 
            <>
                {wordsForVerification.map(word => (
                    <WordItemForVerification word={word}/>
                ))}
            </>
            }
            
            {/* {message && <div className="mt-3 alert alert-info">{message}</div>} */}
            </div>
        </>
    );
}

export default AddWords