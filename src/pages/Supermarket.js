// import { Link } from "react-router-dom";
// import '../style/generalstyle.css';
// const Supermarket = () => {
//   return (
//     <div>
//       <h1 className="centered-header">Supermarkets</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Supermarket Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <Link to={`/productsofasupermarket/${1}`}>NicoSupermarket</Link>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <Link to={`/productsofasupermarket/${2}`}>MartijnSupermarket</Link>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <Link to={`/productsofasupermarket/${3}`}>GabySupermarket</Link>
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       <Link to= "/addsupermarket"className="action-button">
//             <button>Add Supermarket</button>
//       </Link>
//     </div>    
//   );
// };

// export default Supermarket;




// import React from "react";
// import { Link } from "react-router-dom";
// import '../style/generalstyle.css';

// const Supermarket = () => {
//   return (
//     <div>
//       <h1 className="centered-header">Supermarkets</h1>
//       <Link to="/addsupermarket" className="action-button">
//       </Link>
//     </div>    
//   );
// };

// // Define the SupermarketTable component
// const SupermarketTable = () => {
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Supermarket Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <Link to={`/productsofasupermarket/${1}`}>NicoSupermarket</Link>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <Link to={`/productsofasupermarket/${2}`}>MartijnSupermarket</Link>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <Link to={`/productsofasupermarket/${3}`}>GabySupermarket</Link>
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       <Link className="add-or-delete-button">
//           <button className="action-button">Add Supermarket</button>
//       </Link>
//     </div>
    
//   );
// };

// export { Supermarket, SupermarketTable }





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

const SupermarketManagement = () => {
  let superMarketIdManager = 3;
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

  const handleAddSupermarket = () => {
    if (newSupermarketName !== "") {
      superMarketIdManager = superMarketIdManager + 1
        const newSupermarket = {
        id: superMarketIdManager + 1,
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
          <SupermarketTable supermarkets={supermarkets} deleteSupermarket={deleteSupermarket} />
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

const SupermarketTable = ({ supermarkets, deleteSupermarket }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Supermarket Name</th>
            <th>Click to delete</th>
          </tr>
        </thead>
        <tbody>
          {supermarkets.map(supermarket => (
            <tr key={supermarket.id}>
              <td>
                <Link to={`/productsofasupermarket/${supermarket.id}`}>
                  {supermarket.name}
                </Link>
              </td>
              <td>
                <div id={supermarket.id} className="button-to-delete">
                    <button onClick={() => deleteSupermarket(supermarket.id)}>delete</button>
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

