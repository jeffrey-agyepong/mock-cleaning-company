class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = ` 
<header class="header">
<div class="overlay has-fade"></div>
<nav class="bg-dark flex flex-jc-sb flex-ai-c">

  <a href="#" class="header__ncc">LOREM CLEANING COMPANY</a>



  <a id="btnHamburger" href="#" class="header__toggle hide-for-desktop">
    <span></span>
    <span></span>
    <span></span>
  </a>

  <div class="header__links hide-for-mobile">
    <a href="index.html" class="small nav-font">Home</a>
    <a href="services.html" class="small nav-font">Services</a>
    <a href="team.html" class="small nav-font">Team</a>
    <a href="contact.html" class="small nav-font">Contact</a>
  </div>
</nav>
<div class="header__menu has-fade hide-for-desktop">
  <a href="index.html">Home</a>
  <a href="services.html">Services</a>
  <a href="team.html">Team</a>
  <a href="contact.html">Contact</a>
</div>
</header>
`;
  }
}

customElements.define("header-component", Header);
