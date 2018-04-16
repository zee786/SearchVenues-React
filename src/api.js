export const fetchData = async () => {
  try {
    const response = await fetch("https://www.booknomads.com/api/v0/isbn/9789000035526");
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};