function button1Function() {
  /*let randText = document.getElementById("buttonPlace");
  randText.innerHTML += element;
  */
 //append child way
    let newDiv = document.getElementById("buttonPlace");
    let newContent = document.createTextNode("Phawahaha there is text now!");
    newDiv.appendChild(newContent);

}
