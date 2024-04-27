import { Link } from "react-router-dom";
import '../style/generalstyle.css';
const Supermarket = () => {
  return (
    <div>
      <h1 className="centered-header">Supermarkets</h1>
      <table>
        <thead>
          <tr>
            <th>Supermarket Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to={`/productsofasupermarket/${1}`}>NicoSupermarket</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to={`/productsofasupermarket/${2}`}>MartijnSupermarket</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to={`/productsofasupermarket/${3}`}>GabySupermarket</Link>
            </td>
          </tr>
        </tbody>
      </table>

      <Link to= "/addsupermarket"className="action-button">
            <button>Add Supermarket</button>
      </Link>
    </div>    
  );
};

export default Supermarket;