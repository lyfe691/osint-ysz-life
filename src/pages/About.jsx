import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      title: "Open Source Intelligence Training",
      description: "Learn essential OSINT techniques through hands-on exercises and real-world scenarios.",
    },
    {
      title: "Progressive Learning",
      description: "Start with beginner-friendly challenges and progress to advanced investigations.",
    },
    {
      title: "Practical Skills",
      description: "Develop skills that are valuable for cybersecurity, investigation, and research.",
    },
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <div className="container py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center text-secondary">About OSINT Training</h1>
          
          <Card className="mb-12 bg-accent border-secondary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary">Creator</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                Created by <span className="text-secondary font-semibold">Yanis Sebastian Zürcher</span>
              </p>
              <p className="text-gray-400">
                This platform is designed to provide a comprehensive learning experience in Open Source Intelligence (OSINT),
                helping individuals develop crucial investigative skills in the digital age.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="hover-card"
              >
                <Card className="h-full bg-accent border-secondary/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-secondary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="bg-accent border-secondary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 leading-relaxed">
                We are committed to providing high-quality OSINT training through practical exercises
                and real-world scenarios. Our platform is designed to help both beginners and
                experienced practitioners enhance their investigative skills in a structured and
                engaging environment.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;