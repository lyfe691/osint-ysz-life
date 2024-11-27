import { useState } from "react";
import ExerciseCard from "@/components/ExerciseCard";
import Navigation from "@/components/Navigation";
import { exercises } from "@/data/exercises";
import ExerciseViewer from "@/components/ExerciseViewer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 6;

const Index = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [difficulty, setDifficulty] = useState("all");

  const filteredExercises = exercises.filter(
    (exercise) => difficulty === "all" || exercise.difficulty === difficulty
  );

  const totalPages = Math.ceil(filteredExercises.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedExercises = filteredExercises.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="flex flex-col flex-grow">
      <Navigation />
      <div className="container py-12 flex-grow flex flex-col">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">OSINT Excercises</h1>
          <p className="text-xl text-gray-400">These are some excersises I put together for you completely for free!</p>
        </header>

        <div className="mb-8">
          <Select onValueChange={setDifficulty} defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Difficulties</SelectItem>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-8">
            Available Exercises ({filteredExercises.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedExercises.map((exercise) => (
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

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;