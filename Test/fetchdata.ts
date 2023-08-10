export async function fetchData(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error("Error fetching data: " + err.message);
      } else {
        throw new Error("Unknown error occurred");
      }
    }
  }
  