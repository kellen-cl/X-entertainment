import { Link } from "react-router";
import Slider from "react-slick";
import { motion } from "motion/react";
import { Music, Radio, Users, ArrowRight, Star, Download, ExternalLink } from "lucide-react";
import DJ from './Images/DJ.png'
import DJ2 from './Images/DJ2.jpg'
import redlight from './Images/redlight.webp'

export function Home() {
  const heroImages = [
    DJ,
    redlight,
    DJ2,
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: false,
  };

  const services = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "DJ Services",
      description: "Professional DJ performances for clubs, events, and special occasions",
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "PA Systems",
      description: "State-of-the-art public address systems for crystal-clear sound",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Corporate Events",
      description: "Premium entertainment solutions for corporate functions",
    },
  ];

  // ─────────────────────────────────────────────
  // LISTEN TO MY MIXES — data
  // ─────────────────────────────────────────────
  const mixes = [
    {
      platform: "SoundCloud",
      platformKey: "soundcloud",
      title: "Club Bangers Vol. 1",
      description: "High-energy club mix featuring the hottest tracks of the season.",
      // Replace the src URL with your actual SoundCloud embed URL
      embedSrc:
        "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djmacx/sets/your-playlist&color=%23ffffff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
      // SoundCloud doesn't allow direct download — link to the track/set instead
      downloadHref: "https://soundcloud.com/dj-mac-x-122860218",
      downloadLabel: "Open on SoundCloud",
      isExternalLink: true,
    },
    {
      platform: "Audiomack",
      platformKey: "audiomack",
      title: "Afrobeats Fusion Mix",
      description: "A smooth blend of Afrobeats, Amapiano, and Afro-house.",
      // Replace with your actual Audiomack embed URL
      embedSrc:
        "https://audiomack.com/embed/djmacx/album/your-album?background=1&color=ffffff",
      // Audiomack supports direct download links — replace with your track's download URL
      downloadHref: "https://audiomack.com/djmaccx",
      downloadLabel: "Download on Audiomack",
      isExternalLink: false,
    },
    {
      platform: "Mixcloud",
      platformKey: "mixcloud",
      title: "Deep House Sessions",
      description: "An hour of deep, soulful house music to set the mood.",
      // Replace with your actual Mixcloud embed URL
      embedSrc:
        "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fdjmacx%2Fyour-mix%2F",
      // Mixcloud restricts downloads — link to profile instead
      downloadHref: "https://www.mixcloud.com/djmacx01/",
      downloadLabel: "Listen on Mixcloud",
      isExternalLink: true,
    },
    /*{
      platform: "Deezer",
      platformKey: "deezer",
      title: "Top 40 Hits Mix",
      description: "Your favourite chart-toppers mixed live for maximum energy.",
      // Replace with your actual Deezer playlist/track embed ID
      embedSrc:
        "https://widget.deezer.com/widget/dark/playlist/YOUR_PLAYLIST_ID",
      // Deezer does not support direct download from embed
      downloadHref: "https://www.deezer.com/en/profile/YOUR_PROFILE_ID",
      downloadLabel: "Open on Deezer",
      isExternalLink: true,
    },*/
    {
      platform: "HearThis",
      platformKey: "hearthis",
      title: "R&B Grooves Mix",
      description: "Smooth R&B vibes perfect for chill evenings and late nights.",
      // Replace with your actual HearThis embed URL
      embedSrc:
        "https://hearthis.at/djmacx/your-track/embed/?color=ffffff&transparent=1",
      // HearThis supports direct download — replace href with the actual download link
      downloadHref: "https://hearthis.at/69e78bb243f2b/",
      downloadLabel: "Download Mix",
      isExternalLink: false,
    },
  ];
  // ─────────────────────────────────────────────
  // END MIXES DATA
  // ─────────────────────────────────────────────

  return (
    <div className="pt-20">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen">
        <Slider {...sliderSettings} className="h-full hero-slider">
          {heroImages.map((image, index) => (
            <div key={index} className="relative h-screen">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-black/60" />
              </div>
            </div>
          ))}
        </Slider>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-white mr-2" />
                <span className="text-sm tracking-widest text-gray-300">PREMIUM ENTERTAINMENT</span>
                <Star className="w-6 h-6 text-white ml-2" />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                X-ENTERTAINMENT
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 tracking-wide">DJ MACX</p>
              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                Elevating events with world-class DJ performances, premium PA systems, 
                and unforgettable entertainment experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="bg-white text-black px-8 py-4 text-base font-semibold tracking-wide hover:bg-gray-200 transition-all hover:scale-105 flex items-center group"
                >
                  BOOK NOW
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 text-base font-semibold tracking-wide hover:bg-white hover:text-black transition-all hover:scale-105"
                >
                  VIEW SERVICES
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Welcome to X-Entertainment
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                DJ MACX brings years of experience in the entertainment industry, specializing in 
                high-energy performances that transform ordinary events into extraordinary experiences. 
                From intimate gatherings to large-scale corporate functions, we deliver professional 
                entertainment that exceeds expectations.
              </p>
              <div className="inline-block border-t-2 border-white w-24" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Services</h2>
            <p className="text-lg text-gray-400">Professional entertainment solutions tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 p-8 hover:bg-zinc-800 transition-all group cursor-pointer border border-white/5 hover:border-white/20"
              >
                <div className="text-white mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-wide">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block border-2 border-white text-white px-8 py-3 text-sm font-semibold tracking-wide hover:bg-white hover:text-black transition-all"
            >
              EXPLORE ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          LISTEN TO MY MIXES — START
          ═══════════════════════════════════════════════ */}
      <section className="mixes-section py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-white/30" />
                <Music className="w-5 h-5 text-white/60" />
                <div className="h-px w-12 bg-white/30" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Listen to My Mixes
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Stream or download DJ MACX's latest mixes across your favourite platforms
              </p>
            </motion.div>
          </div>

          {/* Mixes Grid */}
          <div className="mixes-grid">
            {mixes.map((mix, index) => (
              <motion.div
                key={index}
                className="mix-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                {/* Platform badge */}
                <div className="mix-platform-badge">
                  <span className={`mix-platform-dot mix-dot-${mix.platformKey}`} />
                  {mix.platform}
                </div>

                {/* Mix title & description */}
                <h3 className="mix-title">{mix.title}</h3>
                {mix.description && (
                  <p className="mix-description">{mix.description}</p>
                )}

                {/* Embedded player */}
                <div className="mix-player-wrapper">
                  <iframe
                    src={mix.embedSrc}
                    title={`${mix.platform} — ${mix.title}`}
                    allow="autoplay"
                    loading="lazy"
                    className="mix-iframe"
                  />
                </div>

                {/* Download / Link button */}
                <a
                  href={mix.downloadHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mix-download-btn"
                >
                  {mix.isExternalLink ? (
                    <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
                  ) : (
                    <Download className="w-4 h-4 mr-2 flex-shrink-0" />
                  )}
                  {mix.downloadLabel}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════
          LISTEN TO MY MIXES — END
          ═══════════════════════════════════════════════ */}

      {/* CTA Section */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
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
              Ready to Elevate Your Event?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Contact us today to discuss your entertainment needs and let's create 
              an unforgettable experience together.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-black px-10 py-4 text-base font-semibold tracking-wide hover:bg-gray-200 transition-all hover:scale-105"
            >
              GET IN TOUCH
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}