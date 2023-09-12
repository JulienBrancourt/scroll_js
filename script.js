// Créer un événement au scroll
let playOnce = true

onscroll = (event) => {
    // console.log("test");

// Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut
    const navbar = document.getElementById("navbar")
    if (window.scrollY > 50) {
        navbar.style.height = "50px"
    } else {
        navbar.style.height = "90px"
    }
    
// Faire apparaitre l'image de la partie improvise
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight

    const imgImprovise = document.getElementById("imgImprovise")
    
    if (scrollValue > 0.45) {
        imgImprovise.style.opacity = "1"
        imgImprovise.style.transform = "none"
    }
// Faire apparaitre la popup quand on est en bas du site
    const popup = document.getElementById("popup")
    if (scrollValue > 0.85 && playOnce) {
        popup.style.opacity = "1"
        popup.style.transform = "none"
        
    }
}
// Bonus : quand on clicke sur la popup elle disparait pour toujours
const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", () => {
    const popup = document.getElementById("popup")
    popup.style.opacity = "0"
    popup.style.transform = "translateX(500px)"
    playOnce = false
})
