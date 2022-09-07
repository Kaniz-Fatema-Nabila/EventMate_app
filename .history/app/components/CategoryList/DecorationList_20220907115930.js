const DECOR = [
  {
    id: 1,
    title: "Wedding decoration",
    vendor: "Mahir Sadman's Company",
    price: 45000,
    image:
      "https://i.pinimg.com/originals/f1/00/e2/f100e27841fb4af6aab49bece5335deb.jpg",
    description: "Decoration stage for wedding",
  },
  {
    id: 2,
    title: "Brthday decoration",
    vendor: "Momtahina Bushra's Company",
    price: 300,
    image:
      "https://i.pinimg.com/originals/3e/6d/f9/3e6df9de3cf650eea88af6d0bf9063af.jpg",
    description: "String lights, fairy lights",
  },
  {
    id: 3,
    title: "Proposal decoration",
    vendor: "Farida Mim's Company",
    price: 1900,
    image:
      "https://media-exp2.licdn.com/dms/image/C4E12AQGSW7G6pGslsg/article-inline_image-shrink_1000_1488/0/1633069867199?e=1662595200&v=beta&t=vy0e2j4OijeTiamiRgPyLDBHxhSABtAGzOH393xL0cw",
    description: "Cake for special ocassion",
  },
];

export function getDecors() {
  return DECOR;
}
export function getDecor(id) {
  return DECOR.find((Decor) => Decor.id == id);
}
