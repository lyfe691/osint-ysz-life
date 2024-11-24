import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <div className="container py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-xl text-gray-400">Get in touch with me</p>
        </header>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
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
                type="email"
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
                placeholder="Your message..."
                className="bg-accent/50 border-secondary/10 min-h-[150px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-secondary/10 text-secondary hover:bg-secondary/20 border border-secondary/20"
              variant="outline"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;