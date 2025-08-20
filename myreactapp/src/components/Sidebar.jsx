// src/components/Sidebar.jsx
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="w-48 bg-gray-800 p-4 text-gray-200">
            <nav className="space-y-4">
                <Link to="/" className="block hover:text-white">Home</Link>
                <Link to="/about" className="block hover:text-white">About</Link>
                <Link to="/register" className="block hover:text-white">Register</Link>
                <Link to="/contact" className="block hover:text-white">Contact</Link>
            </nav>
        </aside>
    );
}
