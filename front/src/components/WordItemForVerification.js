import React from 'react';

const WordItemForVerification = ({word}) => {
    const handleVerified = () => {
        console.log("handleVerified")
    }
    const handleNotVerified = () => {
        console.log("handleNotVerified")
    }
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card">
                        <h1>{word.corrected_original_word}</h1>
                        <p>{word.english_translation}</p>
                        <p>{word.german_description}</p>
                        <p>Example 1: {word.examples[0]}</p>
                        <p>Example 2: {word.examples[1]}</p>
                        <p>{word.article}</p>
                </div>
                <button class="btn btn-light border-danger w-50" onClick={handleNotVerified}><span className="text-danger">Not Verified</span></button>
                <button class="btn btn-light border-danger w-50" onClick={handleVerified}><span className="text-danger">Verified</span></button>
                
            </div>
            
        </>
    )
}

export default WordItemForVerification