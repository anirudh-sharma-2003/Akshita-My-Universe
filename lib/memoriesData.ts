/**
 * ---------------------------------------------------------------------------
 *  Birthday App Configuration
 * ---------------------------------------------------------------------------
 *  Everything personal lives here. Swap names, text, and photo URLs to make
 *  the experience your own. Photos can be any URL or a local file placed in
 *  /public (for example "/photos/beach.jpg").
 * ---------------------------------------------------------------------------
 */

const photo = (seed: string, w = 400, h = 600) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

export const config = {
  recipientName: 'Akshu',
  senderName: 'Abhi',
  birthdayLabel: '16 November',
  /** Optional: path to an mp3 in /public (e.g. "/music/our-song.mp3"). Leave empty to use the built-in music box. */
  musicUrl: '',
}

export const welcome = {
  eyebrow: 'Hey you, birthday star',
  lines: [
    `Today the whole universe is celebrating you, ${config.recipientName}.`,
    'I made this little world just for you — every page is a piece of us.',
    'Take your time, swipe slowly, and smile a lot.',
  ],
}

export type TimelineEvent = {
  date: string
  title: string
  text: string
  detail: string
  image: string
}

export const timeline: TimelineEvent[] = [
  {
    date: '03 August 2026',
    title: 'The day we met',
    text: 'A random hello that turned into hours of talking.',
    detail: 'I remember we first met on Snapchat because of your friend. ❤️.',
    image: '/photos/fir.jpeg'
  },
  {
    date: '15 August 2026',
    title: 'Our first Movie date',
    text: 'Spending time together.',
    detail: 'At the beginning of the movie, I was so nervous, but after the interval, when I held your hand for the very first time, that feeling was something truly special. ❤️🥹 And feeding each other with our own hands was another beautiful moment that I’ll always cherish. 🫶🏻❤️✨',
    image: '/photos/mo.jpeg'
  },
  {
    date: 'Not Remember',
    title: 'The hard days',
    text: 'You showed up when it mattered most.',
    detail: 'Those days when you talked about leaving me were the hardest for me. 💔🥺 Please, never say that again, even in anger. I cannot bear the thought of losing you. ❤️‍🩹🫂',
    image: '/photos/sad.jpeg'
  },
  {
    date: '29 September or 30 October 2026',
    title: 'Still my favorite person',
    text: 'Favorable moment ever.',
    detail: 'That was the best day of my life, when we became one. ❤️🥹 Being close to you, feeling you near me, and kissing you were the most beautiful moments I could ever ask for. 🫂💋❤️ Those are memories I will cherish forever and never forget. ♾️❤️',
    image: '/photos/kis.jpeg'
  },
]

export type MemoryLayout =
  | 'polaroid'
  | 'tilt'
  | 'neon'
  | 'taped'
  | 'collage'
  | 'filmstrip'
  | 'arch'
  | 'magazine'
  | 'stack'

export type Memory = {
  id: string
  layout: MemoryLayout
  title: string
  caption: string
  date: string
  note: string
  image: string
  /** Extra photos for collage / filmstrip / stack layouts */
  images?: string[]
}

export const memories: Memory[] = [
  {
    id: 'm1',
    layout: 'polaroid',
    title: 'Golden Hours',
    caption: 'Kissing challenge',
    date: '29 September 2026',
    note: 'A kissing challenge where we have to kiss each other a lot. 💋❤️',
    image: '/photos/feel.jpeg',
  },
  {
    id: 'm2',
    layout: 'tilt',
    title: 'Sirpur Lake',
    caption: 'Spending time',
    date: 'Aug 30, 2026',
    note: 'We walked until our feet hurt and time goes fast and until the time runs out. ⏳❤️',
    image: '/photos/sirpur.jpeg'
  },
  {
    id: 'm3',
    layout: 'neon',
    title: 'Dress',
    caption: 'One Piece Dress',
    date: 'Not remmember',
    note: 'That day when you wore a one-piece dress and we went to Sirpur Lake, you looked so hot and incredibly beautiful. ❤️‍🔥😍 You looked so stunning that I was literally speechless. 🥹❤️✨',
    image: '/photos/one.jpeg'
  }
]

export const reasons: string[] = [
  'Your laugh could fix any bad day.',
  'You remember the tiny things nobody else does.',
  'You are brave even when you are scared.',
  'No matter what mood you are in, you always talk to me lovingly and stay by my side. ❤️🥹',
  'Your hugs are basically medicine.',
  'You turn ordinary days into stories.',
  'You never give up on the people you love.',
  'Your taste in music is (mostly) excellent.',
  'You make me want to be a better person.',
  'You are simply, wonderfully you.',
]

export type CrazyMoment = {
  id: string
  title: string
  text: string
  image: string
}

export const crazyMoments: CrazyMoment[] = [
  { id: 'c1', title: 'Breakfast at the time of Movie', text: 'The time when our breakfast arrived late, and we were still eating even after the movie had ended. 😂❤️', image: '/photos/awarapan 2.jpeg' },
  { id: 'c2', title: 'Cafe Event', text: 'The day we went to that café, where the weird smell made you feel unwell for 3–4 days. 🥹❤️', image: '/photos/weired.png' },
  { id: 'c3', title: 'Meeting in Rain', text: 'he night I came to meet you, but the rain spoiled our plans. Yet, that was the day we kissed each other for the very first time. 💋❤️‍🩹 A moment I’ll never forget. 🫶🏻', image: '/photos/rain.jpeg' },
]

export const cake = {
  candles: 5,
  wishTitle: 'Your wish is on its way',
  wishMessage: `May Next year bring you endless laughter, wild adventures, quiet peace, and every dream you have been too shy to say out loud. Happy birthday, ${config.recipientName}.`,
}

export const letter = {
  greeting: `My dearest ${config.recipientName},`,
  paragraphs: [
    'Happy birthday. I have tried to write this a dozen times, and every version felt too small for what I actually want to say.',
    'You came into my life quietly and then changed everything — the way I laugh, the way I see the world, the way ordinary Tuesdays feel like something worth remembering.',
    'Thank you for the late-night talks, the inside jokes nobody else understands, the patience on my worst days, and the way you celebrate my best ones like they are your own.',
    'Next year, I hope you are gentle with yourself. I hope you chase the things that make your heart race. I hope you know, deeply, how loved you are.',
    'No matter where the year takes us, I will be right here — cheering the loudest, hugging the tightest, and grateful every single day that you exist.',
  ],
  signoff: 'Forever yours,',
  signature: config.senderName,
}

export const bucketList: string[] = [
  'Watch a sunrise from a mountain top',
  'Take a spontaneous weekend trip',
  'Learn to cook one fancy dish together',
  'Have a full movie marathon night',
  'Go stargazing far from city lights',
  'Write letters to open in 5 years',
  'Try a dance class (and survive it)',
  'Make a scrapbook of this year',
]

export const finale = {
  heading: 'One last thing...',
  subheading: 'Press the button and hold on tight.',
  popupTitle: 'Surprise!',
  popupMessage: `This hug is for every birthday I could not be there for, and every one I will be. I love you endlessly, ${config.recipientName}. Happy birthday!`,
}
