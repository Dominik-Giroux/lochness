function share() {
  if (navigator.share) {
    navigator
      .share({
        title: "Do you want to buy some cookies?",
        text: "Girl Scout Cookies - Save Nessie",
        url: "https://save-nessie.web.app/"
      })
      .then(() => console.log("Thanks for sharing"))
      .catch((error) => console.log("Error sharing", error));
  }
}
