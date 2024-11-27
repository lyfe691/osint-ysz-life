import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Lock, Database, Image as ImageIcon, ChevronDown, ChevronUp } from "lucide-react";

const difficultyColors = {
  easy: "bg-green-500/20 text-green-500",
  medium: "bg-yellow-500/20 text-yellow-500",
  hard: "bg-red-500/20 text-red-500"
};

const categoryIcons = {
  "Social Media": Globe,
  "Security": Lock,
  "Data Analysis": Database,
  "Image Search": ImageIcon
};

const ExerciseCard = ({ exercise }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = categoryIcons[exercise.category] || Globe;

  return (
    <Card className="border-secondary/10 bg-accent/50 backdrop-blur-sm h-[400px] flex flex-col">
      <CardHeader className="flex-grow-0">
        <div className="flex items-center justify-between">
          <Icon className="w-5 h-5 text-secondary/80" />
          <Badge className={`${difficultyColors[exercise.difficulty]}`}>
            {exercise.difficulty}
          </Badge>
        </div>
        <CardTitle className="mt-4 text-xl line-clamp-1">{exercise.title}</CardTitle>
        <CardDescription className={`text-gray-400 ${isExpanded ? '' : 'line-clamp-2'}`}>
          {exercise.description}
        </CardDescription>
        {exercise.description.length > 100 && (
          <Button
            variant="ghost"
            size="sm"
            className="p-0 h-6 text-secondary hover:text-secondary/80"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4 mr-1" />
            ) : (
              <ChevronDown className="h-4 w-4 mr-1" />
            )}
            {isExpanded ? "Show Less" : "Show More"}
          </Button>
        )}
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto">
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
      <CardFooter className="flex-grow-0">
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