import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Typewriter from "typewriter-effect";


const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null); 
  const [fileName, setFileName] = useState(""); 

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const validTypes = ["application/json", "text/plain"];
      if (!validTypes.includes(selectedFile.type)) {
        toast.error("Only JSON and TXT files are allowed.");
        e.target.value = null; 
        setFile(null);
        setFileName("");
        return;
      }
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    
    // using free alternative to formspree file uploads
    try {
      let fileURL = "";

      if (file) {
        const cloudinaryFormData = new FormData();
        cloudinaryFormData.append("file", file);
        cloudinaryFormData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

        const cloudinaryResponse = await fetch(
          `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/upload`,
          {
            method: "POST",
            body: cloudinaryFormData,
          }
        );

        if (!cloudinaryResponse.ok) {
          throw new Error("Failed to upload file to Cloudinary.");
        }

        const cloudinaryData = await cloudinaryResponse.json();
        fileURL = cloudinaryData.secure_url;
        formData.append("fileURL", fileURL); 

        // remove the actual file from FormData to prevent Formspree from processing it (bypassing formspree)
        formData.delete("file");
      }
      const response = await fetch("https://formspree.io/f/mwpknyor", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      setLoading(false);

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
        setFile(null);
        setFileName("");
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to send message.");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message || "An unexpected error occurred.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col flex-grow">
      <Navigation />
      <div className="container py-12 flex-grow flex flex-col justify-center">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-xl text-gray-400">
          <Typewriter
              options={{
                strings: [
                  "Anything on your mind?",
                  "Have a submission - contribution?",
                  "Found an issue? let me know!"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 25,
              }}
            />
          </p>
        </header>

        <div className="max-w-md mx-auto w-full">
          <form onSubmit={handleSubmit} className="space-y-6" id="myForm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="bg-accent/50 border-secondary/10"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="bg-accent/50 border-secondary/10"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Your message..."
                className="bg-accent/50 border-secondary/10 min-h-[150px]"
              />
            </div>
            <div>
              <label htmlFor="file" className="block text-sm font-medium mb-2">
                Upload a JSON or TXT File (optional)
              </label>
              <Input
                id="file"
                name="file"
                type="file"
                accept=".json, .txt"
                onChange={handleFileChange}
                className="bg-accent/50 border-secondary/10"
              />
              {fileName && (
                <p className="mt-2 text-sm text-gray-500">Selected File: {fileName}</p>
              )}
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-secondary/10 text-secondary hover:bg-secondary/20 border border-secondary/20"
              variant="outline"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
