import React from 'react'
import './nav.css'
function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#"><p style={{color: "#ffff"}}>Hello</p></a>
      <a class="nav-item nav-link" href="#"><p style={{color: "#ffff"}}>Hello</p></a>
      <a class="nav-item nav-link" href="#"><p style={{color: "#ffff"}}>Hello</p></a>
      <a class="nav-item nav-link disabled" href="#"><p style={{color: "#ffff"}}>Hello</p></a>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav