import React, { Component } from 'react'

class Header extends Component {
    render () {
        return (
            <div>
                <header className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div>
                        <a href="https://javaguides.net" className='navbar-brand'>
                            Employee 
                        </a>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;