import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
    <div className="text-lg font-bold">Spam Finder</div>
    <div className="space-x-4">
        <Link to={'/'}>
            <p className="hover:text-gray-300">Home</p>
        </Link>
        <Link to={'/create'}>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition duration-200">
                Create Contact
            </button>
        </Link>
    </div>
</nav>
  )
}

export default Header