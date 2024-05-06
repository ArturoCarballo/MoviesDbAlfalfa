import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../routes/constants";

const Header: React.FC = () => {
    const location = useLocation();

    return (
        <nav className="sticky top-0 z-50 bg-blue-950">
            <ul className="flex gap-16 p-4 justify-center text-white text-xl">
                <li className={`hover:text-blue-600 ${location.pathname === ROUTES.HOME ? 'text-blue-400' : ''}`}>
                    <Link to={ROUTES.HOME}>Home</Link>
                </li>
                <li className={`hover:text-blue-600 ${location.pathname === ROUTES.POPULAR ? 'text-blue-400' : ''}`}>
                    <Link to={ROUTES.POPULAR}>Popular</Link>
                </li>
                <li className={`hover:text-blue-600 ${location.pathname === ROUTES.TOPRATED ? 'text-blue-400' : ''}`}>
                    <Link to={ROUTES.TOPRATED}>Top Rated</Link>
                </li>
                <li className={`hover:text-blue-600 ${location.pathname === ROUTES.UPCOMING ? 'text-blue-400' : ''}`}>
                    <Link to={ROUTES.UPCOMING}>Upcoming</Link>
                </li>
                <li className={`hover:text-blue-600 ${location.pathname === ROUTES.FAVORITES ? 'text-blue-400' : ''}`}>
                    <Link to={ROUTES.FAVORITES}>My Favorites</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
