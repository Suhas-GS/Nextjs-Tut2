// import React from 'react'
// import Nav from './Nav'

// const Header = (props) => {
//   return (
//     <div className="header-class">
//         This is Header
//         <Nav num={props.num}/>
//     </div>
//   )
// }

// export default Header

//-----------------------------------------------------------------

import React,{useContext} from 'react'
import Nav from './Nav'
import { MyContext } from '@/Helper/Context'

const Header = (props) => {
    const user = useContext(MyContext)
  return (
    <div className="header-class">
        This is Header -- {user}
        <Nav/>
    </div>
  )
}

export default Header
