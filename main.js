content = document.querySelector("container")
//function to create 16x16 grid of divs column
function createDiv(){
for (var i = 0; i <= 31; i++) {
container.innerHTML += '<div class="content"></div>';
    }
}
createDiv();