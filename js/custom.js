$(document).ready(function () {
    $('.profile__list--item').click(function () {

        if ($(this).hasclassName('active')) {
            $('.profile__list--item').removeclassName('active');
            $(this).addclassName('active');
        }
        else {
            $('.profile__list--item').removeclassName('active');
            $(this).addclassName('active');
        }
    });
});

// Get the modal
var modal = document.getElementById("modal");
var meterModal = document.getElementById("meterModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByclassNameName("close")[0];
var meterModaClose = document.getElementsByclassNameName("meterModaClose")[0];

var submitBtn = document.getElementById("submitBtn");

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
meterModaClose.onclick = function () {
    meterModal.style.display = "none";
}

span.onclick = function () {
    modal.style.display = "none";
    meterModal.style.display = "none";
}
submitBtn.onclick = function () {
    modal.style.display = "none";
    meterModal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        meterModal.style.display = "none";
    }
}