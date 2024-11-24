import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Lock, Database } from "lucide-react";

const difficultyColors = {
  easy: "bg-green-500/20 text-green-500",
  medium: "bg-yellow-500/20 text-yellow-500",
  hard: "bg-red-500/20 text-red-500"
};

const categoryIcons = {
  "Social Media": Globe,
  "Security": Lock,
  "Data Analysis": Database
};

const ExerciseCard = ({ exercise }) => {
  const Icon = categoryIcons[exercise.category] || Globe;
  
  return (
    <Card className="border-secondary/10 bg-accent/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Icon className="w-5 h-5 text-secondary/80" />
          <Badge className={`${difficultyColors[exercise.difficulty]}`}>
            {exercise.difficulty}
          </Badge>
        </div>
        <CardTitle className="mt-4 text-xl">{exercise.title}</CardTitle>
        <CardDescription className="text-gray-400">{exercise.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {exercise.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="text-secondary/80 border-secondary/20"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-secondary/10 text-secondary hover:bg-secondary/20 border border-secondary/20"
          variant="outline"
        >
          Start Challenge
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExerciseCard;