// import React from 'react'

// const Nav = (props) => {
//   return (
//     <div className="nav-class">
//         This is Nav {props.num}
//     </div>
//   )
// }

// export default Nav

// -------------------------------------------------------------

import { MyContext } from '@/Helper/Context'
import React,{useContext} from 'react'

const Nav = () => {
    const user = useContext(MyContext)
  return (
    <div className="nav-class">
        This is Nav --  {user}
    </div>
  )
}

export default Nav
