// ------------ Details Page ------------

var selectImg = document.getElementById("displayBox"); 

// getting what image is clicked on
function carousel(otherImages){
    selectImg.src = otherImages.src;
}

// lightbox
var lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

selectImg.addEventListener('click', e =>{
    lightbox.classList.add('active');
    var currentImg = document.createElement('img');
    // appending the slected img to the current image inorder to get the image when clicked
    currentImg.src = selectImg.src;
    while(lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(currentImg);
})

// clicking anywhere outside to exits the lightbox
lightbox.addEventListener('click', e=>{
    lightbox.classList.remove('active');
})

