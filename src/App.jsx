import React, { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import ResultsTable from "./components/ResultsTable";
import Pagination from "./components/Pagination";
import { fetchCities } from "../services/api";

const App = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCities = async () => {
      setLoading(true);
      const cities = await fetchCities(limit);
      setResults(cities);
      setLoading(false);
    };
    getCities();
  }, [limit]);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    if (!searchQuery) {
      setResults([]);
      return;
    }
    setLoading(true);
    const cities = await fetchCities(limit, searchQuery);
    if (cities.length === 0) {
      setResults([]);
    } else {
      setResults(cities);
    }
    setLoading(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ padding: "20px" }}>
      <SearchBox onSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ResultsTable results={results} query={query} />
      )}
      <Pagination
        totalItems={results.length}
        itemsPerPage={limit}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        setLimit={setLimit}
      />
    </div>
  );
};

export default App;
