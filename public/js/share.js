function share() {
  if (navigator.share) {
    navigator
      .share({
        title: "Save Nessie | Loch Ness Monster",
        text: "I only need about tree fiddy... Damn Loch Ness Monster! This is a reference from South Park used in a context of a school art project.",
        url: "https://save-nessie.web.app/"
      })
      .then(() => console.log("Thanks for sharing"))
      .catch((error) => console.log("Error sharing", error));
  }
}
