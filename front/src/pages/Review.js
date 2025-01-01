import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from "react-redux"
import { setNewWords } from "../redux/actions";
import FlipWordItem from "../components/FlipWordItem";
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';


const Review = () => {
    const dispatch = useDispatch()
    const wordsForReview = useSelector(state => state.newWords)

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };


    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await fetch("http://localhost:5000/new-words");
                const data = await response.json();
                console.log(data);
                
                dispatch(setNewWords(data.words))
                
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
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                <Carousel.Caption>
                    <h3 className="primary-text">First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
        
      );
};

export default Review