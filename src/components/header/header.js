import "./header.css";

const headerTemplate = () => {
  return `
        <div>
            <img src="src/img/logo.png" alt="logo" id="logo">
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

const header = () => {
  document.querySelector("header").innerHTML = headerTemplate();
};

export default header;