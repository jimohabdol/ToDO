import React from 'react'
import { Link} from 'react-router-dom'

function Title() {
    return(
     <div id="titleWrapper">
        <h3 className="textCenter">TO-DO List</h3>
        <Link to='/'>Home</Link>|<Link to='/about'>About</Link>
      </div>
    )
}

export default Title