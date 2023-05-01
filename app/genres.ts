export const genres = [
    {
      value: "FIC",
      label: "Fiction",
      emoji: "📚",
    },
    {
      value: "NF",
      label: "Non-fiction",
      emoji: "📘",
    },
    {
      value: "SF",
      label: "Science Fiction",
      emoji: "🚀",
    },
    {
      value: "FAN",
      label: "Fantasy",
      emoji: "🧙",
    },
    {
      value: "ROM",
      label: "Romance",
      emoji: "💞",
    },
    // Add more genres with their respective emojis here
  ];

  export const getEmojiByLabel = (label: string) => {
    const genre = genres.find((item) => item.label === label);
    return genre ? genre.emoji : null;
  };
  
  