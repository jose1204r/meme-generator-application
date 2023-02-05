

document.addEventListener("DOMContentLoaded", function(){
    const memeForm = document.getElementById("form1");
    const listGallery = document.querySelector(".gallery1");

memeForm.addEventListener("submit", function(event){
     event.preventDefault();


 // adding  li element

    var memeLi = document.createElement('li');
    memeLi.classList.add("meme-img");



    
// canvas 
        const topText = document.getElementById("text-top");
        const urlInput = document.getElementById('uploaded-img').value,
        src =  urlInput,
        img = document.createElement('img');
        img.src = src;
       


    const topTextDiv = document.createElement('div');
    topTextDiv.classList.add("text", "top");
    topTextDiv.innerText = document.getElementById("text-top").value;


    const bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add("text", "bottom");
    bottomTextDiv.innerText = document.getElementById("text-bottom").value;

    const removeDiv = document.createElement('div');
    removeDiv.classList.add("blue-cross");
    removeDiv.innerText = "DELETE";
    removeDiv.style.color = "blue";
    


listGallery.appendChild(memeLi);
memeLi.appendChild(img);
memeLi.appendChild(topTextDiv);
memeLi.appendChild(bottomTextDiv);
memeLi.appendChild(removeDiv);





    memeForm.reset();


    });





function remove(event){
  event.target.parentNode.remove();
}


listGallery.addEventListener('click', remove, false);

});