const MUSICS = [
  {
    id: 1,
    title: "Music",
    vendor: "Mahir Sadman",
    price: 10000,
    max_songs: 15,
    time: "5",
    djs: "1",
    image:
      "https://img.freepik.com/premium-photo/dj-playing-music-sound-mixer-night-club_53876-18678.jpg?w=2000",
    description: "Music for wedding",
  },
  {
    id: 2,
    title: "Music",
    vendor: "Momtahina Bushra",
    price: 20000,
    max_songs: 15,
    time: "5",
    djs: "2",
    image:
      "https://www.androidauthority.com/wp-content/uploads/2015/07/Best-DJ-apps-for-Android.jpg",
    description: "Music for wedding",
  },
  {
    id: 3,
    title: "Music",
    vendor: "Farida Mim",
    price: 15000,
    max_songs: 20,
    time: "5",
    djs: "1",
    image:
      "https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2022/01/dj.jpg",
    description: "Music for wedding",
  },
];
export function getMusics() {
  return MUSICS;
}
export function getMusic(id) {
  return MUSICS.find((music) => music.id == id);
}
