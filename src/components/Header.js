import React, { Component } from 'react'
import './Header.css'
import logo from '../images/teslaLogoSmall.svg'
import MenuList from './Menulist'
import { Link } from 'react-router-dom';


export default class Header extends Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(

        <div className="header"> 
        <div className="header_img">
            <Link to='/'>
            <img src={logo} alt="LOGO" className="img"/>
            </Link>
        </div>
            <div className={this.state.clicked ? 'header__mobile active' : 'header__mobile'}>
            <div className="rsp">

            {MenuList.map ((item, index) => {
                return (
                      <Link to={item.path}>  
                    <div key={index} className={item.cName}>
                        <p>{item.title}</p>
                    </div>
                        </Link>
                )
            })}
            </div>
            <div className="header_right">
                <p>Shop</p>
                <p>Tesla account</p>
                </div>
                </div> 
       
            <div className="menu" onClick={this.handleClick}> 
             <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            
    </div>

        )
    }
}

