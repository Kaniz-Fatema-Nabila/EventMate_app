const PHOTOS = [
  {
    id: 1,
    title: "Decoration",
    vendor: "Mahir Sadman",
    price: 45000,
    numPhotos: 100,
    time: "5",
    days: "15-20",
    image:
      "https://img.staticmb.com/mbcontent//images/uploads/2022/5/wedding%20stage%20decoration.jpg",
    description: "Decoration stage for wedding",
  },
  {
    id: 2,
    title: "Lights",
    vendor: "Momtahina Bushra",
    price: 300,
    numPhotos: 100,
    time: "5",
    days: "15-20",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2020/9/AJ/BG/YW/24829239/x4cart-star-string-lights-for-indoor-outdoor-home-party-decoration-500x500.jpg",
    description: "String lights, fairy lights",
  },
  {
    id: 3,
    title: "Cake",
    vendor: "Farida Mim",
    price: 1900,
    numPhotos: 100,
    time: "5",
    days: "15-20",
    image:
      "https://www.mezzapica.com.au/wp-content/uploads/2019/06/mezzapica_240519_web_012.jpg",
    description: "Cake for special ocassion",
  },
];

export function getPhotos() {
  return PHOTOS;
}
export function getPhoto(id) {
  return PHOTOS.find((Photo) => Photo.id == id);
}
