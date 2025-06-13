import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { personalInfo } from '@/data/portfolio';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for your message! I will get back to you soon.",
    });

    setForm({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-black dark:bg-black animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-text-gradient">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Send me a message
            </h3>
            <p className="text-gray-400 mb-8">
              I'll get back to you as soon as possible
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleInputChange}
                required
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
              />

              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleInputChange}
                required
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
              />

              <Textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                value={form.message}
                onChange={handleInputChange}
                required
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
              />

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 font-medium"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-white">
              Let's Connect
            </h3>
            <p className="text-gray-400 mb-8">
              I'm always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-gray-400">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <p className="text-gray-400">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-400">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
