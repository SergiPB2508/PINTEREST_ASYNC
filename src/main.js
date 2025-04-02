import "./style.css";
import card from "./components/card/card";
import header from "./components/header/header";
import searchPhotos from "./components/searchPhotos/searchPhotos";

// HEADER
header();

// GALERY
const galleryTemplate = () => {
  return `
    <div class="fail"></div>
    <ul class="gallery">
    </ul>
    `
}

const printItems = (items) => {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";
  for (const item of items) {
    gallery.innerHTML += card(item);
  }
}

const galleryListeners = () => {
  const input = document.querySelector("#searchinput");
  const logo = document.querySelector("#logo")

  input.addEventListener("keydown", async (e) => {
    if (e.key == "Enter") {
      const images = await searchPhotos(input.value);  
      printItems(images.response.results);
      input.value = "";
    }
    
  });

  logo.addEventListener("click", async (e) => {
    const images = await searchPhotos("");  
    printItems(images.response.results);
    input.value = "";
  });
}

const printTemplate = async () => {
  document.querySelector("main").innerHTML = galleryTemplate();
  galleryListeners();

  const images = await searchPhotos("");
  
  printItems(images.response.results);
}

printTemplate();