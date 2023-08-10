// script.ts
async function fetchData() {
  try {
    const response = await fetch(
      "    https://newsapi.org/v2/everything?q=tesla&from=2023-07-10&sortBy=publishedAt&apiKey=f0880f7d2363474680cd06c3c59b01d2"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data); // Hiển thị dữ liệu JSON trong console
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

//qưqe
