import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Instagram, Linkedin, Twitter, Music2, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", eventType: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1619386113777-f92dd987bfb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESiUyMGVxdWlwbWVudCUyMGNvbnNvbGUlMjBtaXhlcnxlbnwxfHx8fDE3NzYzNDA4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Get In Touch</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Let's create an unforgettable experience for your next event
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-8 tracking-tight">Contact Information</h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Ready to book DJ MACX for your event? Get in touch with us through any of the 
                channels below, and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-zinc-900 p-3 mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:djmaccx@gmail.com"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      djmaccx@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-zinc-900 p-3 mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:0704033745"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      0704033745
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="bg-zinc-900 p-3 mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Service Areas</h3>
                    <p className="text-gray-400">Available for events nationwide</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/_.djmacx?igsh=dXphbWtodnJuN2ho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-900 p-3 hover:bg-zinc-800 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@djmacx?_r=1&_t=ZS-95aLH8B1eKo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-900 p-3 hover:bg-zinc-800 transition-colors"
                    aria-label="TikTok"
                  >
                    <Music2 size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dj-mac-x-87354620b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-900 p-3 hover:bg-zinc-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://x.com/DJ_Mac_x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-900 p-3 hover:bg-zinc-800 transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <Twitter size={24} />
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-10 bg-zinc-900 p-6 border border-white/5">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-zinc-900 p-8 border border-white/5">
                <h2 className="text-3xl font-bold mb-6 tracking-tight">Send Us a Message</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white text-black p-6 text-center"
                  >
                    <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                    <p>Your message has been sent. We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                        Event Type *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                        className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="club">Club Performance</option>
                        <option value="private">Private Party</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                        placeholder="Tell us about your event..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-white text-black px-6 py-4 font-semibold tracking-wide hover:bg-gray-200 transition-all hover:scale-105 flex items-center justify-center group"
                    >
                      SEND MESSAGE
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Service Areas</h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              We provide entertainment services across the region. Contact us to discuss your 
              specific location and event requirements.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-zinc-900/50 p-8 rounded-xl border border-zinc-800">
              <div className="text-center">
                <p className="text-white font-semibold">Nairobi</p>
                <p className="text-zinc-500 text-sm">All across Nairobi</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">Kisumu</p>
                <p className="text-zinc-500 text-sm"> All Western Region</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">Mombasa</p>
                <p className="text-zinc-500 text-sm">All Eastern Region</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">Nakuru</p>
                <p className="text-zinc-500 text-sm">All Central Region</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
