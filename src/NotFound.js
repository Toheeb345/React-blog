import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>OH, BOY</h2>
            <p>E be like say you don miss road o!</p>
            <div className="link">
            <Link to="/">Make i carry you go homepage, abeg...</Link>
            </div>
        </div>
    );
}
 
export default NotFound;