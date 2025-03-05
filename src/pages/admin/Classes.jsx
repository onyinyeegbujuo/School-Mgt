import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Classes = () => {
  return (
    <div >
      <div className='mx-5 py-7'>
        <h1 className='text-center text-lg text-primary font-semibold mb-3'>LIST OF SECTIONS, CLASSES AND ARMS</h1>
        <div className='mb-6'>
          <h1 className='text-lg font-semibold text-primary '>SECTIONS</h1>
          <ul>
            <li>CRECHE</li>
            <li>NURSERY</li>
            <li>PRIMARY</li>
            <li>SECONDARY</li>
          </ul>
        </div>

        <div className='mb-6'>
        <h1 className='text-lg font-semibold text-primary'>CLASSES</h1>
        <ul>
          <li>CRECHE</li>
          <li>NURSEY 1</li>
          <li>NURSERY 2</li>
          <li>NURSERY 3</li>
          <li>PRIMARY 1</li>
          <li>PRIMARY 2</li>
          <li>PRIMARY 3</li>
          <li>PRIMARY 4</li>
          <li>PRIMARY 5</li>
          <li>PRIMARY 6</li>
          <li>JSS 1</li>
          <li>JSS 2</li>
          <li>JSS 3</li>
          <li>SS 1</li>
          <li>SS 2</li>
          <li>SS 3</li>
        </ul>
        </div>

        <div>
          <h1 className='text-lg font-semibold text-primary'>ARMS</h1>
          <ul>
            <li>GOLD</li>
            <li>DIAMOND</li>
            <li>SILVER</li>
            <li>BRONZE</li>
          </ul>
        </div>
      </div>

      
    </div>
  )
}

export default Classes