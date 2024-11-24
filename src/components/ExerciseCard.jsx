import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Lock, Database } from "lucide-react";

const difficultyColors = {
  easy: "bg-green-500",
  medium: "bg-yellow-500",
  hard: "bg-red-500"
};

const categoryIcons = {
  "Social Media": Globe,
  "Security": Lock,
  "Data Analysis": Database
};

const ExerciseCard = ({ exercise }) => {
  const Icon = categoryIcons[exercise.category] || Globe;
  
  return (
    <Card className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20 bg-accent">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Icon className="w-6 h-6 text-secondary" />
          <Badge className={`${difficultyColors[exercise.difficulty]} text-white`}>
            {exercise.difficulty}
          </Badge>
        </div>
        <CardTitle className="mt-4">{exercise.title}</CardTitle>
        <CardDescription className="text-gray-400">{exercise.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          {exercise.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-secondary border-secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-secondary text-primary hover:bg-secondary/80">
          Start Challenge
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExerciseCard;