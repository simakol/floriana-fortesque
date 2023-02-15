const iceCreamSlider = document.getElementById("iceCreamSlider");

window.addEventListener("DOMContentLoaded", async () =>
  createIceCreamsSlider(await getIceCreams())
);

function createIceCreamsSlider(iceCreamsArr) {
  const markup = iceCreamsArr.reduce((markup, { name, description }) => {
    return (
      markup +
      `
        <div class="swiper-slide flex-between-start ice-cream-slide">
            <img src="./images/flavors/${name.toLowerCase()}.png" alt="ice-cream" width="500" height="800">
            <div class="flavour-description">
                <h3>${name[0].toUpperCase() + name.slice(1)}</h3>
                <p>${description}</p>
            </div>
        </div>
        `
    );
  }, "");

  iceCreamSlider.insertAdjacentHTML("beforeend", markup);
}
