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

  const handleInputChange = (e) => {
    setNewSupermarketName(e.target.value);
  };

  const handleAddSupermarket = () => {
    if (newSupermarketName !== "") {
      const newSupermarket = {
        id: supermarkets.length + 1,
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
        <form>
          <input
            type="text"
            value={newSupermarketName}
            onChange={handleInputChange}
          />
          <div className="state-button">
            <button onClick={handleAddSupermarket}>Add Supermarket</button>
          </div>
          <div className="state-button">
            <button onClick={toggleForm}>Cancel</button>
            {showErrorMessage && <p id="new-supermarket-name-null">The name of the supermarket can not be null</p>}
            {/* <p id="new-supermarket-name-null">The name of the supermarket can not be null</p> */}
          </div>
        </form>
      ) : (
        <div>
          <SupermarketTable supermarkets={supermarkets} />
          <div className="state-button">
            <button onClick={toggleForm}>Add Supermarket</button>
          </div>
        </div>
      )}
    </div>
  );
};

const SupermarketTable = ({ supermarkets }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Supermarket Name</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Supermarket };

