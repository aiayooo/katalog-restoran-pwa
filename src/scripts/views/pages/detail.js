import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate, createReviewTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <section class="content">
      <div class="katalog">
        <h1 tabindex="0" class="katalog_label">Detail Restaurant</h1>
        <div class="resto-detail">
        </div>
        <div id="likeButtonContainer"></div>
      </div>
      <div id="content_review"></div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantDbSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('.resto-detail');
    detailContainer.innerHTML = createRestaurantDetailTemplate(detail);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: detail.id,
        name: detail.name,
        description: detail.description,
        pictureId: detail.pictureId,
        city: detail.city,
      },
    });

    const reviewContainer = document.querySelector('#content_review');
    reviewContainer.innerHTML = createReviewTemplate();
    const submitButton = document.querySelector('.btn-submit');
    const formName = document.querySelector('#customerName');
    const formReview = document.querySelector('#descReview');
    const restaurantId = detail.id;

    submitButton.addEventListener('click', async (event) => {
      event.preventDefault();

      if (formName.value === '' || formReview.value === '') {
        // eslint-disable-next-line no-alert
        alert('Kolom tidak boleh kosong!');
        formName.value = '';
        formReview.value = '';
      } else {
        const review = {
          id: restaurantId,
          name: formName.value,
          review: formReview.value,
        };

        const sendReview = await RestaurantDbSource.sendReview(review);
        formName.value = '';
        formReview.value = '';
        console.log(sendReview);
      }
    });

    this._hideHero();
  },

  _hideHero() {
    const heroContent = document.querySelector('hero-section');
    heroContent.style.display = 'none';
  },
};

export default Detail;
