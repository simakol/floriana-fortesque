const distributorsList = document.getElementById("distributorsList");

window.addEventListener("DOMContentLoaded", async () =>
  fillDistributorsList(await getProviders())
);

function fillDistributorsList(distributors) {
  distributors.forEach(({ name }) => {
    const markup = `<li>${name}</li>`;
    distributorsList.insertAdjacentHTML("beforeend", markup);
  });
}
