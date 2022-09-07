const PHOTOS = [
  {
    id: 1,
    title: "Photography 1",
    vendor: "Mahir Sadman",
    price: 45000,
    numPhotos: 100,
    time: "5",
    days: "15-20",
    image:
      "https://images.shiksha.com/mediadata/images/articles/1568193656phpmWI2xq.jpeg",
    description: "Decoration stage for wedding",
  },
  {
    id: 2,
    title: "Photography 2",
    vendor: "Momtahina Bushra",
    price: 300,
    numPhotos: 100,
    time: "5",
    days: "15-20",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    description: "String lights, fairy lights",
  },
  {
    id: 3,
    title: "Photography 3",
    vendor: "Farida Mim",
    price: 1900,
    numPhotos: 100,
    time: "5",
    days: "15-20",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvX-CKO5-NMHummnWPU1ygOoUtPj1z894JDxJ17L-o&s",
    description: "Cake for special ocassion",
  },
];

export function getPhotos() {
  return PHOTOS;
}
export function getPhoto(id) {
  return PHOTOS.find((Photo) => Photo.id == id);
}
