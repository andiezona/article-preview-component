const hiddenDiv = document.querySelector(".hidden-div");
const hiddenDivMobile = document.querySelector(".hidden-div-mobile");
const shareButton = document.querySelector(".share-button");
const mobileShareButton = document.querySelector(".mobile-share-button");

const webScreen = window.matchMedia("(min-width: 901px)");
const mobileScreen = window.matchMedia("(max-width: 900px)");

function toggleHiddenDivWeb(webScreen) {
  if (webScreen.matches) {
    shareButton.addEventListener("click", () => {
      hiddenDiv.style.display =
        hiddenDiv.style.display === "block" ? "none" : "block";
    });
  } else {
    hiddenDiv.style.display = "none";
  }
}

function toggleHiddenDivMobile(mobileScreen) {
  if (mobileScreen.matches) {
    shareButton.addEventListener("click", () => {
      hiddenDivMobile.style.display = "block";
    });
    mobileShareButton.addEventListener("click", () => {
      hiddenDivMobile.style.display = "none";
    });
  } else {
    hiddenDivMobile.style.display = "none";
  }
}

toggleHiddenDivWeb(webScreen);
toggleHiddenDivMobile(mobileScreen);
