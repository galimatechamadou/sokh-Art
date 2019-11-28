/*
 * 2003-2019 Business Tech
 *
 *  @author    Business Tech SARL
 *  @copyright 2003-2019 Business Tech SARL
 */
// declare main object of module
var oPixel = function(sName) {

	/**
	 * handle events on the add to cart button (category and product pages)
	 *
	 * @param array product
	 * @param string sSelectorType
	 * @param int id
	 * @param bool bPageList
	 */
	this.addToCart = function(product, sSelectorType){

		// to comment do not forget
		//sSelectorType = "p[id='add_to_cart']>input[type='submit']";

		var oClick = jQuery(sSelectorType);

			oClick.on('click', function () {
				fbq('track', 'AddToCart',
					{
						content_name: product.content_name,
						content_category: product.content_category,
						content_ids: product.content_ids,
						content_type: product.content_type,
						value: product.value,
						currency: product.currency
					});
			});
	};

	/**
	 * handle events on the add to wishlist button (category and product pages)
	 *
	 * @param array product
	 * @param string sSelectorType
	 */
	this.addToWishList = function(product, sSelectorType) {

		var oClick = jQuery(sSelectorType);

		oClick.on('click', function () {
			fbq('track', 'AddToWishlist',
			{
				content_name: product.content_name,
				content_category: product.content_category,
				content_ids: product.content_ids,
				content_type: product.content_type,
				value: product.value,
				currency: product.currency
			});
		});
	}

	/**
	 * handle events on the initiateCheckout
	 *
	 * @param string sSelectorType
	 */
	this.initiateCheckout = function(sSelectorType) {

		var oClick = jQuery(sSelectorType);

		oClick.on('click', function () {
			fbq('track', 'InitiateCheckout');
		});
	};

	/**
	 * handle events on the add Payment data
	 *
	 */
	this.addPaymentInfo = function() {
		fbq('track', 'AddPaymentInfo');
	};


	/**
	 * handle events on the sub button
	 *
	 */
	/**
	 * handle events on the add to wishlist button (category and product pages)
	 *
	 * @param array product
	 * @param string sSelectorType
	 */
	this.addSub = function(product, sSelectorType) {

		var oClick = jQuery(sSelectorType);

		oClick.on('click', function () {
			fbq('track', 'Subscribe',
				{
					content_name: product.content_name,
					content_category: product.content_category,
					content_ids: product.content_ids,
					content_type: product.content_type,
					value: product.value,
					currency: product.currency
				});
		});
	}
};