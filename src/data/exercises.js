// data/exercises.js

export const exercises = [
 /*
  {
    id: 1,
    title: "Placeholder",
    description: "Learn how to analyze and track digital footprints through social media platforms.",
    difficulty: "easy", 
    category: "Social Media",
    tags: ["social", "basic", "footprint"],
    sections: {
      background: `In this exercise, you'll learn the fundamentals of analyzing social media profiles 
                  to gather intelligence. You'll be working with a fictional character's online presence 
                  to practice safe and ethical OSINT techniques.`,
      tasks: [
        {
          id: 1,
          description: "Find all social media accounts using the username 'techexplorer92'",
        },
        {
          id: 2,
          description: "Create a timeline of the target's posts from the last 3 months",
        },
        {
          id: 3,
          description: "Identify and map key connections (minimum 3 frequent contacts)",
        },
        {
          id: 4,
          description: "Submit a comprehensive report of your findings",
        },
      ],
      hints: [
        {
          id: 1,
          text: "Start with popular platforms like Twitter, Instagram, and LinkedIn.",
        },
        {
          id: 2,
          text: "Look for recurring patterns in posting times and locations.",
        },
        {
          id: 3,
          text: "Check profile pictures across platforms for consistency.",
        },
      ],
      resources: [
        {
          title: "OSINT Framework",
          url: "https://osintframework.com/",
          description: "Comprehensive collection of OSINT tools and resources.",
        },
        {
          title: "Social Media OSINT Techniques",
          url: "https://medium.com/@Peter_UXer/osint-how-to-find-information-on-anyone-5029a3c7fd56",
          description: "Detailed guide on social media investigation techniques.",
        },
      ],
    },
    media: {
      type: "video", // 'image' or 'video'
      url: "/videos/exercises/001/s.mkv", 
    },
  },*/

  {
    id: 1,
    title: "Image Analysis",
    description: "Learn how to analyze images and track them down using tools.",
    difficulty: "easy", 
    category: "Image Search",
    tags: ["maps", "image search"],
    sections: {
      background: `In this exercise you'll learn how to gather information from images and put them to use.`,
      tasks: [
        {
          id: 1,
          description: "Find the coordinates of where this image was taken. ",
        },
        {
          id: 2,
          description: "If possible provide a different angle from where the image was taken.",
        },

      ],
      hints: [
        {
          id: 1,
          text: "Use tools like google image search or image to text wesbites. It helps if you dont overthink and just do the obvious.",
        },
        {
          id: 2,
          text: "Use google maps to get the coordinates. If you found other tools that did so for you thats good too.",
        },
        {
          id: 3, 
          text: "Use google earth pro to get the other angle. Its linked below."
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
          url: " https://www.google.com/earth/about/versions/#earth-pro",
          description: "Adnvanced google earth.",
        }
      ],
    },
    media: {
      type: "image", // 'image' or 'video'
      url: "/images/exercises/002/002.png", 
    },
  }
];
