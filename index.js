var data = [
    {
        product   : 'Sandalia de Cuero y  Tachas saville Row',
        urlImage  : './assets/p1.png',
        talla     : 'XS',
        price     : '$40.000',
        urlPerfil : './assets/profile.png',
        perfil    : 'Straadivaruois & Zara Home Juntos'
    },
    {
        product   : 'Sandalia de Cuero y  Tachas saville Row',
        urlImage  : './assets/p2.png',
        talla     : 'XS',
        price    :  '$40.000',
        urlPerfil : './assets/profile.png',
        perfil    : 'Straadivaruois & Zara Home Juntos'
    },
    {
        product   : 'Sandalia de Cuero y  Tachas saville Row',
        urlImage  : './assets/p3.png',
        talla     : 'XS',
        price     : '$40.000',
        urlPerfil : './assets/profile.png',
        perfil    : 'Straadivaruois & Zara Home Juntos'
    },
    {
        product   : 'Sandalia de Cuero y  Tachas saville Row',
        urlImage  : './assets/p4.png',
        talla     : 'XS',
        price     : '$40.000',
        urlPerfil : './assets/profile.png',
        perfil    : 'Straadivaruois & Zara Home Juntos'
    },
    {
        product   : 'Sandalia de Cuero y  Tachas saville Row',
        urlImage  : './assets/p5.png',
        talla     : 'XS',
        price     : '$40.000',
        urlPerfil : './assets/profile.png',
        perfil    : 'Straadivaruois & Zara Home Juntos'
    },
    {
        product   : 'Sandalia de Cuero y  Tachas saville Row',
        urlImage  : './assets/p6.png',
        talla     : 'XS',
        price     : '$40.000',
        urlPerfil : './assets/profile.png',
        perfil    : 'Straadivaruois & Zara Home Juntos'
    }
];

$(document).ready(function(){
    for (var i = 0; i < data.length; i++) {
        $(".container-content").append(
            "<div class='container-product'>" +
                "<div class='container-image'>" +
                    "<img src='"+ data[i].urlImage+"'>" +
                "</div>"+
                "<div class='content-details'>"+
                    "<div class='container-name-product'>"+
                        "<span class='name-product'>"+ data[i].product + "</span>"+
                    "</div>"+
                    "<div class='container-talla'>"+
                        "<span class='talla-product'>"+ data[i].talla + "</span>"+
                    "</div>" +
                "</div>" +
                "<div class='content-info'>"+
                    "<div class='text-info'>" +
                        "<span class='info-product'>" + data[i].perfil + "</span>" +
                    "</div>"+
                    "<div><span class='preci-product'>" + data[i].price + "</span></div>"+
                "</div>"+
                "<div class='content-icon'>" +
                    "<div class='icon-profile'>"+

                    "</div>"+
                "</div>"+
            "</div>"
        );
    }
});
