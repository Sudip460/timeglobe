export const personalities = [
  {
    id: 1,
    name: "Albert Einstein",
    country: "Germany/USA",
    era: "1879-1955",
    bio: "Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of science.",
    timeline: [
      { year: 1879, event: "Born in Ulm, Germany" },
      { year: 1905, event: "Published four groundbreaking papers, including special relativity" },
      { year: 1915, event: "Formulated general theory of relativity" },
      { year: 1921, event: "Awarded Nobel Prize in Physics" },
      { year: 1933, event: "Emigrated to USA due to Nazi regime" },
      { year: 1955, event: "Died in Princeton, New Jersey" }
    ],
    achievements: ["Theory of Relativity", "E=mc²", "Nobel Prize in Physics"],
    multimedia: {
      images: ["https://example.com/einstein.jpg"],
      videos: ["https://example.com/einstein-video.mp4"],
      writings: ["Relativity: The Special and General Theory"]
    },
    quotes: ["Imagination is more important than knowledge.", "The only source of knowledge is experience."]
  },
  {
    id: 2,
    name: "Mahatma Gandhi",
    country: "India",
    era: "1869-1948",
    bio: "Mohandas Karamchand Gandhi was an Indian lawyer, anti-colonial nationalist, and political ethicist, who employed nonviolent resistance to lead the successful campaign for India's independence from British rule.",
    timeline: [
      { year: 1869, event: "Born in Porbandar, India" },
      { year: 1893, event: "Moved to South Africa, began civil rights work" },
      { year: 1915, event: "Returned to India, joined Indian National Congress" },
      { year: 1920, event: "Launched Non-Cooperation Movement" },
      { year: 1930, event: "Led Salt March against British salt monopoly" },
      { year: 1947, event: "India gained independence" },
      { year: 1948, event: "Assassinated in Delhi" }
    ],
    achievements: ["Indian Independence", "Non-violent resistance philosophy", "Civil rights leader"],
    multimedia: {
      images: ["https://example.com/gandhi.jpg"],
      videos: ["https://example.com/gandhi-video.mp4"],
      writings: ["The Story of My Experiments with Truth"]
    },
    quotes: ["Be the change that you wish to see in the world.", "An eye for an eye will only make the whole world blind."]
  },
  {
    id: 3,
    name: "Socrates",
    country: "Greece",
    era: "c. 470-399 BC",
    bio: "Socrates was a Greek philosopher from Athens who is credited as one of the founders of Western philosophy, and as being the first moral philosopher of the Western ethical tradition of thought.",
    timeline: [
      { year: -470, event: "Born in Athens, Greece" },
      { year: -431, event: "Served in Peloponnesian War" },
      { year: -423, event: "Mentioned in Aristophanes' play 'The Clouds'" },
      { year: -399, event: "Tried and executed for corrupting the youth and impiety" }
    ],
    achievements: ["Socratic method", "Foundation of Western philosophy", "Ethical inquiry"],
    multimedia: {
      images: ["https://example.com/socrates.jpg"],
      videos: [],
      writings: ["Dialogues by Plato"]
    },
    quotes: ["I know that I know nothing.", "The unexamined life is not worth living."]
  },
  {
    id: 4,
    name: "Rabindranath Tagore",
    country: "India",
    era: "1861-1941",
    bio: "Rabindranath Tagore was a Bengali polymath who reshaped Bengali literature and music, as well as Indian art with Contextual Modernism in the late 19th and early 20th centuries.",
    timeline: [
      { year: 1861, event: "Born in Kolkata, India" },
      { year: 1878, event: "Published first poem" },
      { year: 1901, event: "Established Santiniketan school" },
      { year: 1910, event: "Published Gitanjali" },
      { year: 1913, event: "Awarded Nobel Prize in Literature" },
      { year: 1941, event: "Died in Kolkata" }
    ],
    achievements: ["Nobel Prize in Literature", "National Anthem of India", "Santiniketan University"],
    multimedia: {
      images: ["https://example.com/tagore.jpg"],
      videos: ["https://example.com/tagore-video.mp4"],
      writings: ["Gitanjali", "The Home and the World"]
    },
    quotes: ["You can't cross the sea merely by standing and staring at the water.", "The highest education is that which does not merely give us information but makes our life in harmony with all existence."]
  }
];

export const countries = [
  { name: "Germany", lat: 51.1657, lng: 10.4515, personalities: [1] },
  { name: "India", lat: 20.5937, lng: 78.9629, personalities: [2, 4] },
  { name: "Greece", lat: 39.0742, lng: 21.8243, personalities: [3] },
  { name: "USA", lat: 37.0902, lng: -95.7129, personalities: [1] } // Einstein also associated with USA
];
