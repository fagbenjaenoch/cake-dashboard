import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

function handleSubmit(e) {
  e.preventDefault()
  onSearch(searchTerm)
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <form onSubmit={handleSubmit} className='flex items-center space-x-2 p-1 mb-4 border-b border-gray-500'>
      <button type='submit'>
        <FaSearch className='text-gray-500 mr-2'/>
      </button>
      <input
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='text-white bg-transparent outline-none w-full'
      />
    </form>
  )
}

export default SearchBar