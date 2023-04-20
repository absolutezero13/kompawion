import { useEffect, useState } from 'react';
import { posts as staticPosts } from '../feed/posts';
import { getPhotos, getVideos } from '../api/post';
import { Post } from 'src/feed/types';
import { Photo, Video } from 'src/api/types';

const usePosts = (userId: number) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const videos = (await getVideos()) as Video[];
      const photos = (await getPhotos()) as Photo[];

      let photosIndex = -2;
      let videosIndex = -1;

      // FORMING MOCK POSTS DATA WITH THE RESULST OF THE API CALLS
      const newPosts = staticPosts.map((post, index) => {
        photosIndex += 2;
        videosIndex += 1;

        return {
          ...post,
          userAvatar: `https://picsum.photos/200?random=${index}`,
          mediaItems:
            index % 2 === 0
              ? videos.slice(videosIndex, videosIndex + 1)
              : photos.slice(photosIndex, photosIndex + 2)
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
