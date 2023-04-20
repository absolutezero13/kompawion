import axios from 'axios';
import { API_KEY, PHOTO_API_ENDPOINT, VIDEO_API_ENDPOINT } from './costants';
import { Photo, Video, VideoFile } from './types';

export const getVideos = async (): Promise<Video[] | unknown> => {
  try {
    const response = await axios.get(VIDEO_API_ENDPOINT, {
      method: 'GET',
      headers: {
        Authorization: API_KEY
      }
    });
    const data = await response.data;
    return data.videos;
  } catch (error) {
    console.log('error', error, VIDEO_API_ENDPOINT);
    return error;
  }
};

export const getPhotos = async (): Promise<Photo[] | unknown> => {
  try {
    const response = await axios.get(PHOTO_API_ENDPOINT, {
      method: 'GET',
      headers: {
        Authorization: API_KEY
      }
    });

    const data = await response.data.photos;
    return data;
  } catch (error) {
    console.log('error', error, PHOTO_API_ENDPOINT);
    return error;
  }
};
