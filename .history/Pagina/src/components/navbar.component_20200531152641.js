import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticatorComponent from './Authenticator.component';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Tararin</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Products</Link>
          </li>
          <li className="navbar-item">
          <AuthenticatorComponent>
          <Link to="/create" className="nav-link">Add Product </Link>
          </AuthenticatorComponent>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}