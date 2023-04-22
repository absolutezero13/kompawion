import { useEffect, useState } from 'react';
import { arrangeDataForGrid } from '@utils/arrangeData';
import { getPhotos, getVideos } from '../api/post';
import { GridPost } from 'src/feed/types';
import { Photo, Video } from 'src/api/types';

export const MAX_POST_COUNT = 12;

const useGridPosts = (userId: number) => {
  const [posts, setPosts] = useState<GridPost[]>([]);

  const fetchPosts = async () => {
    try {
      const videos = (await getVideos(true)) as Video[];
      const photos = (await getPhotos()) as Photo[];

      const newPosts = arrangeDataForGrid(videos, photos, MAX_POST_COUNT);

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
