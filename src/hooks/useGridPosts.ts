import { useEffect, useState } from 'react';
import { getPhotos, getVideos } from '../api/post';
import { GridPost } from 'src/feed/types';
import { Photo, Video } from 'src/api/types';

const ITEM_COUNT = 6;

const useGridPosts = (userId: number) => {
  const [posts, setPosts] = useState<GridPost[]>([]);

  const arrangeDataForGrid = (videos: Video[], photos: Photo[]) => {
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

  const fetchPosts = async () => {
    try {
      const videos = (await getVideos(true)) as Video[];
      const photos = (await getPhotos()) as Photo[];

      const newPosts = arrangeDataForGrid(videos, photos);

      setPosts(newPosts);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return posts;
};

export default useGridPosts;
