

/* hidden menu */
document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('.link.hide').classList.toggle('show');
});



/* right click disuble */
function disableRightClick() {
    alert("Sorry, right click is blocked !!");
    return false;
}


