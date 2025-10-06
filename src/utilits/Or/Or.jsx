import React from 'react'

const Or = ({ css }) => {
  console.log(css)

  return (
    <div className={`flex items-center ${css}`}>
      <div className="flex-grow border-t border-teal-300"></div>
      <span className="px-4 primary-text font-semibold">or</span>
      <div className="flex-grow border-t border-teal-300"></div>
    </div>
  )
}

export default Or
