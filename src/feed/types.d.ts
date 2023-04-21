import { Photo, Video, VideoFile } from '../api/types';

export interface Post {
  id: number;
  username: string;
  userAvatar: string;
  mediaItems: Video[] | Photo[];
  caption: string;
  likes: number;
  userLiked: boolean;
  comments: any[]; // TODO: Create Comment type
  createdAt: Date;
}

export interface Story {
  id: number;
  username: string;
  image: string;
}

export type GridMediaItem =
  | (Video & { mediaType: string })
  | (Photo & { mediaType: string });
export interface GridPost {
  id: number;
  mediaItems: GridMediaItem[];
}
