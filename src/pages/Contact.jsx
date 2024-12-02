import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwpknyor", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      setLoading(false);

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to send message.");
      }
    } catch (error) {
      setLoading(false);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="flex flex-col flex-grow">
      <Navigation />
      <div className="container py-12 flex-grow flex flex-col justify-center">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-xl text-gray-400">Anything on your mind? Reach out!</p>
        </header>

        <div className="max-w-md mx-auto w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
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