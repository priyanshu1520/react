import React from 'react'

function Button({
    children,
    bgColor = 'bg-blue-500',
    textcolor = 'text-white',
    clssName='',
    type = 'button',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textcolor} ${clssName}`}{...props}>
        {children}
    </button>
  )
}

export default Button