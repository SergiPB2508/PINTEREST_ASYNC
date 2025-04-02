import { createApi } from "unsplash-js"

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY,
});

const searchPhotos = async (keyword) => {
    const fail = document.querySelector(".fail");
    fail.innerHTML = "";

  if (keyword == "") {
    keyword = "puente"
  }

  let images = await unsplash.search.getPhotos({
    query: keyword,
    page: 1,
    perPage: 30,
  });

  if (images.response.total == 0) {
    images = await unsplash.search.getPhotos({
      query: "gatos",
      page: 1,
      perPage: 30,
    });

    fail.innerHTML = "Busqueda fallida, prueva otra vez!";
    
  }
  
  return images;
}


export default searchPhotos;