document.querySelector(".header").innerHTML="Resim Galerisi"

const gallery = document.getElementById('gallery');
const baseURL = "https://source.unsplash.com/random";

for(let i=0; i<15; i++){
    const image = document.createElement("img");
    image.src = `${baseURL}/${i}`;
    image.alt = `images`;
    image.classList.add("galleryImg");
    gallery.appendChild(image);
}

