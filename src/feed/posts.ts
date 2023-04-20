import { Post } from './types';

export const posts = [
  {
    id: 0,
    username: 'johnsmith',
    userAvatar: '',
    mediaItems: [],
    caption: 'A beautiful day in the neighborhood',
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 1,
        text: 'Nice!',
        username: 'johndoe',
        userAvatar: ''
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 1,
    username: 'johnsmith',
    userAvatar: '',
    mediaItems: [],
    caption: 'A beautiful day in the neighborhood',
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 1,
        text: 'Nice!',
        username: 'johndoe',
        userAvatar: ''
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 2,
    username: 'johnsmith',
    userAvatar: 'https://picsum.photos/200',
    mediaItems: [],
    caption: 'A beautiful day in the neighborhood',
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 1,
        text: 'Nice!',
        username: 'johndoe',
        userAvatar: 'https://picsum.photos/200'
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 3,
    username: 'johnsmith',
    userAvatar: 'https://picsum.photos/200',
    mediaItems: [],
    caption: 'A beautiful day in the neighborhood',
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 1,
        text: 'Nice!',
        username: 'johndoe',
        userAvatar: 'https://picsum.photos/200'
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 4,
    username: 'johnsmith',
    userAvatar: '',
    mediaItems: [],
    caption: 'A beautiful day in the neighborhood',
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 1,
        text: 'Nice!',
        username: 'johndoe',
        userAvatar: ''
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 5,
    username: 'johnsmith',
    userAvatar: '',
    mediaItems: [],
    caption: 'A beautiful day in the neighborhood',
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 1,
        text: 'Nice!',
        username: 'johndoe',
        userAvatar: ''
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 6,
    username: 'johnsmith',
    userAvatar: '',
    mediaItems: [],
    caption: 'A beautiful day in the neighborhood',
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 1,
        text: 'Nice!',
        username: 'johndoe',
        userAvatar: ''
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  }
] as Post[];
