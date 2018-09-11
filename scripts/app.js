var slide = 1;
current(slide);

function plusOne(n) {
    current(slide += n);
}

function current(n) {
    var i;
    var x = document.getElementsByClassName("myImages");
    if (n > x.length) { slide = 1 }
    if (n < 1) { slide = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slide - 1].style.display = "block";
}