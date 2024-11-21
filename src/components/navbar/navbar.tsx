import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-navbar',
  styleUrl: 'navbar.css',
  shadow: true,
})
export class Navbar {
  render() {
    return (
      <nav class="navbar">
        <img src="/assets/image/Vanguard logo.png" alt="Logo" class="navbar-logo" />
      </nav>
    );
  }
}
