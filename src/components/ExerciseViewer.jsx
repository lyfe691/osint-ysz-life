import { useState } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ExerciseHeader from "./exercise-viewer/ExerciseHeader";
import ExerciseSection from "./exercise-viewer/ExerciseSection";

const ExerciseViewer = ({ exercise }) => {
  const [showHint, setShowHint] = useState({});

  const toggleHint = (hintId) => {
    setShowHint((prev) => ({
      ...prev,
      [hintId]: !prev[hintId],
    }));
  };

  const renderTasks = () => (
    <div className="space-y-4">
      {exercise.sections.tasks.map((task) => (
        <motion.div
          key={task.id}
          className="p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
          whileHover={{ scale: 1.01 }}
        >
          <span className="text-gray-300">{task.description}</span>
        </motion.div>
      ))}
    </div>
  );

  const renderHints = () => (
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
  );

  const renderResources = () => (
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
  );

  return (
    <div className="space-y-8 p-4">
      <ExerciseHeader exercise={exercise} />
      
      <ExerciseSection 
        title="Background"
        content={<p className="text-gray-300 leading-relaxed">{exercise.sections.background}</p>}
        expandable
      />

      <ExerciseSection 
        title="Tasks"
        content={renderTasks()}
        expandable
      />

      {exercise.media && (
        <ExerciseSection 
          title={exercise.media.type === "image" ? "Image" : "Video"}
          content={
            exercise.media.type === "image" ? (
              <>
                <img
                  src={exercise.media.url}
                  alt={exercise.title}
                  className="w-full h-auto rounded-lg"
                />
                <p className="mt-2">
                  <a
                    href={exercise.media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline mr-4"
                  >
                    Open Image in New Tab
                  </a>
                  <a
                    href={exercise.media.url}
                    download
                    className="text-indigo-400 hover:underline"
                  >
                    Download Image
                  </a>
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  <em>Note: I did not take this photo nor do I own the rights of it.</em>
                </p>
              </>
            ) : (
              <>
                <div className="relative" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src={exercise.media.url}
                    title={exercise.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  ></iframe>
                </div>
                <p className="mt-2">
                  <a
                    href={exercise.media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline mr-4"
                  >
                    Open Video in New Tab
                  </a>
                </p>
              </>
            )
          }
          expandable
        />
      )}

      <ExerciseSection 
        title="Hints"
        content={renderHints()}
        expandable
      />

      <ExerciseSection 
        title="Additional Resources"
        content={renderResources()}
        expandable
      />
    </div>
  );
};

export default ExerciseViewer;