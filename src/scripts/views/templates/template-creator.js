import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="post_detail">
    <h2 tabindex="0" class="resto-info_name">${restaurant.name}</h2>
    <img
      tabindex="0"
      class="resto-info_img"
      src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" alt="${restaurant.name}"/>
    <div class="resto-info">
      <p tabindex="0" class="resto-info_city">Location: ${restaurant.city}</p>
      <p tabindex="0" class="resto-info_description">${restaurant.description}</p>
      <p tabindex="0" class="resto-info_address">Address : ${restaurant.address}</p>
      <p tabindex="0" class="menu_title">Menu</p>
      <div class="resto-info_menu">
        <div class="resto-menu_foods">
          <p tabindex="0" class="menu_category">Foods</p>
          <ul tabindex="0" class="menu_category_list">${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</ul>
        </div>
        <div class="resto-menu_drinks">
          <p tabindex="0" class="menu_category">Drinks</p>
          <ul tabindex="0" class="menu_category_list">${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ul>
        </div>
      </div>
      <p tabindex="0" class="reviews_title">Customer Reviews</p>
      <div class="reviews">
        ${restaurant.customerReviews.map((review) => `
          <div tabindex="0" class="resto_reviews">
            <p tabindex="0" class="name_customer">${review.name}</p>
            <p tabindex="0" class="review_customer">${review.review}</p>
            <p tabindex="0" class="review_date">${review.date}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div tabindex="0" class="post-item">
    <img
      tabindex="0"
      class="post-item_thumbnail"
      src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}"
    />
    <div class="post-item_content">
      <p tabindex="0" class="post-item_rating">⭐️ Rating: ${restaurant.rating}</p>
      <h1 tabindex="0" class="post-item_title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
      <p tabindex="0" class="post-item_description">${restaurant.description}</p>
      <p tabindex="0" class="post-item_city">Location: ${restaurant.city}</p>
    </div>
  </div>
`;

const createReviewTemplate = () => `
  <div tabindex="0" class="post_review">
    <h2 tabindex="0" class="post_review_title">Add A New Review</h2>
    <form tabindex="0" class="form" action="#" id="form">
      <div class="div_customer">
        <label tabindex="0" for="customerName">Name</label>
        <input type="text" id="customerName" name="customerName" required>
      </div>
      <div class="div_customer">
        <label tabindex="0" for="descReview">Review</label>
        <textarea name="descReview" id="descReview" cols="30" rows="5" required></textarea>
      </div>
      <input type="submit" value="Submit" name="submit" class="btn-submit">
    </form>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button tabindex="0" aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createReviewTemplate,
};
