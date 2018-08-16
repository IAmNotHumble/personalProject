import React, { Component } from 'react'
import './CSS/Header.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../redux/reducers/user'

import Navbar from './Navbar'

class Header extends Component {


    render() {
        return (
            <div className='header-main'>
                <div className='header-icons-left'>
                    <Navbar />
                    <h1>Logo</h1>
                </div>

                {/* If in desktop view */}
                <div className='header-icons-right'>
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/posts'><button>Posts</button></Link>
                    <Link to='/favorites'><button>Favorites</button></Link>
                    {
                        this.props.user ?
                            <Link to='/'><button onClick={this.props.logout}>Logout</button></Link> :
                            <Link to='/'><button>Login</button></Link>
                    }
                    {
                        this.props.user ?
                            <p>{this.props.user.name}</p> :
                            null
                    }
                </div>

            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps, { logout })(Header)

