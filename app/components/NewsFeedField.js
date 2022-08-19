const FEEDFIELD = [
  {
    id: 100,
    proImage: "https://cdn-icons-png.flaticon.com/512/163/163828.png",
    name: "Mahir Sadman",
    time: "August 16, 2022",
    title: "Wedding stage",
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2022/01/11220447/wedding-stage-decoration-shutterstock_1193416354-1200x700-compressed.jpg",
    caption: "Very happy to share our recent work with you",
  },
  {
    id: 101,
    proImage:
      "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-File.png",
    name: "Momtahina Bushra",
    time: "August 9, 2022",
    title: "Cup-cake",
    image:
      "https://foodlets.com/wp-content/uploads/2020/06/orange-cream-cupcakes-horz.jpg",
    caption: "Introducing ur new arrival orange cup-cake",
  },
  {
    id: 102,
    proImage:
      "https://cdn1.vectorstock.com/i/1000x1000/79/15/cute-cartoon-brunette-girl-icon-isolated-on-white-vector-12757915.jpg",
    name: "Farida Mim",
    time: "August 5, 2022",
    title: "Wedding photography",
    image:
      "https://www.tuhinhossainphotography.com/wp-content/themes/tuhin-photography/assets/img/wedding/large/WEDDING-PHOTO_10.jpg",
    caption: "Some of our recent photograpy",
  },
];
export function getFeedFields() {
  return FEEDFIELD;
}
export function getFeedField(id) {
  return FEEDFIELD.find((feedfield) => feedfield.id == id);
}
