import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
      <section class="content">
        <div class="katalog">
          <h1 tabindex="0" class="katalog_label">Explore Restaurant</h1>
          <div class="posts">
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.listRestaurant();
    const restaurantsContainer = document.querySelector('.posts');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    this._showHero();
  },

  _showHero() {
    const heroContent = document.querySelector('hero-section');
    heroContent.style.display = 'block';
  },
};

export default ListRestaurant;
