class Hero extends HTMLElement {
  constructor() {
    super();

    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
    .hero {
      position: relative;
      display: flex;
      align-items: center;
      min-height: 400px;
      width: 100%;
      text-align: center;
    }
    
    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(images/hero-image_2.jpg);
      background-position: center;
      background-size: cover;
      opacity: 0.7;
    }
    
    .hero_inner {
      position: relative;
      z-index: 1;
      margin: 0 auto;
      max-width: 800px;
    }
    
    .hero_title {
      color: black;
      font-weight: bold;
      font-size: 36px;
      text-shadow: 2px 1px 0 rgb(162, 103, 138);
    }
    
    .hero_tagline {
      color: black;
      margin-top: 16px;
      font-size: 18px;
      font-weight: bold;
      background-color: rgb(162, 103, 138);
      padding: 5px;
      border-radius: 5px;
      margin-left: 20px;
      margin-right: 20px;
    }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._updateStyle();

    this.innerHTML = `
    ${this._style.outerHTML}

    <div tabindex="0" class="hero">
      <div class="hero_inner">
        <h1 tabindex="0" class="hero_title">Your Restaurant, Your Choice</h1>
        <p tabindex="0" class="hero_tagline">Find Your Next Favorite Restaurant - Discover the best restaurants in your city!</p>
      </div>
    </div>
    `;
  }
}

customElements.define('hero-section', Hero);
