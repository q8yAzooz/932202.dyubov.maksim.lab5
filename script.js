document.getElementById("btn1").addEventListener("click", function() {
    openModal(1);
});

document.getElementById("btn2").addEventListener("click", function() {
    openModal(2);
});

document.getElementById("btn3").addEventListener("click", function() {
    openModal(3);
});

function openModal(modalNumber) {
    var modal = document.getElementById("modal" + modalNumber);
    modal.style.display = "block";
}

function closeModal(modalNumber) {
    var modal = document.getElementById("modal" + modalNumber);
    modal.style.display = "none";
}
