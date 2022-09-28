const h2 = document.createElement("h2");
h2.textContent = "Let's celebrate the Garden State!";
document.querySelector("body").appendChild(h2);

const taylor = document.getElementById("button");

document.addEventListener("keydown", function(event) {
    if(event.key === "click") {
        taylor.style.color = black;
    }
});
