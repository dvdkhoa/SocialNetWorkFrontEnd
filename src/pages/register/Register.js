import React from 'react'
import Left from './register_components/Left'
import Right from './register_components/Right'

export default function Register() {
    return (
        <div className="gap no-gap signin whitish medium-opacity register">
            <div className="bg-image" style={{ backgroundImage: 'url(images/resources/theme-bg.jpg)' }} />
            <div className="container">
                <div className="row">
                    <Left />
                    <Right />
                </div>
            </div>
        </div>
    )
}
