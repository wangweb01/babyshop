/*
$(function () {
    $.ajax({
        url: 'http://localhost:3000/index',
        type: 'get',
        dataType: 'json',
        success: function (res) {
            console.log(res);
            var p;
            var carouselInner = document.querySelector('#index-carousel div.carousel-inner');
            var html = `
                <div class="carousel-content">
                        <h1>Get 35% off <br>Latest Baby Product</h1>
                        <a href="single-product.html?pid=1">SHOP NOW</a>
                </div>`;
            var a = true;
            for (p of res) {
                var {img} = p;
                console.log(p);
                html +=
                    `<div class="carousel-item${a == true ? ' active' : ''}">
                    <img src="${img}">
                 </div>`;
                a = false;
            }
            carouselInner.innerHTML = html;
        }
    })
});
*/















