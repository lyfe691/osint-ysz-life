import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const ExerciseViewer = ({ exercise }) => {
  const [showHint, setShowHint] = useState({});

  const toggleHint = (hintId) => {
    setShowHint((prev) => ({
      ...prev,
      [hintId]: !prev[hintId],
    }));
  };

  // Function to determine difficulty badge styles
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
    <div className="space-y-8 p-4">
      {/* Header Section */}
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

      {/* Background Section */}
      <Card className="border-secondary/20 bg-gray-800 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-secondary mb-3">
            Background
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 leading-relaxed">{exercise.sections.background}</p>
        </CardContent>
      </Card>

      {/* Objectives Section */}
      <Card className="border-secondary/20 bg-gray-800 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-secondary mb-3">
            Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {exercise.sections.objectives.map((objective, index) => (
              <li key={index} className="ml-4">
                {objective}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Tools Section */}
      <Card className="border-secondary/20 bg-gray-800 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-secondary mb-3">
            Recommended Tools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercise.sections.tools.map((tool, index) => (
              <motion.div
                key={index}
                className="p-5 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-bold text-indigo-400 mb-2">{tool.name}</h4>
                <p className="text-gray-300 mb-4">{tool.description}</p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-400 hover:underline"
                >
                  Learn More <span className="ml-1">&rarr;</span>
                </a>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tasks Section */}
      <Card className="border-secondary/20 bg-gray-800 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-secondary mb-3">
            Tasks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {exercise.sections.tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
              >
                <span className="text-gray-300">{task.description}</span>
                <Badge variant="outline" className="text-indigo-400 border-indigo-400">
                  {task.points} Points
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hints Section */}
      <Card className="border-secondary/20 bg-gray-800 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-secondary mb-3">
            Hints
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {exercise.sections.hints.map((hint) => (
              <motion.div
                key={hint.id}
                className="p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Hint #{hint.id}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleHint(hint.id)}
                    className="text-indigo-400 hover:bg-indigo-500/10 transition-colors duration-200 flex items-center"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    {showHint[hint.id] ? "Hide" : "Reveal"}
                  </Button>
                </div>
                {showHint[hint.id] && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-gray-300"
                  >
                    {hint.text}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resources Section */}
      <Card className="border-secondary/20 bg-gray-800 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-secondary mb-3">
            Additional Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {exercise.sections.resources.map((resource, index) => (
              <motion.div
                key={index}
                className="p-5 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-bold text-indigo-400 mb-2">{resource.title}</h4>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-400 hover:underline"
                >
                  Visit Resource <span className="ml-1">&rarr;</span>
                </a>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

  
    </div>
  );
};

export default ExerciseViewer;
