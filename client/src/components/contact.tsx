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
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill all fields", description: "All fields are required.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Mahesh,\n\nYou have a new message from your portfolio website.\n\nFrom: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}\n\n---\nSent via Portfolio Contact Form`
    );
    const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    await new Promise(resolve => setTimeout(resolve, 800));

    toast({
      title: "Email client opened!",
      description: "Your message has been prepared. Please send it from your email client.",
    });

    setForm({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 animate-slide-up transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-blue-600 dark:text-blue-400 max-w-2xl mx-auto text-lg font-medium">
            Let's discuss opportunities and collaborations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-blue-100 dark:border-gray-700 p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border-blue-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border-blue-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={handleInputChange}
                    required
                    className="w-full border-blue-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? 'Opening email...' : 'Send Message'}
                </Button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  This will open your email client with the message pre-filled.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-blue-100 dark:border-gray-700 p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center p-4 bg-blue-50/30 dark:bg-gray-700/50 rounded-lg hover:bg-blue-50/60 dark:hover:bg-gray-700 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mr-4 border border-blue-200/30">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center p-4 bg-blue-50/20 dark:bg-gray-700/50 rounded-lg hover:bg-blue-50/40 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 border border-blue-200/30">
                    <Phone className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-blue-500 dark:text-blue-400 font-medium">{personalInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-center p-4 bg-blue-50/25 dark:bg-gray-700/50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-700/20 rounded-full flex items-center justify-center mr-4 border border-blue-200/30">
                    <MapPin className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                    <p className="text-blue-700 dark:text-blue-400 font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
