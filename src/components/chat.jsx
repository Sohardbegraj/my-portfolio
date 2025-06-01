import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaMinus } from 'react-icons/fa';

const MESSAGE_DB = {
  swear: ['mkl', 'bkl', 'gandu', 'moron', 'bastard', 'fucking', 'wtf','fuck','kya bakchodi', 'gali', 'gali de', 'gali mat de', 'gali mat do'],
  requestHelp: ['help', 'madad', 'help me', 'madad karo', 'kya karu', 'kya karna hai'],
  requestAnswer: ['kya', 'Do', 'kon', 'bta mujhe', 'Which', 'Are you', 'kyu', 'sun','WHAT','who','when'],
  requestLocation: ['khn', 'location', 'address','where'],
  requestAction: ['can', 'Could'],
  question: ['\\?'],
  agrees: ['ok', 'agreed', 'yes', 'true', 'good'],
  disagrees: ['no', "don't", 'false'],
  hasFun: ['haha', 'lol', 'lmao', 'ahah', 'aaha', 'haah'],
  personal: ['TU', 'tum', 'you', 'your', 'yourself', 'yourself?', 'you?'],
  greets: ['hi', 'hello', 'hey', 'sup', 'yo', 'what\'s up','wbu']
};

function getIntention(message) {
  const intentions = Object.fromEntries(Object.keys(MESSAGE_DB).map(k => [k, false]));
  for (const key in MESSAGE_DB) {
    for (const word of MESSAGE_DB[key]) {
      if (new RegExp(word, 'i').test(message)) {
        intentions[key] = true;
      }
    }
  }
  return intentions;
}

function generateReply(message) {
  const intent = getIntention(message);
  const rand = arr => arr[Math.floor(Math.random() * arr.length)];

  if (intent.requestAnswer) {
    if (intent.swear) return `${message} That's rude bhai :(`;
    if (intent.personal)
      return rand([
        "mein kya mein...tu?",
        "Sohard told me I don't exist.. is it true?",
        "Mmmmmh..I think I'm just a regular cat, are you human?"
      ]);
    return rand(["mujhe kya, mein toh billa hoon", "isse mujhe kya", "mujhe kya pata, main toh billa hoon"]);
  }

  if (intent.requestAction) {
    if (intent.swear) return rand(["I don't do s**t", "ache se bol, main kuch nahi karunga"]);
    return rand(["Sure, ek minute", "Of course, bas aapke liye", "samjho HO GYA"]);
  }

  if (intent.hasFun) return rand(["LOL", "looooool", "hAHA!", ":)"]);

  if (intent.greets) return rand(["hey :) so.. kesa rha vacation aapka???", "khna tha bhai?", "ok, kya haal chaal?"]);

  if (intent.swear) return rand(["Whoa there... dedi gali !", "OHH GALI MAT DEO"]);

  return rand([
    "KHANA KHANA KHANA",
    "I am a cat, I don't know much",
    "ah.. almost forgot, Sohard told me to tell you that FUCK OFF",
  ]);
}

export default function ChatApp() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: "AUR BHAI! AAJ YHN KESE!"
        }
      ]);
      setOpen(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    const reply = generateReply(input.trim());
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 1200);
  };

  return (
    <motion.div
      className="fixed md:right-24 right-0 bottom-4 w-64 md:h-[350px] h-[320px] bg-black text-white shadow-xl rounded-xl flex flex-col overflow-hidden"
      animate={{ y: open ? 0 : 300 }}
      transition={{ type: 'spring', stiffness: 90 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-br from-black via-gray-800 to-black relative">
        <span className="uppercase text-xs tracking-widest">whisker's</span>
        <div className="flex space-x-2">
          <FaMinus onClick={() => setOpen(!open)} className="cursor-pointer text-yellow-400" />
        </div>
      </div>

      {/* Messages */}
      <div ref={containerRef} className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-black px-3 py-2 space-y-3 bg-black">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2 ${
              msg.sender === 'bot' ? 'justify-start' : 'justify-end'
            }`}
          >
            {msg.sender === 'bot' && (
              <div
                className="w-6 h-6 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/023/142/987/non_2x/angry-cat-illustration-isolated-on-gray-background-free-vector.jpg')"
                }}
              ></div>
            )}
            <div
              className={`rounded-xl px-3 py-2 text-sm max-w-[70%] leading-tight ${
                msg.sender === 'bot'
                  ? 'bg-yellow-800 text-white'
                  : 'bg-cyan-700 text-white'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSend()}
        placeholder="Type a message"
        className="w-full px-4 py-2 bg-black text-white text-sm focus:outline-none placeholder-gray-400 font-mono"
      />
    </motion.div>
  );
}
