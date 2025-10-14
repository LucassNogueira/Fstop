import { HalfBodyImage, TrackImage } from '@/shared/types/f1Types';

export const halfBodyImages: HalfBodyImage[] = [
  { id: 34, img: '/media/halfbodyimg/charles_leclerc.jpg' },
  { id: 24, img: '/media/halfbodyimg/carlos_sainz.jpg' },
  { id: 25, img: '/media/halfbodyimg/max_verstappen.jpg' },
  { id: 51, img: '/media/halfbodyimg/george_russell.jpg' },
  { id: 20, img: '/media/halfbodyimg/lewis_hamilton.jpg' },
  { id: 28, img: '/media/halfbodyimg/esteban_ocon.jpg' },
  { id: 10, img: '/media/halfbodyimg/sergio_perez.jpg' },
  { id: 2, img: '/media/halfbodyimg/kevin_magnussen.jpg' },
  { id: 5, img: '/media/halfbodyimg/valtteri_bottas.jpg' },
  { id: 49, img: '/media/halfbodyimg/lando_norris.jpg' },
  { id: 82, img: '/media/halfbodyimg/yuki_tsunoda.jpg' },
  { id: 36, img: '/media/halfbodyimg/pierre_gasly.jpg' },
  { id: 4, img: '/media/halfbodyimg/fernando_alonso.jpg' },
  { id: 83, img: '/media/halfbodyimg/zhou_guanyu.jpg' },
  { id: 80, img: '/media/halfbodyimg/mick_schumacher.jpg' },
  { id: 31, img: '/media/halfbodyimg/lance_stroll.jpg' },
  { id: 6, img: '/media/halfbodyimg/nico_hulkenberg.png' },
  { id: 50, img: '/media/halfbodyimg/alexander_albon.jpg' },
  { id: 14, img: '/media/halfbodyimg/daniel_ricciardo.jpg' },
  { id: 62, img: '/media/halfbodyimg/nicholas_latifi.jpg' },
];

export const trackImages: TrackImage[] = [
  { id: 2, img: '/media/trackimg/2.png' },
  { id: 29, img: '/media/trackimg/29.png' },
  { id: 1, img: '/media/trackimg/1.png' },
  { id: 27, img: '/media/trackimg/27.png' },
  { id: 31, img: '/media/trackimg/31.png' },
  { id: 6, img: '/media/trackimg/6.png' },
  { id: 7, img: '/media/trackimg/7.png' },
  { id: 8, img: '/media/trackimg/8.png' },
  { id: 9, img: '/media/trackimg/9.png' },
  { id: 12, img: '/media/trackimg/12.png' },
  { id: 11, img: '/media/trackimg/11.png' },
  { id: 10, img: '/media/trackimg/10.png' },
  { id: 14, img: '/media/trackimg/14.png' },
  { id: 15, img: '/media/trackimg/15.png' },
  { id: 5, img: '/media/trackimg/5.png' },
  { id: 16, img: '/media/trackimg/16.png' },
  { id: 17, img: '/media/trackimg/17.png' },
  { id: 19, img: '/media/trackimg/19.png' },
  { id: 20, img: '/media/trackimg/20.png' },
  { id: 21, img: '/media/trackimg/21.png' },
  { id: 22, img: '/media/trackimg/22.png' },
  { id: 23, img: '/media/trackimg/23.png' },
];

export const getDriverImage = (driverId: number): string | undefined => {
  return halfBodyImages.find((img) => img.id === driverId)?.img;
};

export const getTrackImage = (circuitId: number): string | undefined => {
  return trackImages.find((img) => img.id === circuitId)?.img;
};

