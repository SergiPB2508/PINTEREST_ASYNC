import "./card.css";

const card = (item) => {

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

export default card