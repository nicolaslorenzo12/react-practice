import React, { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import '../style/generalstyle.css';

const SupermarketsInformation = () => {
  return (
    <div>
      <h1 className="centered-header">Supermarkets</h1>
      <SupermarketManagement />
    </div>    
  );
};

let superMarketIdManager = 3;

const SupermarketManagement = () => {

  const [showForm, setShowForm] = useState(false);

  const [supermarkets, setSupermarkets] = useState([
    { id: 1, name: "NicoSupermarket" },
    { id: 2, name: "MartijnSupermarket" },
    { id: 3, name: "GabySupermarket" }
  ]);

  const [newSupermarketName, setNewSupermarketName] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [idSupermarketToUpdate, setIdSupermarketToUpdate] = useState(null);

  const toggleForm = useCallback(() => {
    setShowForm(prevState => !prevState);
    setNewSupermarketName(""); 
    setShowErrorMessage(false); // Reset error message state
  }, []);

  const deleteSupermarket = useCallback((supermarketId) => {
    setSupermarkets(prevSupermarkets => prevSupermarkets.filter(supermarket => supermarket.id !== supermarketId));
  }, []);

  const handleInputChange = useCallback((e) => {
    setNewSupermarketName(e.target.value);
  }, []);

  const changeSupermarketName = useCallback((id, e) => {
    setSupermarkets(prevSupermarkets => prevSupermarkets.map(supermarket => {
      if (supermarket.id === id) {
        return { ...supermarket, name: e.target.value };
      }
      return supermarket;
    }));
  }, []);

  const handleAddSupermarket = useCallback(() => {
    if (newSupermarketName !== "") {
      superMarketIdManager = superMarketIdManager + 1
      const newSupermarket = {
        id: superMarketIdManager,
        name: newSupermarketName
      };
      setSupermarkets(prevSupermarkets => [...prevSupermarkets, newSupermarket]);
      setNewSupermarketName(""); // Erase the previous name you added in the input
      setShowForm(false); // Hide the form after adding the new supermarket
    } else {
      setShowErrorMessage(true);
    }
  }, [newSupermarketName]);

  const toggleUpdateState = useCallback((supermarketId) => {
    console.log("ksdjfklasdfklja")
    setIdSupermarketToUpdate(prevId => prevId === supermarketId ? null : supermarketId);
  }, []);

  // Memoize the supermarkets array so the SupermarketTable is not re-rendered if the prop does not change
  const memoizedSupermarkets = useMemo(() => supermarkets, [supermarkets]);

  return (
    <SupermarketTable supermarkets={memoizedSupermarkets} deleteSupermarket={deleteSupermarket} handleUpdate={changeSupermarketName}
                            toggleUpdateState={toggleUpdateState} idSupermarketToUpdate={idSupermarketToUpdate}
                            newSupermarketName={newSupermarketName} handleInputChange={handleInputChange}
                            handleAddSupermarket={handleAddSupermarket} toggleForm={toggleForm}
                            showErrorMessage={showErrorMessage} showForm={showForm} />
  );
};

const SupermarketTable = ({ supermarkets, deleteSupermarket, handleUpdate, toggleUpdateState, idSupermarketToUpdate , newSupermarketName,
                            handleInputChange, handleAddSupermarket, toggleForm, showErrorMessage, showForm}) =>{
  return (
    <div>
      {showForm ? (
        <div>
          <input
            type="text"
            value={newSupermarketName}
            onChange={handleInputChange}
          />
          <div className="state-button">
            <button onClick={handleAddSupermarket}>Add Supermarket</button>
          </div>
          <div className="state-button">
            <button type="button" onClick={toggleForm}>Cancel</button>
            {showErrorMessage && <p id="new-supermarket-name-null">The name of the supermarket can not be null</p>}
          </div>
        </div>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Supermarket Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {supermarkets.map(supermarket => (
                <tr key={supermarket.id}>
                  <td>
                    {idSupermarketToUpdate === supermarket.id ? (
                      <input
                        type="text"
                        value={supermarket.name}
                        onChange={(e) => handleUpdate(supermarket.id, e)}
                      />
                    ) : (
                      <Link to={`/productsofasupermarket/${supermarket.id}`}>
                        {supermarket.name}
                      </Link>
                    )}
                  </td>
                  <td>
                    <div className="button-actions">
                      <button id={supermarket.id} onClick={() => deleteSupermarket(supermarket.id)}>Delete</button>
                      <button id={supermarket.id} onClick={() => toggleUpdateState(supermarket.id)}>Update</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="state-button">
            <button onClick={toggleForm}>Add Supermarket</button>
          </div>
          <div>
          </div>
        </div>
      )}
    </div>
  );
  
};

export { SupermarketsInformation };