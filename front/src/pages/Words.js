import React, { useState } from "react";
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from "react-redux"
import WordItem from '../components/WordItem'
import Pagination from "../components/Pagination";

const Words = () => {
    const words = useSelector(state => state.words)
    const itemsPerPage =10
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(words.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentWords = words.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
        <Navbar/>
        <div className="container mt-4">
      <div className="row">
        {currentWords.map((word, index) => (
          <WordItem key={index} word={word} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
        </>
        
    );
};

export default Words