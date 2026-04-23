import { Link } from "react-router";
import { Instagram, Linkedin, Twitter, Music2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-bold tracking-tight">X-ENTERTAINMENT</span>
              <span className="text-xs tracking-widest text-gray-400">DJ MACX</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Premium DJ services, professional PA systems, and world-class entertainment for clubs, 
              corporate events, weddings, and private parties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider mb-4">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider mb-4">CONTACT</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">
                <a href="tel:0704033745" className="hover:text-white transition-colors">
                  0704033745
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                <a href="mailto:djmaccx@gmail.com" className="hover:text-white transition-colors">
                  djmaccx@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold tracking-wider mb-4">FOLLOW US</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/_.djmacx?igsh=dXphbWtodnJuN2ho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.tiktok.com/@djmacx?_r=1&_t=ZS-95aLH8B1eKo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <Music2 size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dj-mac-x-87354620b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://x.com/DJ_Mac_x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="X (Twitter)"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} X-Entertainment / DJ MACX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
