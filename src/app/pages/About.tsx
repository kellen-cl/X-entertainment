import { motion } from "motion/react";
import { Award, Target, Eye, Zap } from "lucide-react";
import DJ2 from "./Images/DJ2.jpg";
import Mac from "./Images/Mac.png";

export function About() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Delivering world-class entertainment experiences with uncompromising quality",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy",
      description: "Creating electrifying atmospheres that keep audiences engaged and entertained",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Professionalism",
      description: "Maintaining the highest standards in service delivery and client satisfaction",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${DJ2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">About DJ MACX</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Transforming events into unforgettable experiences through music and entertainment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="h-[500px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${Mac})`                
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 tracking-tight">The Story Behind DJ MACX</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  DJ MACX is a renowned name in the entertainment industry, known for delivering 
                  electrifying performances and creating memorable experiences. With years of experience 
                  in the nightlife and events scene, DJ MACX has become synonymous with quality 
                  entertainment and professional service.
                </p>
                <p>
                  Starting from intimate club nights to performing at major corporate events and festivals, 
                  DJ MACX has built a reputation for reading the crowd, curating perfect playlists, and 
                  maintaining high energy throughout every performance.
                </p>
                <p>
                  X-Entertainment was founded on the principle that every event deserves world-class 
                  entertainment. Whether it's a corporate gala, wedding reception, club night, or private 
                  party, DJ MACX brings the same level of dedication, professionalism, and passion to 
                  create an atmosphere that guests will remember long after the music stops.
                </p>
                <p>
                  With state-of-the-art equipment, extensive music knowledge spanning multiple genres, 
                  and a commitment to excellence, X-Entertainment continues to set the standard for 
                  premium DJ and entertainment services.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Experience & Expertise</h2>
            <p className="text-lg text-gray-400">Years of excellence in entertainment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-3">100+</div>
              <div className="text-gray-400">Events Performed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-3">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-3">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black p-10 border border-white/10"
            >
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 mr-4" />
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                To provide exceptional entertainment services that exceed client expectations and create 
                unforgettable moments. We are committed to delivering professional, high-energy performances 
                that bring people together and make every event a success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-black p-10 border border-white/10"
            >
              <div className="flex items-center mb-6">
                <Eye className="w-10 h-10 mr-4" />
                <h3 className="text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                To become the leading entertainment provider, recognized for innovation, professionalism, 
                and the ability to transform any venue into an electrifying experience. We aim to set new 
                standards in the entertainment industry through continuous improvement and dedication.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Values</h2>
            <p className="text-lg text-gray-400">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 p-8 border border-white/5 hover:border-white/20 transition-all"
              >
                <div className="text-white mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 tracking-wide">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
