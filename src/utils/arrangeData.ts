import { Photo, Video } from 'src/api/types';

export const arrangeDataForGrid = (
  videos: Video[],
  photos: Photo[],
  ITEM_COUNT: number
) => {
  // Grid will be 4 photos and 1 video
  let photosIndex = 0;
  let videosIndex = 0;

  const formattedData = Array.from({ length: ITEM_COUNT })
    .fill(0)
    .map((_, index) => {
      const photosSlice = photos
        .slice(photosIndex, photosIndex + 4)
        .map(item => ({ ...item, mediaType: 'photo' }));
      const videoSlice = videos
        .slice(videosIndex, videosIndex + 1)
        .map(item => ({ ...item, mediaType: 'video' }))[0];

      photosIndex += 4;
      videosIndex += 1;

      return {
        id: index,
        mediaItems: [...photosSlice, videoSlice]
      };
    });

  return formattedData;
};
