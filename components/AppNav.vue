<template>
  <nav class="navbar navbar-expand-lg navigation-wrap">
  <div class="container">
    <a class="navbar-brand" href="#">KGI<span>Gujarat</span></a>
    <button class="navbar-toggler mobile-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <!-- <span class="navbar-toggler-icon"></span> -->
      <i class="fas fa-stream navbar-toggler-icon"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="#services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#gallery">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact Us</a>
        </li>
        <li class="nav-item">
          <button class="main-btn">
            <i class="fas fa-phone"></i>
            <span>+91-9687522200</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<style scoped>

  .navigation-wrap{
    background-color:rgba(0,0,0, 0.5);
    position: fixed;
    width: 100%;
    left: 0;
    z-index: 1000;
    -webkit-transition: all 0.3s ease-out;;
    transition: all 0.3s ease-out;
    height: 3.5rem;
  }

  .navigation-wrap .nav-item{
    align-content: center;
    align-items: center;
    padding: 0, 0.625rem;
    text-align: center;
    transition: all 0.3s linear;
  }

  .navbar-toggler:focus{
    outline: unset;
    border: unset;
    box-shadow: none;
  }

  .nav-link{
    font-size: 0.9375rem;
    font-weight: 600;
    text-transform: capitalize;
    color: white;
    letter-spacing: 1px;
  }

  .nav-link:hover,
  .nav-link.active{
    color:yellow;
  }

  .navigation-wrap .main-btn{
    padding: 0.3125rem 1.4375rem;
    box-shadow: none;
    margin-left: 0.625rem;
    background-color: yellow;
    font-weight: 700;
  }

  /* .navigation-wrap.scroll-on{
    position: fixed;
    background-color: white;
    top: 0;
    left:0;
    width: 100%;
    box-shadow: 0 0.125rem 1.75rem 0 rgb(0, 0, 0, 0.9);
    transition: all 0.15s ease-in-out 0s;
  }
 */
  /* .navigation-wrap.scroll-on .nav-link{
    color: yellow;
  }

  .navigation-wrap.scroll-on .nav-link:hover,
  .navigation-wrap.scroll-on .nav-link.active{
    color: yellow;
  } */

  .navbar-brand{
    color:white;
    font-size: 2rem;
  }
  .navbar-brand span{
    font-size: 1rem;
    color: yellow;
  }

  
  @media only screen and (max-width: 993px) {
    .mobile-btn{
      background-color: yellow;
      margin-bottom: 1rem;
    }

    .navbar-collapse.show{
    background-color: rgba(0, 0, 0, 0.7);
  }

  }
  
</style>