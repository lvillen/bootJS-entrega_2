// var hotel = {
//     name: "Molina Lario",
//     location: "Málaga",
//     img: "https://www.hotelmolinalario.com/_images/gallery/5/2925_gallery.jpg",
// };

// document.getElementById("hotel-name").innerHTML = "Hotel " + hotel.name;
// document.getElementById("hotel-location").innerHTML = "Ubicado en " + hotel.location;
// document.getElementById("hotel-img").src = hotel.img;

var hoteles = {
    NH: {
        name: "NH",
        location: "Málaga",
        img: "https://img.nh-hotels.net/nh_malaga-375-restaurant.jpg?output-quality=70&resize=555:*&composite-to=center,center|555:280&background-color=white",
    },
    Barceló: {
        name: "Barceló",
        location: "Málaga",
        img: "https://www.barcelogrupo.com/wp-content/uploads/2018/03/Barceló-Málaga.jpg",
    }
}

var selectedHotel = prompt("¿Sobre qué hotel quiere realizar la valoración? ¿NH o Barceló?")

document.getElementById("hotel-name").innerHTML = "Hotel " + hoteles[selectedHotel].name;
document.getElementById("hotel-location").innerHTML = "Ubicado en " + hoteles[selectedHotel].location;
document.getElementById("hotel-img").src = hoteles[selectedHotel].img;



// var rating = prompt("Valore este hotel del 1 al 5");

// document.getElementById("hotel-rating").innerHTML = rating + " estrellas";

var stars = {
    una:
        "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("Valore este hotel de una a cinco estrellas, por favor.")

document.getElementById("hotel-rating").innerHTML = stars[rating];

var anonymous = confirm("¿Quiere que su reseña se publique de forma anónima?");

document.getElementById("anonymous").checked = anonymous;