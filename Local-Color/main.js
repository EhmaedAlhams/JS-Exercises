document.body.classList.add(localStorage.getItem("pageColor") || "black");

let switchColor = document.querySelectorAll('.switch li');
const dataAttribute = [];

switchColor.forEach((item) => {
    dataAttribute.push(item.getAttribute("data-color"));

    item.addEventListener("click", function(){
        document.body.classList.remove(...dataAttribute);
        document.body.classList.add(this.getAttribute("data-color"));

        localStorage.setItem("pageColor", this.getAttribute("data-color"));
    });
});
