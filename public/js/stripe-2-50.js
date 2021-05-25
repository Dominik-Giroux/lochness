(function () {
  var stripe = Stripe(
    "pk_live_51IuShoE8f20dSLXPCwEAJ3uEgtFxZ8aRVdKlaEHgVeeSWIRowmUZQj9lOKnZljevO7pZdfvjV59s15eKSdqh5Qr900nxbthQ7H"
  );

  var checkoutButton = document.getElementById(
    "checkout-button-price_1Iup1LE8f20dSLXPMhFymQrG"
  );
  checkoutButton.addEventListener("click", function () {
    /*
     * When the customer clicks on the button, redirect
     * them to Checkout.
     */
    stripe
      .redirectToCheckout({
        lineItems: [{ price: "price_1Iup1LE8f20dSLXPMhFymQrG", quantity: 1 }],
        mode: "payment",
        /*
         * Do not rely on the redirect to the successUrl for fulfilling
         * purchases, customers may not always reach the success_url after
         * a successful payment.
         * Instead use one of the strategies described in
         * https://stripe.com/docs/payments/checkout/fulfill-orders
         */
        successUrl: "https://save-nessie.web.app/loch-ness-monster.html",
        cancelUrl: "https://save-nessie.web.app/index.html"
      })
      .then(function (result) {
        if (result.error) {
          /*
           * If `redirectToCheckout` fails due to a browser or network
           * error, display the localized error message to your customer.
           */
          var displayError = document.getElementById("error-message");
          displayError.textContent = result.error.message;
        }
      });
  });
})();
