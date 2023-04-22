import { useEffect, useState } from 'react';
import { Post } from 'src/feed/types';
import { posts as staticPosts } from '../feed/posts';
import { Photo, Video } from '../api/types';
import { getPhotos, getVideos } from '../api/post';

export const MAX_POST_COUNT = 30;

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const videos = (await getVideos(false)) as Video[];
      const photos = (await getPhotos()) as Photo[];

      let photosIndex = -2;
      let videosIndex = -1;

      // FORMING MOCK POSTS DATA WITH THE RESULST OF THE API CALLS
      const newPosts = staticPosts.map((post, index) => {
        photosIndex += 2;
        videosIndex += 1;

        // ONE POST VIDEO - ONE POST PHOTO
        const shouldGetVideo = index % 2 !== 0;

        const username = shouldGetVideo
          ? videos[videosIndex].user.name
          : photos[photosIndex].photographer;

        const mediaItems = shouldGetVideo
          ? videos.slice(videosIndex, videosIndex + 1)
          : photos.slice(photosIndex, photosIndex + 2);

        return {
          ...post,
          userAvatar: `https://picsum.photos/200?random=${index}`,
          username,
          mediaItems
        };
      });

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

export default usePosts;
