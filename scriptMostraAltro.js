let galleryAltro = document.getElementsByClassName("hide")
let btnGallery = document.getElementById("btnMostraAltro")

function MostraAltro(){
    galleryAltro[0].classList.toggle("showGallery")
    console.log(btnGallery)
    if(galleryAltro[0].classList.contains("showGallery")){
    btnGallery.style.display="none"
    }
}