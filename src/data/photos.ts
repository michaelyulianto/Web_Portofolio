import type { StaticImageData } from "next/image";
import coast from "../../public/photos/01-coast.webp";
import heartFence from "../../public/photos/02-heart-fence.webp";
import bentonJunction from "../../public/photos/03-benton-junction.webp";
import greenStripe from "../../public/photos/04-green-stripe.webp";
import greenTowers from "../../public/photos/05-green-towers.webp";
import trafficWindow from "../../public/photos/06-traffic-window.webp";

export type GalleryPhoto = {
  src: StaticImageData;
  width: number;
  height: number;
  alt: string;
  caption: string;
  no: string;
};

export const photos: GalleryPhoto[] = [
  {
    src: coast,
    width: 1280,
    height: 960,
    alt: "View from a hill above a sandy shoreline, white surf and blue sea under a clear sky.",
    caption: "Waves at work. No deadline in sight.",
    no: "01",
  },
  {
    src: heartFence,
    width: 960,
    height: 1280,
    alt: "Heart-shaped message tags hanging from a fence below a glowing lamp, with city lights in the distance at night.",
    caption: "Everyone left a message. I left a photo.",
    no: "02",
  },
  {
    src: bentonJunction,
    width: 960,
    height: 1280,
    alt: "Illuminated Benton Junction sign outside buildings at night, with a blurred car in the foreground.",
    caption: "Benton Junction, after hours. Blurry car included.",
    no: "03",
  },
  {
    src: greenStripe,
    width: 720,
    height: 1280,
    alt: "Tall building with a vertical green light strip above palms and traffic at dusk.",
    caption: "Green stripe, orange sky, traffic below.",
    no: "04",
  },
  {
    src: greenTowers,
    width: 900,
    height: 1600,
    alt: "Two tall buildings with vertical green lights above a road and cars at night.",
    caption: "Cars in a hurry. The towers weren't.",
    no: "05",
  },
  {
    src: trafficWindow,
    width: 960,
    height: 1280,
    alt: "Traffic on a road at night, seen through a dark window with interior lights reflected in the glass.",
    caption: "Front-row seat to the jam.",
    no: "06",
  },
];
