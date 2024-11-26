import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaLightbulb, FaChartLine, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: <FaLightbulb className="text-teal-400 w-8 h-8 mb-4" />,
      title: "OSINT Training",
      description:
        "Dive into Open Source Intelligence techniques with hands-on exercises and real-world examples.",
    },
    {
      icon: <FaChartLine className="text-teal-400 w-8 h-8 mb-4" />,
      title: "Step-by-Step Learning",
      description:
        "Start with the basics and gradually take on more complex investigations as you grow.",
    },
    {
      icon: <FaTools className="text-teal-400 w-8 h-8 mb-4" />,
      title: "Practical Skills",
      description:
        "Build skills that are useful for cybersecurity, research, and personal projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 dark:bg-gray-900 transition-colors duration-500">
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-64 md:h-96">
        <img
          src="/hero_about.jpg"
          alt="OSINT Training"
          className="w-full h-full object-cover opacity-70 rounded-b-lg"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            About The Project
          </h1>
          <p className="mt-2 md:mt-4 text-lg md:text-xl text-gray-300 drop-shadow-md">
            A Passion Project by Yanis Sebastian Zürcher
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Creator Section */}
          <Card className="mb-16 bg-gray-800 text-white shadow-lg rounded-lg">
            <CardHeader className="border-b border-gray-700">
              <CardTitle className="text-2xl text-teal-400 font-semibold">
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src="/profile.png"
                  alt="Your Name"
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-teal-400"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-teal-400">
                    Yanis Sebasitan Zürcher
                  </h2>
                  <p className="text-gray-400">Computer Science Student</p>
                </div>
              </div>
              <p className="text-gray-300">
                Hey there! I'm a 16-year-old developer who has just recently dove into the world of Open Source Intelligence. I put this platform together in my free time to share what I've learned and help others get started with OSINT. Whether you're just curious or looking to dive deep, I'm excited to have you here! If you have any inquiries or questions feel free to reach out via the <Link to="/contact" className="text-blue-500">contact form</Link>.
              </p>
            </CardContent>
          </Card>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                className="cursor-pointer"
              >
                <Card className="h-full bg-gray-800 text-white shadow-md rounded-lg transition-transform transition-colors duration-500">
                  <CardContent className="p-6 text-center">
                    {feature.icon}
                    <CardTitle className="text-xl text-teal-400 mb-2">
                      {feature.title}
                    </CardTitle>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mission Section */}
          <Card className="bg-gray-800 text-white shadow-lg rounded-lg">
            <CardHeader className="border-b border-gray-700">
              <CardTitle className="text-2xl text-teal-400 font-semibold">
                What This Is
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-300 leading-relaxed">
                This platform is a hobby project I've been working on to learn more about Open Source Intelligence. It's a place where I share exercises and tips that I've found useful. I'm new but passionate about cybersecurity and research, and I hope this site can help others who share the same interests. Thanks for stopping by!

                <br />
                <br />

                This project was inspired by this website: <Link to="https://gralhix.com/list-of-osint-exercises/" className="text-blue-500" target="_blank">https://gralhix.com/list-of-osint-exercises/</Link>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
