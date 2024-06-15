import React from 'react'
import ReactDOM from 'react-dom/client'
import  App from './App'
function MyApp(){
  return (  
    <div>
      <h1>hello</h1>
    </div>
  )
}


// const reactelement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank',
//   },
//   children: 'click me to go to google'
// }


const anotheruser="priyanshu"
const reactelement=React.createElement(
  'a',
  {href:'https://www.google.com',target:'_blank'},
  'click me to go to google',
   anotheruser
)



const anotherElement = (
  <a href="https://www.google.com" target='_blank'>visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactelement
)
