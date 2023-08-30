
import React, { useState } from 'react';
import '../../styles/Results.css'; // Import the CSS file for styling
import ChildSearchForm from './ChildSearchForm';

const Results = ({ diagnosticData }) => {
    const [showSearchForm, setShowSearchForm] = useState(false);
    const [foundChildren, setFoundChildren] = useState([]);
  const [showAllResults, setShowAllResults] = useState(true);
    const toggleSearchForm = () => {
      setShowSearchForm(!showSearchForm);
      setFoundChildren([]); // Clear foundChildren when toggling
    };
    
    const onSearch = (foundChildren) => {
      setFoundChildren(foundChildren);
    };

    const clickAll = ()=> {
      setShowAllResults(true); 
      setShowSearchForm(false);
    }

    return (
      <div className="results-container">
        {showSearchForm ? (
          <ChildSearchForm diagnosticData={diagnosticData} onSearch={onSearch} showAllResults={clickAll} />
        ) : (
          <div>
            <button className="toggle-search-button" onClick={toggleSearchForm}>
              Search Form
            </button>
            {diagnosticData.length > 0 && showAllResults && (
              <div>
                <h2>All Children's Diagnostic Results</h2>
                <table className="diagnostic-table">
                 
                    <div>
                      <table className="diagnostic-table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Reproduce Core</th>
                            <th>Date of achievement captured</th>
                          </tr>
                        </thead>
                        {diagnosticData.map((child) => ( 
                          <tbody key={child.id}>
                          <tr>
                            <td>{child.name}</td>
                            <td>{child.age}</td>
                            <td>{child.core1}</td>
                            <td>{child.dateOfDiagnosis}</td>
                          </tr>
                          </tbody>
                          ))}
                      </table>
                    </div>
                </table>
              </div>
            )}
          </div>
        )}
        {foundChildren.length === 1 && showSearchForm && (
          <div>
          {foundChildren.map((child) => (
            <div key={child.id}>
             <h2>{child.name}'s Diagnostic Results</h2>
              <table className="diagnostic-table">
                 <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Reproduce Core</th>
                    <th>Date of achievement captured</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{child.name}</td>
                    <td>{child.age}</td>
                    <td>{child.core1}</td>
                    <td>{child.dateOfDiagnosis}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )}
          {foundChildren.length >1 && showSearchForm && (
            <div>
              <div>
                <table className="diagnostic-table">
                   <thead>
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Reproduce Core</th>
                      <th>Date of achievement captured</th>
                    </tr>
                  </thead>
                  {foundChildren.map((child) => (
                  <tbody>
                    <tr>
                      <td>{child.name}</td>
                      <td>{child.age}</td>
                      <td>{child.core1}</td>
                      <td>{child.dateOfDiagnosis}</td>
                      </tr>
                      </tbody>
                      ))}
                    </table>
                  </div>
              </div>
            )}
        </div>
      );
    };

    export default Results;