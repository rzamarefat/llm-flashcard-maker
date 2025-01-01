import Navbar from "../components/Navbar"
import { useSelector, useDispatch } from "react-redux";
import { addWords } from "../redux/actions";

const AddWords = () => {
    const words = useSelector(state => state.addingWords)
    const dispatch =  useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch("http://localhost:5000/submit-words", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ words }),
        });

        if (response.ok) {
            const data = await response.json();
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
        {/* {message && <div className="mt-3 alert alert-info">{message}</div>} */}
        </div>
        </>
    );
}

export default AddWords