import React from 'react';

const FlipWordItem = ({word}) => {
    return (
        <>
            <div className="flip-card w-100 make-full-h">
                <div className="flip-card-inner">
                    <div className="flip-card-front d-flex justify-content-center align-items-center bg-danger">
                        <h1>{word.word}</h1>
                    </div>
                    <div className="flip-card-back">
                        <h1>{word.word}</h1>
                        <p>{word.english_translation}</p>
                        <p>{word.german_description}</p>
                        <p>Example 1: {word.examples[0]}</p>
                        <p>Example 2: {word.examples[1]}</p>
                        <p>{word.article}</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FlipWordItem