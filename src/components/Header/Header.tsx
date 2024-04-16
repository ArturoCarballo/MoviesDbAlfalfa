import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/constants";


const Header: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={ROUTES.HOME}>Home</Link>
                </li>
                <li>
                    <Link to={ROUTES.POPULAR}>Popular</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Header