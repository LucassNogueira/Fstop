import { TrackImage } from '@/shared/types/f1Types';

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

export const getTrackImage = (circuitId: number): string | undefined => {
  return trackImages.find((img) => img.id === circuitId)?.img;
};

