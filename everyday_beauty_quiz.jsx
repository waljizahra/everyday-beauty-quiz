import React, { useState } from 'react';

export default function EverydayBeautyQuiz() {
  const questions = [
    { question: 'When you think of everyday beauty, what comes to mind first?', options: [
      { text: 'Fresh flowers on the table and soft light in the morning.', type: 'Soft Beauty' },
      { text: 'Clean counters, quiet music, and peace of mind.', type: 'Calm Beauty' },
      { text: 'Dim lights, cozy corners, and deep conversations.', type: 'Mysterious Beauty' },
      { text: 'A golden sunset and laughter over a home-cooked meal.', type: 'Radiant Beauty' }
    ]},
    { question: 'How do you like your home to feel?', options: [
      { text: 'Light, cozy, and personal.', type: 'Soft Beauty' },
      { text: 'Simple, calm, and balanced.', type: 'Calm Beauty' },
      { text: 'Moody, soulful, and layered.', type: 'Mysterious Beauty' },
      { text: 'Warm, welcoming, and full of life.', type: 'Radiant Beauty' }
    ]},
    { question: 'How do you usually notice beauty in everyday life?', options: [
      { text: 'In small details — a flower on a path, a handwritten note, soft textures.', type: 'Soft Beauty' },
      { text: 'In calm, organized spaces or quiet, uncluttered moments.', type: 'Calm Beauty' },
      { text: 'In depth, contrast, or mood — shadows, candles, intimate conversations.', type: 'Mysterious Beauty' },
      { text: 'In warmth, energy, and life — sunlight, laughter, vibrant colors.', type: 'Radiant Beauty' }
    ]},
    { question: 'What kind of beauty inspires you most?', options: [
      { text: 'Soft and delicate.', type: 'Soft Beauty' },
      { text: 'Minimal and pure.', type: 'Calm Beauty' },
      { text: 'Deep and mysterious.', type: 'Mysterious Beauty' },
      { text: 'Natural and vibrant.', type: 'Radiant Beauty' }
    ]},
    { question: 'In your daily routine, beauty shows up through…', options: [
      { text: 'Little rituals and gentle touches.', type: 'Soft Beauty' },
      { text: 'Simplicity, order, and mindful arrangements.', type: 'Calm Beauty' },
      { text: 'Mood, texture, and emotion.', type: 'Mysterious Beauty' },
      { text: 'Warmth, color, and shared experiences.', type: 'Radiant Beauty' }
    ]},
    { question: 'Your favorite space outside would be…', options: [
      { text: 'A blooming garden or a quiet flower-filled corner.', type: 'Soft Beauty' },
      { text: 'A serene lake, open field, or beach with clean lines.', type: 'Calm Beauty' },
      { text: 'A forest path, hidden courtyard, or ivy-covered walls.', type: 'Mysterious Beauty' },
      { text: 'A sun-drenched patio, terrace, or lively city park.', type: 'Radiant Beauty' }
    ]},
    { question: 'Which of these would you display in your home?', options: [
      { text: 'Soft textiles, flowers in vases, art with delicate details.', type: 'Soft Beauty' },
      { text: 'Minimalist furniture, clear surfaces, geometric decor.', type: 'Calm Beauty' },
      { text: 'Dark woods, textured fabrics, vintage or antique pieces.', type: 'Mysterious Beauty' },
      { text: 'Warm-toned pottery, vibrant plants, handmade or colorful items.', type: 'Radiant Beauty' }
    ]},
    { question: 'Which feeling do you want to cultivate most daily?', options: [
      { text: 'Tenderness and creativity.', type: 'Soft Beauty' },
      { text: 'Calm and clarity.', type: 'Calm Beauty' },
      { text: 'Depth and reflection.', type: 'Mysterious Beauty' },
      { text: 'Joy and warmth.', type: 'Radiant Beauty' }
    ]}
  ];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (type) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const calculateResult = () => {
    const counts = answers.reduce((acc, type) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
  };

  const result = answers.length === questions.length ? calculateResult() : null;

  const resultText = {
    'Soft Beauty': {
      title: 'Soft Beauty',
      desc: 'You find beauty in gentleness, creativity, and small moments. A bloom on your windowsill, the feel of soft fabric, the quiet glow of morning — your world celebrates tenderness.'
    },
    'Calm Beauty': {
      title: 'Calm Beauty',
      desc: 'You see beauty in peace, simplicity, and balance. You gravitate toward open space, natural light, and the quiet hum of stillness. For you, beauty is serenity.'
    },
    'Mysterious Beauty': {
      title: 'Mysterious Beauty',
      desc: 'You are drawn to shadow, depth, and meaning. Candlelight, texture, emotion — these are your language. You find beauty in what feels honest and real.'
    },
    'Radiant Beauty': {
      title: 'Radiant Beauty',
      desc: 'You bring light and energy wherever you go. To you, beauty is warmth — laughter, sunshine, and the way life shines through imperfection.'
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-yellow-50 p-6 text-gray-800">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md text-center">
        {!result ? (
          <>
            <h2 className="text-xl font-semibold mb-4">{questions[current].question}</h2>
            <div className="grid gap-3">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt.type)}
                  className="bg-pink-100 hover:bg-pink-200 rounded-xl py-2 transition text-gray-700"
                >
                  {opt.text}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500">Question {current + 1} of {questions.length}</p>
          </>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-2">{resultText[result].title}</h2>
            <p className="text-gray-700 mb-4">{resultText[result].desc}</p>
            <button
              onClick={() => {
                setCurrent(0);
                setAnswers([]);
              }}
              className="mt-2 bg-pink-300 hover:bg-pink-400 text-gray-800 rounded-xl px-4 py-2"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
