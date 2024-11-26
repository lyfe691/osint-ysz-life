import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-bold text-teal-400">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">Target Not Found</h2>
          <p className="text-gray-400 text-lg">
            The intelligence you're looking for seems to be classified or doesn't exist.
          </p>
          <div className="pt-4">
            <Button asChild variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400/10">
              <Link to="/">Return to Base</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;