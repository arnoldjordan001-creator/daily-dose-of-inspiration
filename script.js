// ===================================
// 366 Motivational Quotes (One for each day including leap day)
// ===================================
const quotes = [
    // January (31 days)
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
    { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
    { text: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.", author: "David Brinkley" },
    { text: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
    { text: "All our dreams can come true if we have the courage to pursue them.", author: "Walt Disney" },
    { text: "Good things come to people who wait, but better things come to those who go out and get them.", author: "Anonymous" },
    { text: "If you do what you always did, you will get what you always got.", author: "Anonymous" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "Just when the caterpillar thought the world was ending, he turned into a butterfly.", author: "Proverb" },
    { text: "Successful entrepreneurs are givers and not takers of positive energy.", author: "Anonymous" },
    { text: "Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them.", author: "Vaibhav Shah" },
    { text: "Try not to become a person of success, but rather try to become a person of value.", author: "Albert Einstein" },
    { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
    
    // February (29 days)
    { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
    { text: "The person who says it cannot be done should not interrupt the person who is doing it.", author: "Chinese Proverb" },
    { text: "There are no traffic jams along the extra mile.", author: "Roger Staubach" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "You become what you believe.", author: "Oprah Winfrey" },
    { text: "I would rather die of passion than of boredom.", author: "Vincent van Gogh" },
    { text: "A truly rich man is one whose children run into his arms when his hands are empty.", author: "Anonymous" },
    { text: "It is not what you do for your children, but what you have taught them to do for themselves.", author: "Ann Landers" },
    { text: "If you want your children to turn out well, spend twice as much time with them, and half as much money.", author: "Abigail Van Buren" },
    { text: "Build your own dreams, or someone else will hire you to build theirs.", author: "Farrah Gray" },
    { text: "The battles that count aren't the ones for gold medals. The struggles within yourself are the toughest ones.", author: "Jesse Owens" },
    { text: "Education costs money. But then so does ignorance.", author: "Sir Claus Moser" },
    { text: "I have learned over the years that when one's mind is made up, this diminishes fear.", author: "Rosa Parks" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { text: "Remember that not getting what you want is sometimes a wonderful stroke of luck.", author: "Dalai Lama" },
    { text: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Our lives begin to end the day we become silent about things that matter.", author: "Martin Luther King Jr." },
    { text: "Do what you can, where you are, with what you have.", author: "Teddy Roosevelt" },
    { text: "If you do what you've always done, you'll get what you've always gotten.", author: "Tony Robbins" },
    { text: "Dreaming, after all, is a form of planning.", author: "Gloria Steinem" },
    { text: "It's your place in the world; it's your life. Go on and do all you can with it.", author: "Mae Jemison" },
    { text: "You may be disappointed if you fail, but you are doomed if you don't try.", author: "Beverly Sills" },
    { text: "Remember no one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
    { text: "Life is what we make it, always has been, always will be.", author: "Grandma Moses" },
    { text: "The question isn't who is going to let me; it's who is going to stop me.", author: "Ayn Rand" },
    { text: "When everything seems to be going against you, remember that the airplane takes off against the wind.", author: "Henry Ford" },
    { text: "Leap and the net will appear.", author: "John Burroughs" }, // Leap Day Quote
    
    // March (31 days)
    { text: "It's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
    { text: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
    { text: "Either write something worth reading or do something worth writing.", author: "Benjamin Franklin" },
    { text: "Nothing is impossible, the word itself says, 'I'm possible!'", author: "Audrey Hepburn" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "If you can dream it, you can achieve it.", author: "Zig Ziglar" },
    { text: "Believe in yourself. You are braver than you think, more talented than you know.", author: "Roy T. Bennett" },
    { text: "I learned that courage was not the absence of fear, but the triumph over it.", author: "Nelson Mandela" },
    { text: "There is nothing impossible to they who will try.", author: "Alexander the Great" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "It's hard to beat a person who never gives up.", author: "Babe Ruth" },
    { text: "I wake up every morning and think to myself, 'how far can I push this company in the next 24 hours.'", author: "Leah Busque" },
    { text: "If people are doubting how far you can go, go so far that you can't hear them anymore.", author: "Michele Ruiz" },
    { text: "We need to accept that we won't always make the right decisions.", author: "Arianna Huffington" },
    { text: "Write it on your heart that every day is the best day in the year.", author: "Ralph Waldo Emerson" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama XIV" },
    { text: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill" },
    { text: "You can't fall if you don't climb. But there's no joy in living your whole life on the ground.", author: "Unknown" },
    { text: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link" },
    { text: "Whether you think you can or think you can't, you're right.", author: "Henry Ford" },
    { text: "Security is mostly a superstition. Life is either a daring adventure or nothing.", author: "Helen Keller" },
    { text: "The man who has confidence in himself gains the confidence of others.", author: "Hasidic Proverb" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Creativity is intelligence having fun.", author: "Albert Einstein" },
    { text: "What you lack in talent can be made up with desire, hustle and giving 110% all the time.", author: "Don Zimmer" },
    { text: "Do what you feel in your heart to be right – for you'll be criticized anyway.", author: "Eleanor Roosevelt" },
    { text: "Happiness is not by chance, but by choice.", author: "Jim Rohn" },
    { text: "You can't cross the sea merely by standing and staring at the water.", author: "Rabindranath Tagore" },
    { text: "Your limitation—it's only your imagination.", author: "Unknown" },
    { text: "Great things never come from comfort zones.", author: "Unknown" },
    
    // April (30 days)
    { text: "Success doesn't just find you. You have to go out and get it.", author: "Unknown" },
    { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
    { text: "Dream bigger. Do bigger.", author: "Unknown" },
    { text: "Don't stop when you're tired. Stop when you're done.", author: "Unknown" },
    { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
    { text: "Do something today that your future self will thank you for.", author: "Unknown" },
    { text: "Little things make big days.", author: "Unknown" },
    { text: "It's going to be hard, but hard does not mean impossible.", author: "Unknown" },
    { text: "Don't wait for opportunity. Create it.", author: "Unknown" },
    { text: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
    { text: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
    { text: "Dream it. Believe it. Build it.", author: "Unknown" },
    { text: "The difference between who you are and who you want to be is what you do.", author: "Unknown" },
    { text: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll" },
    { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
    { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "You learn more from failure than from success. Don't let it stop you.", author: "Unknown" },
    { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { text: "If you are working on something that you really care about, you don't have to be pushed.", author: "Steve Jobs" },
    { text: "People who are crazy enough to think they can change the world, are the ones who do.", author: "Rob Siltanen" },
    { text: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
    { text: "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk.", author: "Mohnish Pabrai" },
    { text: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
    { text: "Knowing is not enough; we must apply. Wishing is not enough; we must do.", author: "Johann Wolfgang Von Goethe" },
    { text: "Imagine your life is perfect in every respect; what would it look like?", author: "Brian Tracy" },
    { text: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link" },
    { text: "What's the point of being alive if you don't at least try to do something remarkable.", author: "Anonymous" },
    
    // May (31 days)
    { text: "Life is not about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { text: "Nothing in the world can take the place of Persistence.", author: "Calvin Coolidge" },
    { text: "You take your life in your own hands, and what happens? A terrible thing, no one to blame.", author: "Erica Jong" },
    { text: "If you're going through hell, keep going.", author: "Winston Churchill" },
    { text: "The distance between insanity and genius is measured only by success.", author: "Bruce Feirstein" },
    { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { text: "Happiness is a butterfly, which when pursued, is always beyond your grasp.", author: "Nathaniel Hawthorne" },
    { text: "If you can't explain it simply, you don't understand it well enough.", author: "Albert Einstein" },
    { text: "Blessed are those who can give without remembering and take without forgetting.", author: "Anonymous" },
    { text: "Do one thing every day that scares you.", author: "Anonymous" },
    { text: "What's the point of being alive if you don't at least try to do something remarkable.", author: "Anonymous" },
    { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" },
    { text: "We become what we think about most of the time.", author: "Earl Nightingale" },
    { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
    { text: "Twenty years from now you will be more disappointed by the things that you didn't do.", author: "Mark Twain" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "Life is too short to live the same day twice.", author: "Anonymous" },
    { text: "I find that when you have a real interest in life and a curious life, sleep is not the most important thing.", author: "Martha Stewart" },
    { text: "It's not what you look at that matters, it's what you see.", author: "Anonymous" },
    { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    { text: "The function of leadership is to produce more leaders, not more followers.", author: "Ralph Nader" },
    { text: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
    { text: "As we look ahead into the next century, leaders will be those who empower others.", author: "Bill Gates" },
    { text: "Before anything else, preparation is the key to success.", author: "Alexander Graham Bell" },
    { text: "Courage is resistance to fear, mastery of fear, not absence of fear.", author: "Mark Twain" },
    { text: "Only put off until tomorrow what you are willing to die having left undone.", author: "Pablo Picasso" },
    { text: "People ask the difference between a leader and a boss. The leader works in the open.", author: "Theodore Roosevelt" },
    { text: "Do not wait; the time will never be 'just right.' Start where you stand.", author: "Napoleon Hill" },
    { text: "Fortune favors the bold.", author: "Virgil" },
    { text: "People who succeed have momentum. The more they succeed, the more they want to succeed.", author: "Tony Robbins" },
    { text: "Don't let the fear of losing be greater than the excitement of winning.", author: "Robert Kiyosaki" },
    
    // June (30 days)
    { text: "If you really look closely, most overnight successes took a long time.", author: "Steve Jobs" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "The real test is not whether you avoid this failure, because you won't.", author: "Sheryl Sandberg" },
    { text: "I owe my success to having listened respectfully to the very best advice.", author: "John D. Rockefeller" },
    { text: "The starting point of all achievement is desire.", author: "Napoleon Hill" },
    { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
    { text: "If you want to achieve excellence, you can get there today.", author: "Thomas J. Watson" },
    { text: "All progress takes place outside the comfort zone.", author: "Michael John Bobak" },
    { text: "You may only succeed if you desire succeeding; you may only fail if you do not mind failing.", author: "Philippos" },
    { text: "Courage is grace under pressure.", author: "Ernest Hemingway" },
    { text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" },
    { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Some people dream of success, while other people get up every morning and make it happen.", author: "Wayne Huizenga" },
    { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { text: "Don't be distracted by criticism. Remember--the only taste of success some people get is to take a bite out of you.", author: "Zig Ziglar" },
    { text: "If you genuinely want something, don't wait for it -- teach yourself to be impatient.", author: "Gurbaksh Chahal" },
    { text: "The only thing worse than starting something and failing... is not starting something.", author: "Seth Godin" },
    { text: "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.", author: "Sheryl Sandberg" },
    { text: "Winners never quit and quitters never win.", author: "Vince Lombardi" },
    { text: "I never dreamed about success, I worked for it.", author: "Estée Lauder" },
    { text: "Success is getting what you want, happiness is wanting what you get.", author: "W. P. Kinsella" },
    { text: "The road to success is always under construction.", author: "Lily Tomlin" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Don't raise your voice, improve your argument.", author: "Desmond Tutu" },
    { text: "Character cannot be developed in ease and quiet.", author: "Helen Keller" },
    { text: "Great things are done by a series of small things brought together.", author: "Vincent Van Gogh" },
    { text: "If you can't yet do great things, do small things in a great way.", author: "Napoleon Hill" },
    { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    
    // July (31 days)
    { text: "There is no traffic jam along the extra mile.", author: "Roger Staubach" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Ryun" },
    { text: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin" },
    { text: "The question isn't who is going to let me; it's who is going to stop me.", author: "Ayn Rand" },
    { text: "There are no shortcuts to any place worth going.", author: "Beverly Sills" },
    { text: "Every strike brings me closer to the next home run.", author: "Babe Ruth" },
    { text: "Definiteness of purpose is the starting point of all achievement.", author: "W. Clement Stone" },
    { text: "Life is trying things to see if they work.", author: "Ray Bradbury" },
    { text: "The minute you settle for less than you deserve, you get even less than you settled for.", author: "Maureen Dowd" },
    { text: "In my experience, there is only one motivation, and that is desire.", author: "Jane Smiley" },
    { text: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
    { text: "What we fear doing most is usually what we most need to do.", author: "Tim Ferriss" },
    { text: "Do not be embarrassed by your failures, learn from them and start again.", author: "Richard Branson" },
    { text: "If you don't design your own life plan, chances are you'll fall into someone else's plan.", author: "Jim Rohn" },
    { text: "The biggest risk is not taking any risk.", author: "Mark Zuckerberg" },
    { text: "Never give in except to convictions of honor and good sense.", author: "Winston Churchill" },
    { text: "Expect problems and eat them for breakfast.", author: "Alfred A. Montapert" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't be afraid to stand for what you believe in, even if it means standing alone.", author: "Anonymous" },
    { text: "A year from now you may wish you had started today.", author: "Karen Lamb" },
    { text: "Things work out best for those who make the best of how things work out.", author: "John Wooden" },
    { text: "To live a creative life, we must lose our fear of being wrong.", author: "Anonymous" },
    { text: "If you are not willing to risk the usual you will have to settle for the ordinary.", author: "Jim Rohn" },
    { text: "Trust because you are willing to accept the risk, not because it's safe or certain.", author: "Anonymous" },
    { text: "Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea.", author: "Swami Vivekananda" },
    { text: "All our dreams can come true if we have the courage to pursue them.", author: "Walt Disney" },
    { text: "Good things come to people who wait, but better things come to those who go out and get them.", author: "Anonymous" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    
    // August (31 days)
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { text: "Don't count the days, make the days count.", author: "Muhammad Ali" },
    { text: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
    { text: "You may have to fight a battle more than once to win it.", author: "Margaret Thatcher" },
    { text: "A man can be as great as he wants to be.", author: "Vince Lombardi" },
    { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
    { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
    { text: "Things may come to those who wait, but only the things left by those who hustle.", author: "Abraham Lincoln" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { text: "You can't build a reputation on what you are going to do.", author: "Henry Ford" },
    { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
    { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
    { text: "I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou" },
    { text: "The best way out is always through.", author: "Robert Frost" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "In this life we cannot do great things. We can only do small things with great love.", author: "Mother Teresa" },
    { text: "Only a life lived for others is a life worthwhile.", author: "Albert Einstein" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "Live in the sunshine, swim the sea, drink the wild air.", author: "Ralph Waldo Emerson" },
    { text: "Go confidently in the direction of your dreams! Live the life you've imagined.", author: "Henry David Thoreau" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { text: "May you live every day of your life.", author: "Jonathan Swift" },
    { text: "Life itself is the most wonderful fairy tale.", author: "Hans Christian Andersen" },
    { text: "Do not let making a living prevent you from making a life.", author: "John Wooden" },
    { text: "Life is ours to be spent, not to be saved.", author: "D.H. Lawrence" },
    { text: "Keep smiling, because life is a beautiful thing and there's so much to smile about.", author: "Marilyn Monroe" },
    { text: "Life is a long lesson in humility.", author: "James M. Barrie" },
    
    // September (30 days)
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "Love the life you live. Live the life you love.", author: "Bob Marley" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", author: "Dr. Seuss" },
    { text: "Life is made of ever so many partings welded together.", author: "Charles Dickens" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Life is trying things to see if they work.", author: "Ray Bradbury" },
    { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison" },
    { text: "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.", author: "Henry Ford" },
    { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
    { text: "Life is never fair, and perhaps it is a good thing for most of us that it is not.", author: "Oscar Wilde" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "You only pass through this life once, you don't come back for an encore.", author: "Elvis Presley" },
    { text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" },
    { text: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "Whoever is happy will make others happy too.", author: "Anne Frank" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { text: "Life is a succession of lessons which must be lived to be understood.", author: "Ralph Waldo Emerson" },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    
    // October (31 days)
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "A creative man is motivated by the desire to achieve, not by the desire to beat others.", author: "Ayn Rand" },
    { text: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.", author: "David Brinkley" },
    { text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.", author: "Unknown" },
    { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { text: "Failure is the condiment that gives success its flavor.", author: "Truman Capote" },
    { text: "Hard times don't create heroes. It is during the hard times when the 'hero' within us is revealed.", author: "Bob Riley" },
    { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", author: "Jimmy Dean" },
    { text: "No matter what you're going through, there's a light at the end of the tunnel.", author: "Demi Lovato" },
    { text: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll" },
    { text: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.", author: "Helen Keller" },
    { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "To see what is right and not do it is a lack of courage.", author: "Confucius" },
    { text: "Reading is to the mind, as exercise is to the body.", author: "Brian Tracy" },
    { text: "Well done is better than well said.", author: "Benjamin Franklin" },
    { text: "The cure for boredom is curiosity. There is no cure for curiosity.", author: "Dorothy Parker" },
    { text: "A champion is defined not by their wins but by how they can recover when they fall.", author: "Serena Williams" },
    { text: "You can't be that kid standing at the top of the waterslide, overthinking it. You have to go down the chute.", author: "Tina Fey" },
    { text: "I'd rather regret the things I've done than regret the things I haven't done.", author: "Lucille Ball" },
    { text: "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it.", author: "Duchess Meghan" },
    { text: "If you don't like the road you're walking, start paving another one.", author: "Dolly Parton" },
    { text: "Real change, enduring change, happens one step at a time.", author: "Ruth Bader Ginsburg" },
    { text: "All dreams are within reach. All you have to do is keep moving towards them.", author: "Viola Davis" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "When you put love out in the world it travels, and it can touch people and reach people in ways that we never even expected.", author: "Laverne Cox" },
    { text: "Give light and people will find the way.", author: "Ella Baker" },
    { text: "It always seems impossible until it is done.", author: "Nelson Mandela" },
    
    // November (30 days)
    { text: "Don't count the days, make the days count.", author: "Muhammad Ali" },
    { text: "Definitions belong to the definers, not the defined.", author: "Toni Morrison" },
    { text: "When you have a dream, you've got to grab it and never let go.", author: "Carol Burnett" },
    { text: "Never allow a person to tell you no who doesn't have the power to say yes.", author: "Eleanor Roosevelt" },
    { text: "When it comes to luck, you make your own.", author: "Bruce Springsteen" },
    { text: "If you're having fun, that's when the best memories are built.", author: "Simone Biles" },
    { text: "Failure is the condiment that gives success its flavor.", author: "Truman Capote" },
    { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
    { text: "I never dreamed about success, I worked for it.", author: "Estée Lauder" },
    { text: "It's not what you look at that matters, it's what you see.", author: "Henry David Thoreau" },
    { text: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.", author: "Pelé" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "It is better to fail in originality than to succeed in imitation.", author: "Herman Melville" },
    { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    { text: "Success is getting what you want, happiness is wanting what you get.", author: "W.P. Kinsella" },
    { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.", author: "Jim Rohn" },
    { text: "I cannot give you the formula for success, but I can give you the formula for failure--It is: Try to please everybody.", author: "Herbert Bayard Swope" },
    { text: "Don't let what you cannot do interfere with what you can do.", author: "John Wooden" },
    { text: "You may have to fight a battle more than once to win it.", author: "Margaret Thatcher" },
    { text: "A man can be as great as he wants to be. If you believe in yourself and have the courage, the determination, the competitive drive and if you are willing to sacrifice the little things in life and pay the price for the things that are worthwhile, it can be done.", author: "Vince Lombardi" },
    { text: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.", author: "Dale Carnegie" },
    { text: "Nothing in the world can take the place of Persistence.", author: "Calvin Coolidge" },
    { text: "You take your life in your own hands, and what happens? A terrible thing, no one to blame.", author: "Erica Jong" },
    { text: "What seems to us as bitter trials are often blessings in disguise.", author: "Oscar Wilde" },
    { text: "The distance between insanity and genius is measured only by success.", author: "Bruce Feirstein" },
    
    // December (31 days)
    { text: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
    { text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
    { text: "The question isn't who is going to let me; it's who is going to stop me.", author: "Ayn Rand" },
    { text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", author: "Henry Ford" },
    { text: "It's not the load that breaks you down, it's the way you carry it.", author: "Lou Holtz" },
    { text: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.", author: "Jamie Paolinetti" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
    { text: "The person who says it cannot be done should not interrupt the person who is doing it.", author: "Chinese Proverb" },
    { text: "There are no traffic jams along the extra mile.", author: "Roger Staubach" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Don't raise your voice, improve your argument.", author: "Desmond Tutu" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "A goal is not always meant to be reached, it often serves simply as something to aim at.", author: "Bruce Lee" },
    { text: "You are what you believe yourself to be.", author: "Paulo Coelho" },
    { text: "I would rather die of passion than of boredom.", author: "Vincent van Gogh" },
    { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { text: "At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it.", author: "Dr. Phil" },
    { text: "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily.", author: "Zig Ziglar" },
    { text: "We become what we think about most of the time, and that's the strangest secret.", author: "Earl Nightingale" },
    { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    { text: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
    { text: "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.", author: "Booker T. Washington" },
    { text: "Certain things catch your eye, but pursue only those that capture the heart.", author: "Ancient Indian Proverb" },
    { text: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.", author: "Roy T. Bennett" },
    { text: "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.", author: "Nelson Mandela" },
    { text: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", author: "Aristotle" },
    { text: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.", author: "Jesus" },
    { text: "The ones who are crazy enough to think they can change the world, are the ones who do.", author: "Anonymous" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" }
];

// ===================================
// Application State
// ===================================
let currentDate = new Date();
let displayOffset = 0; // Offset from today in days

// ===================================
// Utility Functions
// ===================================

/**
 * Check if a year is a leap year
 */
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * Get the day of year (1-366) for a given date
 */
function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

/**
 * Get the total days in a year
 */
function getDaysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

/**
 * Format date as a readable string
 */
function formatDate(date) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Get the quote for a specific day of the year (1-366)
 * Handles leap years gracefully
 */
function getQuoteForDay(dayOfYear, year) {
    try {
        // Validate day of year
        const maxDays = getDaysInYear(year);
        if (dayOfYear < 1 || dayOfYear > maxDays) {
            throw new Error(`Invalid day of year: ${dayOfYear}. Must be between 1 and ${maxDays}.`);
        }

        // For non-leap years, skip Feb 29 (day 60)
        let quoteIndex = dayOfYear - 1;
        if (!isLeapYear(year) && dayOfYear > 59) {
            quoteIndex = dayOfYear; // Skip the leap day quote (index 59)
        }

        // Ensure index is within bounds
        if (quoteIndex >= quotes.length) {
            quoteIndex = quotes.length - 1;
        }

        return quotes[quoteIndex];
    } catch (error) {
        console.error('Error getting quote:', error);
        return {
            text: "Every day is a new opportunity to start again and make a positive change.",
            author: "Unknown"
        };
    }
}

/**
 * Update the display with quote and date information
 */
function updateDisplay(date) {
    try {
        // Get elements
        const quoteCard = document.getElementById('quoteCard');
        const quoteText = document.getElementById('quoteText');
        const quoteAuthor = document.getElementById('quoteAuthor');
        const currentDateEl = document.getElementById('currentDate');
        const dayOfYearEl = document.getElementById('dayOfYear');
        const leapYearIndicator = document.getElementById('leapYearIndicator');

        // Add updating class for animation
        quoteCard.classList.add('updating');

        // Wait for fade out animation
        setTimeout(() => {
            // Get day of year and quote
            const dayOfYear = getDayOfYear(date);
            const quote = getQuoteForDay(dayOfYear, date.getFullYear());
            const totalDays = getDaysInYear(date.getFullYear());
            const isLeap = isLeapYear(date.getFullYear());

            // Update text content
            quoteText.textContent = quote.text;
            quoteAuthor.textContent = quote.author;
            currentDateEl.textContent = formatDate(date);
            dayOfYearEl.textContent = `Day ${dayOfYear} of ${totalDays}`;

            // Update leap year indicator
            if (isLeap) {
                leapYearIndicator.textContent = `🎊 ${date.getFullYear()} is a leap year!`;
                leapYearIndicator.classList.add('visible');
                
                // Special message for Feb 29
                if (date.getMonth() === 1 && date.getDate() === 29) {
                    leapYearIndicator.textContent = `🎉 Happy Leap Day ${date.getFullYear()}!`;
                }
            } else {
                leapYearIndicator.classList.remove('visible');
            }

            // Remove updating class
            quoteCard.classList.remove('updating');
        }, 200);

    } catch (error) {
        console.error('Error updating display:', error);
        // Display error message to user
        document.getElementById('quoteText').textContent = 
            "An error occurred while loading the quote. Please try again.";
        document.getElementById('quoteAuthor').textContent = "Error";
    }
}

/**
 * Add days to a date
 */
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

/**
 * Navigate to previous day
 */
function goToPreviousDay() {
    displayOffset--;
    const displayDate = addDays(currentDate, displayOffset);
    updateDisplay(displayDate);
}

/**
 * Navigate to next day
 */
function goToNextDay() {
    displayOffset++;
    const displayDate = addDays(currentDate, displayOffset);
    updateDisplay(displayDate);
}

/**
 * Return to today
 */
function goToToday() {
    displayOffset = 0;
    updateDisplay(currentDate);
}

// ===================================
// Event Listeners & Initialization
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize with today's quote
    updateDisplay(currentDate);

    // Set up button event listeners
    const prevDayBtn = document.getElementById('prevDayBtn');
    const nextDayBtn = document.getElementById('nextDayBtn');
    const todayBtn = document.getElementById('todayBtn');

    if (prevDayBtn) {
        prevDayBtn.addEventListener('click', goToPreviousDay);
    }

    if (nextDayBtn) {
        nextDayBtn.addEventListener('click', goToNextDay);
    }

    if (todayBtn) {
        todayBtn.addEventListener('click', goToToday);
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToPreviousDay();
        } else if (e.key === 'ArrowRight') {
            goToNextDay();
        } else if (e.key === 'Home' || e.key === 't') {
            goToToday();
        }
    });

    // Update current date at midnight
    setInterval(() => {
        const now = new Date();
        if (now.getDate() !== currentDate.getDate()) {
            currentDate = now;
            if (displayOffset === 0) {
                updateDisplay(currentDate);
            }
        }
    }, 60000); // Check every minute
});

// ===================================
// Error Handling
// ===================================

window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});