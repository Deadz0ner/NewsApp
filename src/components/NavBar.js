import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export class navbar extends Component {
 // static propTypes = {

 // }

  render() {
    return (
        <div class="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid "  >
                    <Link className="navbar-brand" to="/">NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Technology</Link>
                            </li>

                            {/* <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
}

export default navbar

       