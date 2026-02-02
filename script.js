


// Détecter le clic sur le bouton "Prévisualiser"
previewBtn.addEventListener('click', () => {
// Remplir la zone de prévisualisation avec le texte et l'image
  preview.innerHTML = "<h3>Prévisualisation</h3><p>"+document.querySelector('#titre').value+'</p>'
  +'<p>'+document.querySelector('#description').value+'</p>'
  +'<img src='+document.querySelector('#url').value+'>';

});
// Permet de faire apparaitre le zoom au clic
document.querySelectorAll('.image1').forEach(img => {
  img.addEventListener('click', () => {
    document.querySelector('.image_aggrandi').src = img.src
    modal.classList.remove('popup-invisible');
    modal.classList.add('popup-visible');
})
})
// permet d'enlever le zoom quand on clique sur le bouton
closeBtn.addEventListener('click', () => {
  modal.classList.remove('popup-visible');
  modal.classList.add('popup-invisible');
})
