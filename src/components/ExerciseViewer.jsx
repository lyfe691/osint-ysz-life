// components/ExerciseViewer.jsx

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, ExternalLink, Download } from "lucide-react";
import ReactPlayer from "react-player"; // react player for unblurrynes

const difficultyColors = {
  easy: "bg-green-500/20 text-green-500",
  medium: "bg-yellow-500/20 text-yellow-500",
  hard: "bg-red-500/20 text-red-500",
  expert: "bg-red-700/20 text-red-700", 
};

const ExerciseViewer = ({ exercise }) => {
  const [showHint, setShowHint] = useState({});
  const [showResult, setShowResult] = useState(false);

  const toggleHint = (hintId) => {
    setShowHint((prev) => ({
      ...prev,
      [hintId]: !prev[hintId],
    }));
  };

  const toggleResult = () => {
    setShowResult((prev) => !prev);
  };

  const getDifficultyStyles = (difficulty) => {
    return difficultyColors[difficulty] || "bg-gray-500/20 text-gray-500";
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
              <Card
                key={task.id}
                className="p-4 rounded-lg bg-gray-700"
              >
                <span className="text-gray-300">{task.description}</span>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Media Section */}
      {exercise.media && (
        <Card className="border-secondary/20 bg-gray-800 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-secondary mb-3">
              {exercise.media.type === "image" ? "Image" : "Video"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {exercise.media.type === "image" ? (
              <>
                <img
                  src={exercise.media.url}
                  alt={`${exercise.title} Image`}
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/default.png"; // Fallback image
                  }}
                />
                <div className="mt-4 flex space-x-4">
                  <a
                    href={exercise.media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-400 hover:text-indigo-500"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open Image in New Tab
                  </a>
                  <a
                    href={exercise.media.url}
                    download
                    className="flex items-center text-indigo-400 hover:text-indigo-500"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Image
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="mt-4">
                  <ReactPlayer
                    url={exercise.media.url}
                    controls
                    width="100%"
                    height="100%"
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={exercise.media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-400 hover:text-indigo-500"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open Video in New Tab
                  </a>
                  <a
                    href={exercise.media.url}
                    download
                    className="flex items-center text-indigo-400 hover:text-indigo-500"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Video
                  </a>
                </div>
              </>
            )}
            <p className="text-sm text-gray-400 mt-4">
              <em>
                Note: I did not take this photo nor do I own the rights to it.
              </em>
            </p>
          </CardContent>
        </Card>
      )}

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
              <Card key={hint.id} className="p-4 rounded-lg bg-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Hint #{hint.id}</span>
                  <button
                    onClick={() => toggleHint(hint.id)}
                    className="text-indigo-400 hover:text-indigo-500 flex items-center focus:outline-none"
                    aria-label={showHint[hint.id] ? "Hide Hint" : "Reveal Hint"}
                  >
                    {showHint[hint.id] ? (
                      <>
                        <Unlock className="h-4 w-4 mr-2" />
                        Hide
                      </>
                    ) : (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Reveal
                      </>
                    )}
                  </button>
                </div>
                <AnimatePresence>
                  {showHint[hint.id] && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-gray-300 overflow-hidden"
                    >
                      {hint.text}
                    </motion.p>
                  )}
                </AnimatePresence>
              </Card>
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
              <Card key={index} className="p-5 rounded-lg bg-gray-700">
                <h4 className="font-bold text-indigo-400 mb-2">
                  {resource.title}
                </h4>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-500"
                >
                  Visit Resource <span className="ml-1">&rarr;</span>
                </a>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Result Section */}
      {exercise.resultVideoUrl && (
        <Card className="border-secondary/20 bg-gray-800 shadow-lg rounded-lg">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-semibold text-secondary">
                Result
              </CardTitle>
              <button
                onClick={toggleResult}
                className="text-indigo-400 hover:text-indigo-500 flex items-center focus:outline-none"
                aria-label={showResult ? "Hide Result" : "Reveal Result"}
              >
                {showResult ? (
                  <>
                    <Unlock className="h-4 w-4 mr-2" />
                    Hide
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4 mr-2" />
                    Reveal
                  </>
                )}
              </button>
            </div>
          </CardHeader>
          <AnimatePresence>
            {showResult && (
              <CardContent>
                <div className="mt-4">
                  <ReactPlayer
                    url={exercise.resultVideoUrl}
                    controls
                    width="100%"
                    height="100%"
                    className="rounded-lg"
                    onError={() => {
                      // ill implement proper error handling later
                      alert("Failed to load the result video.");
                    }}
                  />
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  <em>
                    This video demonstrates the expected result of the exercise.
                  </em>
                </p>
              </CardContent>
            )}
          </AnimatePresence>
        </Card>
      )}
    </div>
  );
};

export default ExerciseViewer;
