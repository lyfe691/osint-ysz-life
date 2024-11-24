import { useState } from "react";
import ExerciseCard from "@/components/ExerciseCard";

const SAMPLE_EXERCISES = [
  {
    id: 1,
    title: "Social Media Sleuth",
    description: "Track down information about a fictional person using only their social media presence.",
    difficulty: "easy",
    category: "Social Media",
    tags: ["social", "basic"],
    points: 100
  },
  {
    id: 2,
    title: "Digital Footprint Analysis",
    description: "Analyze and map out the digital footprint of a given target.",
    difficulty: "medium",
    category: "Security",
    tags: ["security", "footprint"],
    points: 200
  },
  {
    id: 3,
    title: "Data Mining Challenge",
    description: "Extract and analyze patterns from a large dataset to find hidden connections.",
    difficulty: "hard",
    category: "Data Analysis",
    tags: ["data", "advanced"],
    points: 300
  }
];

const Index = () => {
  const [exercises] = useState(SAMPLE_EXERCISES);

  return (
    <div className="min-h-screen matrix-bg">
      <div className="container py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">OSINT Training Ground</h1>
          <p className="text-xl text-gray-400">Master the art of Open Source Intelligence</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Available Exercises</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;