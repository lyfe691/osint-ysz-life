import { useState } from "react";
import ExerciseCard from "@/components/ExerciseCard";
import Navigation from "@/components/Navigation";
import { exercises } from "@/data/exercises";
import ExerciseViewer from "@/components/ExerciseViewer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Index = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <div className="container py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">OSINT Training Ground</h1>
          <p className="text-xl text-gray-400">Master the art of Open Source Intelligence</p>
        </header>

        <section>
          <h2 className="text-2xl font-bold mb-8">Available Exercises</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exercises.map((exercise) => (
              <Dialog key={exercise.id}>
                <DialogTrigger asChild>
                  <div onClick={() => setSelectedExercise(exercise)} className="cursor-pointer">
                    <ExerciseCard exercise={exercise} />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-primary">
                  <ExerciseViewer exercise={exercise} />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;