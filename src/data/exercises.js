export const exercises = [

  // IMPORTANT: ALWAYS UPDATE THE ID IF CREATING A NEW EXERCISE.


  {
    id: 1,
    title: "Image Analysis #01",
    description: "Learn how to analyze images and track them down using tools.",
    difficulty: "easy", 
    category: "Image Search",
    tags: ["maps", "image search"],
    sections: {
      background: `In this exercise you'll learn how to gather information from images and put them to use.`,
      tasks: [
        {
          id: 1,
          description: "Find the coordinates of where this image was taken.",
        },
        {
          id: 2,
          description: "If possible, provide a different angle from where the image was taken.",
        },
      ],
      hints: [
        {
          id: 1,
          text: "Just simply take hints from the picture and Google them! You can also use image search like Google Image Search, but it's not necessary.",
        },
        {
          id: 2,
          text: "Use Google Maps to get the coordinates. If you found other tools that did so for you, that's good too.",
        },
        {
          id: 3, 
          text: "Use Google Earth Pro to get the other angle. It's linked below."
        }
      ],
      resources: [
        {
          title: "OSINT Framework",
          url: "https://osintframework.com/",
          description: "Comprehensive collection of OSINT tools and resources.",
        },
        {
          title: "Google Earth Pro",
          url: "https://www.google.com/earth/about/versions/#earth-pro",
          description: "Advanced Google Earth.",
        }
      ],
    },
    media: {
      type: "image", // 'image' or 'video'
      url: "/images/exercises/001/001.png", 
    },

    resultVideoUrl: "", 
  },

  {
    id: 2,
    title: "Image Analysis #02",
    description: "Learn how to analyze images and track them down using tools.",
    difficulty: "easy", 
    category: "Image Search",
    tags: ["maps", "image search"],
    sections: {
      background: `In this exercise you'll learn how to gather information from images and put them to use.`,
      tasks: [
        {
          id: 1,
          description: "Locate the country of this image.",
        },
        {
          id: 2,
          description: "Locate the city.",
        },
        {
          id: 3, 
          description: "If possible, provide the approximate coordindates. It should have the same angle. ",
        },
      ],
      hints: [
        {
          id: 1,
          text: "Identify the language on the posters and read them.",
        },
        {
          id: 2, 
          text: "Look for hints on google maps in the city like 'National Amusement Park'.",
        },
        {
          id: 3, 
          text: "Use tools like Google Earth Pro to get the other angle. It's linked below."
        }
      ],
      resources: [
        {
          title: "OSINT Framework",
          url: "https://osintframework.com/",
          description: "Comprehensive collection of OSINT tools and resources.",
        },
        {
          title: "Google Earth Pro",
          url: "https://www.google.com/earth/about/versions/#earth-pro",
          description: "Advanced Google Earth.",
        }
      ],
    },
    media: {
      type: "image", // 'image' or 'video'
      url: "/images/exercises/002/002.png", 
    },

    resultVideoUrl: "", 
  },

  
];
