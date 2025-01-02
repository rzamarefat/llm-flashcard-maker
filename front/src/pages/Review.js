import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from "react-redux"
import { setReviewWords, setFocusedReviewWord } from "../redux/actions";
import FlipWordItem from "../components/FlipWordItem";


const Review = () => {
    const dispatch = useDispatch()
    const wordsForReview = useSelector(state => state.wordsForReview)
    

    const handleMissed = () => {
        // dispatch()

    }
    const handleRemember = () => {

    }


    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await fetch("http://localhost:5000/new-words");
                const data = await response.json();
                
                console.log(wordsForReview);
                // console.log("dssadasdadassdadadasdasdasdasdads")
                dispatch(setReviewWords(data.words))
                // dispatch(setFocusedReviewWord(wordsForReview[0]))
                
            } catch (error) {
                console.error("Error fetching words:", error);
            } finally {
                // setLoading(false);
            }
        };

        fetchWords();
        
    }, []);

    return (
        <>
            <Navbar/>
            <div className="row">
                    <div className="col-sm-12">
                        <div className="" style={{ width: '40vw', margin: 'auto', marginTop: '5vh', position: 'relative' }}>
                            {wordsForReview.length > 0 && <FlipWordItem word={wordsForReview[0]} />}
                        </div>
                    </div>
            </div>

            <div className="row my-5">
                <div className="col-sm-6 d-flex justify-content-center align-items-center p-5">
                    <button class="btn btn-light border-danger w-50" onClick={handleMissed}><span className="text-danger display-5">Missed</span></button>
                </div>
                <div className="col-sm-6 d-flex justify-content-center align-items-center p-5">
                    <button class="btn btn-success w-50" onClick={handleRemember}><span className="display-5">Remember</span></button>
                </div>
                
            </div> 
        </>
        
      );
};

export default Review