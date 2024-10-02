import React from 'react'

export const Button = (props) => {
  return (
    <>
    <button className="text-4xl dark:text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm py-2 px-4">
              {props.children}
     </button>
    </>
  )
}
