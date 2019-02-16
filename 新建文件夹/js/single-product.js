/*
$(function () {
    if (location.search.indexOf('pid=') != -1)
        var pid = location.search.split('=')[1]
    $.ajax({
        url: 'http://localhost:3000/single-product',
        type: 'get',
        data: `pid=${pid}`,
        dataType: 'json',
        success: function (res) {
            // console.log('this is res ||| ');
            // console.log(res);
            var {product, specs, pics} = res;
            var {pic, title, price, details} = product;

            var img = $('.single-product .row:first');

            var html = `
            <div class="col-md-6" style="overflow: hidden;">
                <a href="#">
                    <img class="img-fluid" src="${pic}"></a>
                <div class="thumbnail">
                    <button type="button" class="slick-prev">
                        <span class="carousel-control-prev-icon"></span></button>
                    <ul class="thumb row list-unstyled">`;
            for (var pic of pics) {
                html += `<li><a href="#"><img class="img-fluid" src="${pic.sm}"
                                                     data-md="${pic.md}"
                                                     data-lg="${pic.lg}"></a></li>`;
            }

            html += `</ul>
                    <button type="button" class="slick-next">
                        <span class="carousel-control-next-icon"></span></button>
                   </div>
            </div>
            <div class="col-md-6">
                <div class="head">
                    <h3 class="title float-left">${title}</h3>
                    <span class="price float-right">$${price}</span></div>
                <p>${details}</p>
                <div class="row">
                    <div class="col quantity">
                        <span>Quantity:</span>
                        <div class="pro-qty">
                            <span class="minus">-</span>
                            <input type="text" value="1">
                            <span class="plus">+</span></div>
                    </div>
                    <div class="col color d-inline-block">
                        <span>Color:</span>
            `;

            for (var s of specs) {
                html += `<a href="single-product.html?pid=${s.pid}" style="background-color: ${s.spec}"></a>`;
            }
            html += `</div></div></div>`;
            img.html(html);

            var ul = document.querySelector('ul.thumb');
            ul.style.width = `${126 * pics.length}px`;

            // var mdImg = $('.single-product .row:first img:first');
            var mdImg = document.querySelector('.single-product>div.container>div>div>a>img');

            ul.onmouseover = function (e) {
                if (e.target.nodeName === 'IMG') {
                    // console.log('this is nodeName |||')
                    // console.log(e.target.nodeName);
                    var img = e.target;
                    var md = img.dataset.md;
                    mdImg.src = md;
                }
            }

            var $btn_prev = $('.single-product .thumbnail>button:first');
            var $btn_next = $('.single-product .thumbnail>button:last');

            var moved = 0;
            var $ul = $(ul);
            $btn_prev.on("click", function () {
                var $btn_prev = $(this);
                if (!$btn_prev.is('.disabled')) {
                    moved--;
                    $ul.css('marginLeft', -126 * moved);
                    $btn_next.removeClass('disabled');
                    if (moved == 0) {
                        $btn_prev.addClass('disabled');
                    }
                }
            });
            $btn_next.on("click", function () {
                var $btn_next = $(this);
                if (!$btn_next.is('.disabled')) {
                    moved++;
                    $ul.css('marginLeft', -126 * moved);
                    $btn_prev.removeClass('disabled');
                    if (pics.length - moved == 4) {
                        $btn_next.addClass('disabled');
                    }
                }
            })
        }
    });
})*/
