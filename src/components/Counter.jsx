import React from 'react'
import { useCountStore } from '../store/countStore'

function Counter() {
  const { count, incCount, decCount, isEven } = useCountStore();
  const even = isEven();


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className='border-2 border-white p-8 rounded-lg shadow-lg bg-gray-800'>

      <h1 className="text-3xl font-semibold mb-6">Count: {count}</h1>
      <div className="space-x-4">
        <button 
          onClick={incCount} 
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200"
        >
          Increment
        </button>
        <button 
          onClick={decCount} 
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition duration-200"
        >
          Decrement
        </button>

        <h1> {even ? "true" : "false"} </h1>
      </div>
      </div>

    </div>
  )
}

export default Counter
