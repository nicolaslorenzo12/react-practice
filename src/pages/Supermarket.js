import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../style/generalstyle.css';

const Supermarket = () => {
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

  const toggleForm = () => {
    setShowForm(!showForm);
    setNewSupermarketName(""); 
    setShowErrorMessage(false); // Reset error message state
  };
  

  const deleteSupermarket = (supermarketId) =>{
      const updatedSupermarkets = supermarkets.filter(supermarket => supermarket.id !== supermarketId);
      setSupermarkets(updatedSupermarkets);
  };

  const handleInputChange = (e) => {
    setNewSupermarketName(e.target.value);
  };

  const changeSupermarketName = (id, e) => {
    const updatedSupermarkets = supermarkets.map(supermarket => {
      if (supermarket.id === id) {
        return { ...supermarket, name: e.target.value };
      }
      return supermarket;
    });
  
    setSupermarkets(updatedSupermarkets);
  };

  const handleAddSupermarket = () => {
    if (newSupermarketName !== "") {
      superMarketIdManager = superMarketIdManager + 1
        const newSupermarket = {
        id: superMarketIdManager,
        name: newSupermarketName
      };
      setSupermarkets([...supermarkets, newSupermarket]);
      setNewSupermarketName(""); // Erase the previous name you added in the input
      setShowForm(false); // Hide the form after adding the new supermarket
      }
      else{
        setShowErrorMessage(true);
      }
  
  };

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
          <SupermarketTable supermarkets={supermarkets} deleteSupermarket={deleteSupermarket} handleUpdate={changeSupermarketName} />
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

// const SupermarketTable = ({ supermarkets, deleteSupermarket,handleInputChange }) => {

//   const [updating, setUpdating] = useState(false);
//   const toggleUpdateState = () => {
//     setUpdating(!updating)
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Supermarket Name</th>
//             <th>Click to delete</th>
//             <th>Click to update</th>
//           </tr>
//         </thead>
//         <tbody>
//           {supermarkets.map(supermarket => (
//             <tr key={supermarket.id}>
//               {/* <td>
//                 <Link to={`/productsofasupermarket/${supermarket.id}`}>
//                   {supermarket.name}
//                 </Link>
//               </td> */}
//               <td>
//                 {updating ? (
//                   <input
//                     type="text"
//                     value={supermarket.name}
//                     onChange={handleInputChange}
//                   />
//                 ) : (
//                   <Link to={`/productsofasupermarket/${supermarket.id}`}>
//                     {supermarket.name}
//                   </Link>
//                 )}
//               </td>
//               <td>
//                 <div id={supermarket.id} className="button-to-delete">
//                     <button onClick={() => deleteSupermarket(supermarket.id)}>delete</button>
//                 </div>
//               </td>

//               <td>
//                 <div id={supermarket.id} className="button-to-delete">
//                     <button onClick={toggleUpdateState}>update</button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

const SupermarketTable = ({ supermarkets, deleteSupermarket, handleUpdate}) => {
  const [idSupermarketToUpdate, setIdSupermarketToUpdate] = useState(null);

  const toggleUpdateState = (supermarketId) => {
    setIdSupermarketToUpdate(idSupermarketToUpdate === supermarketId ? null : supermarketId);
  };

  return (
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
                    value={supermarket.name.value}
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
    </div>
  );
};

export { Supermarket };

