import { RouterProvider } from "react-router";
import { router } from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * X-ENTERTAINMENT - DJ MACX Website
 * 
 * A modern, responsive entertainment website featuring:
 * - Multi-page navigation (Home, About, Services, Gallery, Contact)
 * - Premium black/grey/white color scheme
 * - Smooth animations and transitions
 * - Hero carousel slideshow
 * - Interactive gallery with lightbox
 * - Contact form
 * - Fully responsive design
 * - Social media integration
 */

export default function App() {
  return <RouterProvider router={router} />;
}