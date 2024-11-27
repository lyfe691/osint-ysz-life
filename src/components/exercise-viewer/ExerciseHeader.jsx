import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const ExerciseHeader = ({ exercise }) => {
  const getDifficultyStyles = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-600/20 text-green-600";
      case "medium":
        return "bg-yellow-500/20 text-yellow-500";
      case "hard":
        return "bg-red-600/20 text-red-600";
      default:
        return "bg-gray-500/20 text-gray-500";
    }
  };

  return (
    <Card className="border-secondary/20 bg-gray-800 shadow-lg rounded-lg">
      <CardHeader>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <Badge variant="outline" className="text-secondary border-secondary/30">
              {exercise.category}
            </Badge>
            <Badge variant="outline" className={getDifficultyStyles(exercise.difficulty)}>
              {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
            </Badge>
          </div>
          <Badge className="bg-indigo-600/20 text-indigo-600">
            Latest Update
          </Badge>
        </div>
        <CardTitle className="text-3xl font-semibold text-white mb-2">
          {exercise.title}
        </CardTitle>
        <p className="text-gray-300">{exercise.description}</p>
      </CardHeader>
    </Card>
  );
};

export default ExerciseHeader;