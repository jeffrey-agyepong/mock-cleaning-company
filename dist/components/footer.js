class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<div class="page-footer">
  <div class="container">
    <div class="footer">
      <div class="center">Font made from <a href="http://www.onlinewebfonts.com">Online Web Fonts</a>is licensed by CC
        BY
        3.0
      </div>
      <div class="grid-container">

        <footer> </footer>
        <footer> Copyright &copy; 2021 <a href="https://conciseweb.netlify.app/">Lorem Cleaning Company/a></footer>
        <footer><a href=""> Privacy Policy</a></footer>
      </div>
    </div>
  </div>
</div>

`;
  }
}

customElements.define("footer-component", Footer);
