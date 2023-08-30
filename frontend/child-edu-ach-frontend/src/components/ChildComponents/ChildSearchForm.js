import React, { useState } from 'react';
import '../../styles/ChildSearchForm.css';
import Button from '../Util/Button';

const ChildSearchForm = ({ diagnosticData, onSearch, showAllResults}) => {
  const [searchId, setSearchId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchAge, setSearchAge] = useState('');
  const [searchScore, setSearchScore] = useState('');

  const handleSearch = () => {
    const filteredData = diagnosticData.filter((data) => {
      const matchesId = searchId === '' || data.id === parseInt(searchId);
      const matchesName = searchName === '' || data.name.toLowerCase().includes(searchName.toLowerCase());
      const matchesAge = searchAge === '' || data.age.toString() === searchAge;
      const matchesScore = searchScore === '' || data.achivementScore.toString() === searchScore;

      return matchesId && matchesName && matchesAge && matchesScore;
    });

    onSearch(filteredData);
  };

  const handleClickAll = ()=> {
    showAllResults()
  }
  return (
    <div className="search-form-container">
      <h2 className="search-form-header">Search Children</h2>
      <div className="form-group">
        <label className="form-label">Search by ID</label>
        <input
          className="form-input"
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Search by Name</label>
        <input
          className="form-input"
          type="text"
          placeholder="Search by Name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Search by Age</label>
        <input
          className="form-input"
          type="text"
          placeholder="Search by Age"
          value={searchAge}
          onChange={(e) => setSearchAge(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Search by Achievement Score</label>
        <input
          className="form-input"
          type="text"
          placeholder="Search by Achievement Score"
          value={searchScore}
          onChange={(e) => setSearchScore(e.target.value)}
        />
      </div>
      <Button  text="Search" type="primary" onClick={()=>handleSearch()}/>
      <Button  text="show all" type="primary" onClick={()=>handleClickAll()}/>
    </div>
  );
};

export default ChildSearchForm;
