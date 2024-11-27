import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const ExerciseSection = ({ title, content, expandable = false }) => {
  const [isExpanded, setIsExpanded] = useState(!expandable);

  return (
    <Card className="border-secondary/20 bg-gray-800 shadow-lg rounded-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-semibold text-secondary mb-3">
          {title}
        </CardTitle>
        {expandable && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-secondary hover:text-secondary/80"
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        )}
      </CardHeader>
      {(!expandable || isExpanded) && (
        <CardContent>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {content}
          </motion.div>
        </CardContent>
      )}
    </Card>
  );
};

export default ExerciseSection;