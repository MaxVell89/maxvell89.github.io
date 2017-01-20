var modalShow = document.querySelector(".modal-window");
var modalWindow = document.querySelector(".modal-content");
var modalClose = modalWindow.querySelector(".modal-close");
var userName = modalWindow.querySelector("[name=name]");
var email = modalWindow.querySelector("[name=e-mail]");
var textarea = modalWindow.querySelector("textarea");
var storageName = localStorage.getItem("userName");
var storageEmail = localStorage.getItem("email");

modalShow.addEventListener("click", function(event) {
    event.preventDefault();
    modalWindow.classList.add("modal-show");
    if (storageName && storageEmail) {
        textarea.focus();
    } else if (storageName && !storageEmail) {
        userName.value = storageName;
        email.focus();
    } else if (!storageName && storageEmail) {
        email.value = storageEmail;
        userName.focus();
    } else {
        userName.focus();
    }
});

modalClose.addEventListener("click", function(event) {
   event.preventDefault();
    modalWindow.classList.remove("modal-show");
});

window.addEventListener("keydown", function(event) {
   if (event.keyCode == 27) {
       if (modalWindow.classList.contains("modal-show")) {
           modalWindow.classList.remove("modal-show");
       }
   } 
});