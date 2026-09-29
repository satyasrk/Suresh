import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Services from './pages/Services/Services.jsx'
import Fleet from './pages/Fleet/Fleet.jsx'
import Partners from './pages/Partners/Partners.jsx'
import Contact from './pages/Contact/Contact.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

const SEO = {
  '/': {
    title: 'Ultra Miles Delivery Services LLC | Dubai, UAE',
    description:
      'ULTRA MILES DELIVERY SERVICES LLC is a Dubai-based delivery and logistics company established in 2022, providing reliable, scalable, and professionally managed last-mile delivery solutions across the UAE.',
  },
  '/about-us': {
    title: 'About Us | Ultra Miles Delivery Services LLC',
    description:
      'Established in 2022, ULTRA MILES DELIVERY SERVICES LLC is a Dubai-based delivery and logistics company focused on providing dependable and scalable last-mile delivery solutions.',
  },
  '/our-services': {
    title: 'Our Services | Ultra Miles Delivery Services LLC | Dubai, UAE',
    description:
      'Flexible B2B and last-mile fleet services tailored to modern e-commerce and enterprise demands across Dubai and the United Arab Emirates.',
  },
  '/fleet': {
    title: 'Our Fleet | Ultra Miles Delivery Services LLC',
    description:
      "200+ owned vehicles built for the last mile. Our fleet is one of Ultra Miles' key operational strengths, supported by our own in-house garage.",
  },
  '/partners': {
    title: 'Partners | Ultra Miles Delivery Services LLC',
    description:
      "Our delivery capabilities have enabled us to establish partnerships with some of the UAE's leading e-commerce, delivery, retail, and technology platforms.",
  },
  '/contact-us': {
    title: 'Contact Us | Ultra Miles Delivery Services LLC',
    description:
      'Reach our operations center and dispatch team for bookings, fleet leasing, or enterprise inquiries across the UAE.',
  },
}

function RouteSEO() {
  const { pathname } = useLocation()
  const meta = SEO[pathname] || SEO['/']
  useEffect(() => {
    document.title = meta.title
    let tag = document.querySelector('meta[name="description"]')
    if (tag) tag.setAttribute('content', meta.description)
  }, [meta])
  return null
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <RouteSEO />
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
