import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const ExerciseViewer = ({ exercise }) => {
  const [showHint, setShowHint] = useState({});

  const toggleHint = (hintId) => {
    setShowHint(prev => ({
      ...prev,
      [hintId]: !prev[hintId]
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <Card className="border-secondary/10 bg-accent/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="text-secondary border-secondary/20">
              {exercise.category}
            </Badge>
            <Badge className={
              exercise.difficulty === "easy" ? "bg-green-500/20 text-green-500" :
              exercise.difficulty === "medium" ? "bg-yellow-500/20 text-yellow-500" :
              "bg-red-500/20 text-red-500"
            }>
              {exercise.difficulty}
            </Badge>
          </div>
          <CardTitle className="text-2xl mb-2">{exercise.title}</CardTitle>
          <p className="text-gray-400">{exercise.description}</p>
        </CardHeader>
      </Card>

      {/* Background Section */}
      <Card className="border-secondary/10 bg-accent/50">
        <CardHeader>
          <CardTitle className="text-xl text-secondary">Background</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">{exercise.sections.background}</p>
        </CardContent>
      </Card>

      {/* Objectives Section */}
      <Card className="border-secondary/10 bg-accent/50">
        <CardHeader>
          <CardTitle className="text-xl text-secondary">Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            {exercise.sections.objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Tools Section */}
      <Card className="border-secondary/10 bg-accent/50">
        <CardHeader>
          <CardTitle className="text-xl text-secondary">Recommended Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {exercise.sections.tools.map((tool, index) => (
              <div key={index} className="p-4 rounded-lg bg-primary/20">
                <h4 className="font-bold text-secondary mb-2">{tool.name}</h4>
                <p className="text-gray-400 mb-2">{tool.description}</p>
                <a 
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tasks Section */}
      <Card className="border-secondary/10 bg-accent/50">
        <CardHeader>
          <CardTitle className="text-xl text-secondary">Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {exercise.sections.tasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-4 rounded-lg bg-primary/20">
                <span className="text-gray-400">{task.description}</span>
                <Badge variant="outline" className="text-secondary border-secondary/20">
                  {task.points} points
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hints Section */}
      <Card className="border-secondary/10 bg-accent/50">
        <CardHeader>
          <CardTitle className="text-xl text-secondary">Hints</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {exercise.sections.hints.map((hint) => (
              <motion.div
                key={hint.id}
                className="p-4 rounded-lg bg-primary/20"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Hint #{hint.id}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleHint(hint.id)}
                    className="text-secondary hover:bg-secondary/20"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    {showHint[hint.id] ? "Hide" : "Reveal"}
                  </Button>
                </div>
                {showHint[hint.id] && (
                  <p className="mt-2 text-gray-400">{hint.text}</p>
                )}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resources Section */}
      <Card className="border-secondary/10 bg-accent/50">
        <CardHeader>
          <CardTitle className="text-xl text-secondary">Additional Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {exercise.sections.resources.map((resource, index) => (
              <div key={index} className="p-4 rounded-lg bg-primary/20">
                <h4 className="font-bold text-secondary mb-2">{resource.title}</h4>
                <p className="text-gray-400 mb-2">{resource.description}</p>
                <a 
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  Visit Resource →
                </a>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Submission Requirements Section */}
      <Card className="border-secondary/10 bg-accent/50">
        <CardHeader>
          <CardTitle className="text-xl text-secondary">Submission Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 mb-4">Format: {exercise.sections.submission.format}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            {exercise.sections.submission.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExerciseViewer;