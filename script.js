var dict = [
    "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    "https://i.picsum.photos/id/366/200/300.jpg?grayscale&hmac=c8ZOoBJFlJy_Z0X5jKt4rvifV-m9eXaCzXSrkOY8SW8",
    "https://i.picsum.photos/id/247/200/300.jpg?blur=5&hmac=EzhmVRNlKxh41OAoAjyJDri2cpDiXQB4I_kPgxlmIC0",
    "https://i.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs"
];
const left = document.querySelector(".btn-left");
const right = document.querySelector(".btn-right");
var image = document.querySelector(".img");
var i = 0;

window.addEventListener("load", () => {
    image.src = dict[i];
});

left.addEventListener("click", () => {
    i--;

    if (i < 0) {
        i = dict.length - 1;
        image.src = dict[i];
    } else {
        image.src = dict[i];
    }
});

right.addEventListener("click", () => {
    i++;

    if (i < dict.length) {
        image.src = dict[i];
    } else {
        i = 0;
        image.src = dict[i];
    };
});