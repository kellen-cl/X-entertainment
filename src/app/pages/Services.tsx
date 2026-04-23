import { motion } from "motion/react";
import { Link } from "react-router";
import { Music, Radio, Building2, Heart, Users, Sparkles } from "lucide-react";
import DJ2 from "./Images/DJ2.jpg";
import PAsystem from "./Images/PAsystem.jpg";
import corporate from "./Images/corporate.jpeg";
import wedding from "./Images/wedding.jpg";
import party from "./Images/party.jpg";
import redlight from "./Images/redlight.webp";

export function Services() {
  const services = [
    {
      icon: <Music className="w-12 h-12" />,
      title: "DJ Services",
      description: "Professional DJ performances tailored to your event's atmosphere and audience",
      features: [
        "Club and nightlife performances",
        "Music mixing and beatmatching",
        "Custom playlist curation",
        "Live remixing and mashups",
        "MC services available",
        "Genre versatility (Hip-Hop, EDM, Afrobeat, House, R&B, etc.)",
      ],
      image:
          DJ2    },
    {
      icon: <Radio className="w-12 h-12" />,
      title: "PA Systems",
      description: "State-of-the-art public address systems for crystal-clear sound quality",
      features: [
        "Professional grade sound equipment",
        "Wireless microphone systems",
        "Complete speaker setups",
        "Sound mixing and engineering",
        "Equipment setup and breakdown",
        "Technical support on-site",
      ],
      image:
          PAsystem    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Corporate Events",
      description: "Premium entertainment solutions for professional corporate functions",
      features: [
        "Company galas and award ceremonies",
        "Product launches and brand activations",
        "Team building events",
        "Conference entertainment",
        "Networking events",
        "Professional presentation support",
      ],
      image:
        corporate    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Weddings",
      description: "Creating the perfect soundtrack for your special day",
      features: [
        "Ceremony music coordination",
        "Cocktail hour entertainment",
        "Reception DJ services",
        "First dance and special moments",
        "Guest request management",
        "Coordination with wedding planners",
      ],
      image:
        wedding    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Private Parties",
      description: "Intimate entertainment for personal celebrations and gatherings",
      features: [
        "Birthday celebrations",
        "Anniversary parties",
        "House parties",
        "Graduation celebrations",
        "Themed events",
        "Customized music selection",
      ],
      image:
        party    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Event Entertainment",
      description: "Comprehensive entertainment packages for all event types",
      features: [
        "Festival performances",
        "Community events",
        "Charity fundraisers",
        "Holiday celebrations",
        "Grand openings",
        "Custom entertainment packages",
      ],
      image:
        "https://images.unsplash.com/photo-1763630055039-a284bbb3f01d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESiUyMGNsdWIlMjBzdGFnZSUyMGxpZ2h0c3xlbnwxfHx8fDE3NzYzNDA4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Professional entertainment solutions for every occasion
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className="h-[400px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="mb-6 text-white">{service.icon}</div>
                  <h2 className="text-4xl font-bold mb-4 tracking-tight">{service.title}</h2>
                  <p className="text-lg text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-300">
                        <span className="text-white mr-3 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Why Choose X-Entertainment?</h2>
            <p className="text-lg text-gray-400">Premium service that sets us apart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl font-bold mb-3">Professional</div>
              <p className="text-gray-400">High-end equipment and expert service</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold mb-3">Experienced</div>
              <p className="text-gray-400">Years of proven excellence in entertainment</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold mb-3">Versatile</div>
              <p className="text-gray-400">Adaptable to any event type or size</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold mb-3">Reliable</div>
              <p className="text-gray-400">Consistent quality you can trust</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Book Your Event?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Contact us today to discuss your entertainment needs and receive a custom quote
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-black px-10 py-4 text-base font-semibold tracking-wide hover:bg-gray-200 transition-all hover:scale-105"
            >
              GET A QUOTE
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
