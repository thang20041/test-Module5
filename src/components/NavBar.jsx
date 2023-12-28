import {Link} from "react-router-dom";

export default function NavBar(){
    return (
        <div>
            <h1>
                <Link to={"/products/home"}>Home</Link>|
                <Link to={"/products/add"}>Add</Link>
            </h1>
        </div>

    )
}