const fetchData = async () => {
  const res = await fetch("./data.json");
  return await res.json();
};
class ViewComponent {
  async render() {
    const data = await fetchData();

    // const data = dataComponent.getData();

    const container = document.getElementById("data-container");

    if (container && data) {
      data.forEach((item) => {
        const card = document.createElement("div");

        card.className =
          "p-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700";
        const cardContent = `

          <a href="#">

            <img class="rounded-t-lg" src="${item.image}" alt="" />

          </a>

          <div class="p-5">

            <a href="#">

              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${item.title}</h5>

            </a>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${item.content}</p>

            <a href="#">

              <i class="fa-regular fa-thumbs-up" style="color: white;"></i>

              <i class="fa-regular fa-thumbs-down" style="color: white;"></i>

            </a>

          </div>

        `;

        card.innerHTML = cardContent;

        container.appendChild(card);
      });
    }
  }
}

const viewComponent = new ViewComponent();

viewComponent.render();
