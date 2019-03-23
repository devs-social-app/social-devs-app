import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class OutNavbar extends Component {
  render() {
    return (
        <header class="site-header">
        <nav class="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
            <div class="container">
                <Link class="navbar-brand mr-4" to="/">Snippers</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle"
                    aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarToggle">
                    <div class="navbar-nav mr-auto">
                        <Link class="nav-item nav-link" to="/">Home</Link>
                    </div>
                    <div class="navbar-nav">
                        <Link class="nav-item nav-link" to="/login">Login</Link>
                        <Link class="nav-item nav-link" to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    )
  }
}
