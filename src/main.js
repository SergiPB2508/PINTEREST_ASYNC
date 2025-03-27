import "./style.css";

// HEADER
const headerTemplate = () => {
  return `
        <div>
            <img src="src/img/logo.png" alt="logo" class="logo">
            <div class="links">
                <a href="">Inicio</a>
                <a href="">Explorar</a>
                <a href="">Crear</a>
            </div>
        </div>
        <input type="text" placeholder="Buscar" id="searchinput">
        <a href="" class="icon"><img src="src/img/noti.png" alt="notifications"></a>
        <a href="" class="icon"><img src="src/img/msg.png" alt="message"></a>
        <img src="src/img/porfile.png" alt="Porfile" class="profileimg">
    `
};

const printHeaderTemplate = () => {
  document.querySelector("header").innerHTML = headerTemplate();
};

printHeaderTemplate();

// GALERY
const cardTemplate = (item) => {

  let name = "Sin Nombre";

  if (item.user.first_name != null && item.user.last_name != null) {
    name = item.user.first_name + " " + item.user.last_name;
  } else if(item.user.first_name != null){
    name = item.user.first_name;
  }
  
  let date = item.created_at.substring(0,10);


  return `
      <li class="gallery-item">
          <div class="photo" style="background-image: url(${item.urls.regular});">
              <div>
                  <div class="links">
                      <a href="" class="links-icon">
                          <img src="src/img/camera.png" alt="Camera"/>
                          <p>+60</p>
                      </a>
                      <a href="#null" class="links-icon">
                          <img src="src/img/heart.png" alt="Heart"/>
                          <p>38</p>
                      </a>    
                  </div>
                  <a href="${item.links.html}" class="save-btn">
                      <button>Visitar</button>
                  </a>
                  <div></div>
              </div>
          </div>
          <div class="user">
              <div class="img" style="background-image: url(${item.user.profile_image.large}); border-color: ${item.color}"></div>
              <p>${name}</p>
              <p>${date}</p>
          </div>
      </li>
      `
}

import { createApi } from "unsplash-js"

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY,
});

const searchPhotos = async (keyword) => {

  if (keyword == "") {
    keyword = "puente"
  }

  const images = await unsplash.search.getPhotos({
    query: keyword,
    page: 1,
    perPage: 30,
  });
  return images;
}

const galleryTemplate = () => {
  return `
    <ul class="gallery">
    </ul>
    `
}

const printItems = (items) => {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";
  for (const item of items) {
    gallery.innerHTML += cardTemplate(item);
  }
}

const galleryListeners = () => {
  const input = document.querySelector("#searchinput");

  input.addEventListener("keydown", async (e) => {
    if (e.key == "Enter") {
      const images = await searchPhotos(input.value);  
      printItems(images.response.results);
    }
    
  });
  
}

const printTemplate = async () => {
  document.querySelector("main").innerHTML = galleryTemplate();
  galleryListeners();

  const images = await searchPhotos("");
  
  printItems(images.response.results);
}

printTemplate();