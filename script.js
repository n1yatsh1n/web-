
function slider(a) {

    console.log(a);
    let el = a.slice(-1);
    let c = document.getElementsByClassName("chose-slider-block_button");
    let k = document.getElementsByClassName("chose-slider-block_img");
    for (let i = 0; i < c.length; i++) {
        let c1 = c[i];
        let k1 = k[i]
        if (c1.classList.contains('active')) {
            c1.classList.remove('active');
        }
        if (k1.classList.contains('chosen')) {
            k1.classList.remove('chosen');
        }
    }
    document.getElementById('button_' + el).classList.toggle("active");
    document.getElementById(a).classList.toggle("chosen");
}