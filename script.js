const randomNumber = (array) => {
  const number = Math.floor(Math.random() * array.length);
  console.log(number);
  return number;
};

const randomQuote = (array) => {
  const quote = Math.floor(Math.random() * array.length);
  return quote;
};

// Quotes object for author and quotes
const quotes = [
  {
    author: 'Elon Musk',
    quotes: [
      'Never. I don’t ever give up. I’d have to be dead or completely incapacitated. For my part, I will never give up, and I mean never.',
      'I think people can choose to be not ordinary. You know, they can choose to not necessarily conform to the conventions that were taught to them by their parents. So, yes, I think it’s possible for ordinary people to choose to be extraordinary.',
      'A source of strength, hm. That’s really not how I think about things. For me it’s simply: This is something that is important to get done, and we we should just keep doing it or die trying. I don’t need a source of strength. [Quitting] is not in my nature, and I don’t care about optimism or pessimism. F*ck that, we’re gonna get it done.',
      'You guys are the magicians of the 21st century. Don’t let anything hold you back. Imagination is the limit. Go out there and create some magic.',
      '[Mars] would just be the greatest adventure. Ever. And very exciting. And I think we need things in life that are exciting and inspiring. It can’t just be about solving some awful problem. There have to be reasons to get up in the morning.',
      'Take risks now. Do something bold. You won’t regret it.',
      'When something is important enough, you do it even if the odds aren’t in your favor.',
      'When I was a little kid, I was really scared of the dark. But then I came to understand, okay, dark just means the absence of photons in the visible wavelength — 400 to 700 nanometers. Then I thought, well, it’s really silly to be afraid of a lack of photons. Then I wasn’t afraid of the dark anymore after that.',
      'I feel fear quite strongly. It’s not as though I just have the absence of fear. I feel it quite strongly. But there are times when something is important enough, you believe in it enough, that you do it in spite of the fear. People shouldn’t think, ‘I feel fear about this, and therefore I shouldn’t do it.’ It’s normal to feel fear. There’d have to be something mentally wrong [with you] if you didn’t feel fear. […] If you just accept the probabilities, then that diminishes fear.',
      'I think it’s very difficult to start companies and quite painful. There’s a friend of mine who’s got a good phrase for doing a startup: ‘It’s like eating glass and staring into the abyss.’ If you’re sort of wired to do it, then you should do it, but not otherwise. If you need inspiring words, don’t do it.',
    ],
  },
  {
    author: 'Steve Jobs',
    quotes: [
      'Innovation distinguishes between a leader and a follower.',
      'Your time is limited, so don’t waste it living someone else’s life.',
      'Don’t let the noise of others’ opinions drown out your own inner voice.',
    ],
  },
  {
    author: 'Dalai Lama',
    quotes: [
      'Remember that not getting what you want is sometimes a wonderful stroke of luck.',
      'If you think you’re too small to make a difference… try sleeping with a mosquito in the room.',
      'There are always problems to face, but it makes a difference if our minds are calm.',
      'Silence is sometimes the best answer.',
      'Optimism doesn’t mean that you are blind to the reality of the situation. It means that you remain motivated to seek a solution to whatever problems arise.',
    ],
  },
];

// Advices for audience
const action = [
  'apply this advice in your life',
  'learn from that',
  'grow yourself thanks to this',
  'reflect about that',
];

// Generate a random quote based linked to an author
const quoteGenerator = (quotes) => {
  const raNumber = randomNumber(quotes);
  const raQuote = randomQuote(quotes[raNumber].quotes);
  console.log(
    `${quotes[raNumber].author} said : "${
      quotes[raNumber].quotes[raQuote]
    }" so ${action[randomNumber(action)]}`
  );
};

quoteGenerator(quotes);
