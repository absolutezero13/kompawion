import { Post } from './types';

export const posts = [
  {
    id: 0,
    username: '',
    userAvatar: '',
    mediaItems: [],
    caption: 'A beautiful day in the neighborhood',
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 1,
        text: 'Nice!',
        username: 'johndoe'
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 1,
    username: '',
    userAvatar: '',
    mediaItems: [],
    caption:
      "How can anyone resist this little fluff ball? 😊 It's amazing how much joy a cute animal can bring into our lives.",
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 1,
        text: 'I am buying this cat.',
        username: 'elonmusk'
      },
      {
        id: 11,
        text: 'I want to snuggle with this little one all day! 💕',
        username: 'taylorswift'
      },
      {
        id: 10,
        text: "I can't handle the cuteness! 😍😭",
        username: 'reesewitherspoon'
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 2,
    username: '',
    userAvatar: 'https://picsum.photos/200',
    mediaItems: [],
    caption:
      "Meet my new furry friend! 😍 I just couldn't resist those big, adorable eyes. Who else is a sucker for cute animals?",
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 9,
        text: 'Aww, what a precious little furball! 😊',
        username: 'ellen'
      },
      {
        id: 14,
        text: 'The world needs more cuteness like this! 😊',
        username: 'barackobama'
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 3,
    username: '',
    userAvatar: 'https://picsum.photos/200',
    mediaItems: [],
    caption:
      'Animals are truly amazing creatures. They have a way of touching our hearts and reminding us of the beauty of life. ❤️',
    likes: 35,
    userLiked: false,
    comments: [],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 4,
    username: '',
    userAvatar: '',
    mediaItems: [],
    caption:
      "Just taking a break to snuggle with my favorite cuddle buddy! 💕 There's nothing quite like the love and affection of a cute animal.",
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 44,
        text:
          "Bought a cat and now I feel like I'm living with a furry dictator. 🙀",
        username: 'sethmeyers'
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 5,
    username: '',
    userAvatar: '',
    mediaItems: [],
    caption:
      "When life gets tough, it's always comforting to have a cute animal by your side. ❤️ Who else agrees?",
    likes: 35,
    userLiked: false,
    comments: [],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 6,
    username: '',
    userAvatar: '',
    mediaItems: [],
    caption: 'Köpek almak istedim ama beni seçti.  #Kkpeğimbeniseçti ',
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 55,
        text:
          'Hayvanlar dünyanın en saf varlıklarıdır ve onlara her zaman sevgi ve saygı göstermeliyiz. ❤️🐾',
        username: 'sedefavcioglu'
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 7,
    username: '',
    userAvatar: '',
    mediaItems: [],
    caption:
      'Hayvanlar bizim evlatlarımızdan biri gibi ve onları korumak bizim sorumluluğumuz. 🙏🐶',
    likes: 35,
    userLiked: false,
    comments: [],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 8,
    username: '',
    userAvatar: '',
    mediaItems: [],
    caption: 'Hayvanlarla vakit geçirmek bana her zaman huzur verir. 🐾😌',
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 58,
        text: 'Iyi ki varlar ❤️🐾 #hayvansevgisi #doglove',
        username: 'demetozdemir'
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 9,
    username: '',
    userAvatar: '',
    mediaItems: [],
    caption: 'Yo',
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 60,
        text:
          'Hayvanlarla bir arada olmak en büyük mutluluk kaynaklarımdan biri. 🐶🐱 #hayvansevgisi #mutluluk',
        username: 'asli_enver'
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 10,
    username: '',
    userAvatar: '',
    mediaItems: [],
    caption: '',
    likes: 35,
    userLiked: false,
    comments: [],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 11,
    username: '',
    userAvatar: '',
    mediaItems: [],
    caption: '',
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 11,
        text:
          "The more I learn about the animal kingdom, the more I realize how little we truly know. It's a fascinating and humbling experience. 🌿🦜",
        username: 'StephenHawking'
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 12,
    username: '',
    userAvatar: '',
    mediaItems: [],
    caption: 'Brrr',
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 9,
        text:
          'Animals are a source of endless wonder and inspiration. They remind us of the beauty and diversity of the natural world. 🐘🦜',
        username: 'JK_Rowling'
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 13,
    username: '',
    userAvatar: '',
    mediaItems: [],
    caption: '',
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 7,
        text:
          "There's something truly special about the bond between humans and animals. They have a way of understanding us in a way that no one else can. 🐾❤️",
        username: 'QueenElizabethII'
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 14,
    username: '',
    userAvatar: '',
    mediaItems: [],
    caption: 'A beautiful day in the neighborhood',
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 6,
        text:
          'One of the greatest joys in life is the unconditional love of a furry friend. 🐶🐱',
        username: 'EllenDeGeneres'
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  },
  {
    id: 15,
    username: '',
    userAvatar: '',
    mediaItems: [],
    caption: 'A beautiful day in the neighborhood',
    likes: 35,
    userLiked: false,
    comments: [
      {
        id: 2,
        text:
          'I am more of a dog person, but this cat might just change my mind! 😍🐾',
        username: 'TheRock'
      }
    ],
    createdAt: new Date('2023-04-20T12:00:00.000Z')
  }
] as Post[];
