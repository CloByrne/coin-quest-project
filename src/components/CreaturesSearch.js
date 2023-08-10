import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Creatures.css';

const CreaturesSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [fullData, setFullData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [sortColumn, setSortColumn] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/creatures');
      setFullData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.log('Error fetching creatures:', error);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setFilteredData(fullData);
    } else {
      const filteredResults = fullData.filter(
        (creature) =>
          creature.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          creature.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          creature.currency.toLowerCase().includes(searchQuery.toLowerCase()) ||
          creature.amount.toString().includes(searchQuery.toLowerCase()) ||
          creature.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
          creature.job.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filteredResults);
    }
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const formatAmount = (amount) => {
    return amount.toLocaleString('en-US', { minimumFractionDigits: 2 });
  };

  useEffect(() => {
    const sortData = () => {
      if (filteredData && sortColumn && sortOrder) { // Check if filteredData is not null
        const sortedData = [...filteredData];
        sortedData.sort((a, b) => {
          if (a[sortColumn] < b[sortColumn]) {
            return sortOrder === 'asc' ? -1 : 1;
          } else if (a[sortColumn] > b[sortColumn]) {
            return sortOrder === 'asc' ? 1 : -1;
          } else {
            return 0;
          }
        });
        setFilteredData(sortedData);
      }
    };
    sortData();
  }, [sortColumn, sortOrder, filteredData]);
  
  

  return (
    <div className="creatures-search-container">
      <div className="creatures-search-content">
        <div className="creatures-search-section">
          <div className="creatures-search-input">
            <div className="container-with-h2">
              <h2>Search the Robots</h2>
            </div>
            <div className="search-box">
              <p>Enter numbers or letters in the search box to see the Robot results in the table. E.g. search for the robots in Ireland</p>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchQueryChange}
                placeholder="Enter search query"
              />
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
        <div className="creatures-search-results">
      {filteredData === null ? ( // Check if filteredData is null (loading state)
        <p>Loading...</p>
      ) : filteredData.length === 0 ? ( // Check if filteredData is an empty array (no results)
        <p className="no-results">No results found.</p>
      ) : (
        <table className="creatures-search-table">
              <thead>
                <tr>
                  <th onClick={() => handleSort('id')} className={sortColumn === 'id' ? `th-sort-${sortOrder}` : ''}>
                    <div className="header-container">
                      <span>No.</span>
                      {sortColumn === 'id' && <i className={`fas fa-caret-${sortOrder === 'asc' ? 'up' : 'down'}`} />}
                    </div>
                  </th>
                  <th>Robot</th> {/*"Robots lovingly delivered by Robohash.org*/}
                  <th onClick={() => handleSort('name')} className={sortColumn === 'name' ? `th-sort-${sortOrder}` : ''}>
                  <div className="header-container">
                    <span>Name</span>
                    {sortColumn === 'name' && <i className={`fas fa-caret-${sortOrder === 'asc' ? 'up' : 'down'}`} />}
                    </div>
                  </th>
                  <th onClick={() => handleSort('country')} className={sortColumn === 'country' ? `th-sort-${sortOrder}` : ''}>
                  <div className="header-container">
                  <span>Country</span>
                    {sortColumn === 'country' && <i className={`fas fa-caret-${sortOrder === 'asc' ? 'up' : 'down'}`} />}
                    </div>
                  </th>
                  <th onClick={() => handleSort('currency')} className={sortColumn === 'currency' ? `th-sort-${sortOrder}` : ''}>
                  <div className="header-container">
                  <span>Currency</span>
                    {sortColumn === 'currency' && <i className={`fas fa-caret-${sortOrder === 'asc' ? 'up' : 'down'}`} />}
                    </div>
                  </th>
                  <th onClick={() => handleSort('amount')} className={sortColumn === 'amount' ? `th-sort-${sortOrder}` : ''}>
                  <div className="header-container">
                  <span>Amount Saved</span>
                    {sortColumn === 'amount' && <i className={`fas fa-caret-${sortOrder === 'asc' ? 'up' : 'down'}`} />}
                    </div>
                  </th>
                  <th onClick={() => handleSort('color')} className={sortColumn === 'color' ? `th-sort-${sortOrder}` : ''}>
                  <div className="header-container">
                  <span>Favourite Colour  </span>
                    {sortColumn === 'color' && <i className={`fas fa-caret-${sortOrder === 'asc' ? 'up' : 'down'}`} />}
                    </div>
                  </th>
                  <th onClick={() => handleSort('job')} className={sortColumn === 'job' ? `th-sort-${sortOrder}` : ''}>
                  <div className="header-container">
                  <span>Robot Job  </span>
                    {sortColumn === 'job' && <i className={`fas fa-caret-${sortOrder === 'asc' ? 'up' : 'down'}`} />}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((creature) => (
                  <tr key={creature.id}>
                    <td>{creature.id}</td>
                    <td>
                      <img src={creature.image} alt="Robot" />
                    </td>
                    <td>{creature.name}</td>
                    <td>{creature.country}</td>
                    <td>{creature.currency}</td>
                    <td>{formatAmount(creature.amount)}</td>
                    <td>{creature.color}</td>
                    <td>{creature.job}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreaturesSearch;
