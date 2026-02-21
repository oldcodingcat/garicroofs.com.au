import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Users, Calendar, ShieldCheck, PaintBucket, Smile } from "lucide-react";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { CTA } from "@/components/home/CTA";

import heroImage from "@/assets/hero-roof-painting.jpg";
import teamAtWork from "@/assets/team-at-work.jpg";

const stats = [
  { icon: Calendar, value: "Proven", label: "Expertise" },
  { icon: Users, value: "2,500+", label: "Happy Customers" },
  { icon: Award, value: "100%", label: "Satisfaction Rate" },
  { icon: ShieldCheck, value: "15yr", label: "Warranty Available" },
];

const testimonials = [
  {
    quote: "From the initial consultation to the final walkthrough, Brisbane Roof Painting Solutions exceeded my expectations. The quality of their work is fantastic, and they were so easy to communicate with.",
    name: "Laura M.",
    location: "Paddington",
  },
  {
    quote: "We hired them for our metal roof restoration, and they did a brilliant job. Their attention to detail really stood out, and the team was very professional throughout.",
    name: "Thomas G.",
    location: "Clayfield",
  },
  {
    quote: "They completed our office roof repaint on time and within budget. Their transparent pricing and eco-friendly options made them the perfect choice for our business.",
    name: "Sarah H.",
    location: "Fortitude Valley",
  },
  {
    quote: "The team was extremely efficient and clean. They treated our home like it was their own. We've received so many compliments from friends and neighbours!",
    name: "Kevin P.",
    location: "Ascot",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Brisbane Roof Painting Solutions - Expert Roof Painters</title>
        <meta 
          name="description" 
          content="Learn about Brisbane Roof Painting Solutions. Our experienced team delivers professional roof painting, restoration and maintenance services across Brisbane and surrounding areas." 
        />
        <link rel="canonical" href="https://brisbaneroofpaintingsolutions.com.au/about" />
        
        <meta property="og:title" content="About Us | Brisbane Roof Painting Solutions" />
        <meta property="og:description" content="Learn about Brisbane's trusted roof painting experts. Professional team delivering quality roof restoration services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brisbaneroofpaintingsolutions.com.au/about" />
        <meta property="og:image" content="https://brisbaneroofpaintingsolutions.com.au/images/before-after-roof.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Brisbane Roof Painting Solutions" />
        <meta name="twitter:description" content="Learn about Brisbane's trusted roof painting experts." />
        <meta name="twitter:image" content="https://brisbaneroofpaintingsolutions.com.au/images/before-after-roof.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://brisbaneroofpaintingsolutions.com.au/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://brisbaneroofpaintingsolutions.com.au/about"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="pt-28">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="badge mb-6">About Us</span>
                <h1 className="mb-6 text-3xl font-normal sm:text-4xl md:text-5xl">
                  Brisbane's Trusted Roof Painting Specialists
                </h1>
                <p className="mb-6 text-lg leading-relaxed">
                  With extensive experience, Brisbane Roof Painting Solutions has been transforming 
                  roofs across Queensland. What started as a small family business 
                  has grown into Brisbane's most trusted roof painting company.
                </p>
                <p className="mb-8 text-lg leading-relaxed">
                  Our commitment to quality workmanship, premium Australian-made 
                  products, and exceptional customer service has earned us the trust 
                  of thousands of homeowners throughout the greater Brisbane region.
                </p>
                <Button asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <img
                  src={heroImage}
                  alt="Brisbane Roof Painting Solutions team at work"
                  className="h-full w-full rounded-2xl object-cover shadow-float"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-padding bg-wrapper">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="badge mb-6 border border-[#9a9c9e]">Our Journey</span>
                <h2 className="mb-6 text-2xl font-normal sm:text-3xl md:text-4xl">
                  Our Story
                </h2>
                <p className="mb-6 text-lg leading-relaxed">
                  Brisbane Roof Painting Solutions was established with a simple vision: to provide 
                  Queensland homeowners with exceptional roof restoration services that stand 
                  the test of time. What began as a small operation has grown into a team 
                  of dedicated professionals serving the entire Brisbane metropolitan area.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  Our team recognised that Brisbane's unique climate, with its intense UV rays, 
                  subtropical storms, and humidity, demanded a specialised approach to roof painting. 
                  Through experience and continuous learning, we've developed techniques and 
                  partnerships with premium Australian paint manufacturers that ensure lasting results.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we're proud to have transformed thousands of roofs across Brisbane, 
                  from heritage Queenslanders in Paddington to modern homes in Springfield. 
                  Our passion for protecting and beautifying Australian homes drives everything 
                  we do, and we treat every project, big or small, with the same dedication 
                  and attention to detail.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-6 text-2xl font-normal sm:text-3xl md:text-4xl">
                  Our Mission
                </h2>
                <p className="mb-8 text-lg leading-relaxed">
                  Our mission is simple: to bring quality, protection, and beauty to 
                  Brisbane roofs through professional roof painting services. We believe 
                  that a fresh coat of protective paint can do more than transform your 
                  roof—it can enhance your property's value, extend your roof's lifespan, 
                  and protect your home from Brisbane's harsh weather conditions.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 mb-8">
                  <div className="rounded-2xl bg-card-secondary p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <PaintBucket className="h-6 w-6 text-icon" />
                    </div>
                    <h3 className="mb-2 text-lg font-medium">Skilled Professionals</h3>
                    <p className="text-sm leading-relaxed">
                      Our experienced, certified roof painting specialists bring 
                      expertise to every project, ensuring flawless results every time.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-card-secondary p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Smile className="h-6 w-6 text-icon" />
                    </div>
                    <h3 className="mb-2 text-lg font-medium">Friendly & Approachable</h3>
                    <p className="text-sm leading-relaxed">
                      We pride ourselves on excellent communication and customer service, 
                      keeping you informed and comfortable throughout the entire process.
                    </p>
                  </div>
                </div>

                <Button asChild>
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src={teamAtWork}
                  alt="Brisbane Roof Painting Solutions team working on a roof"
                  className="w-full rounded-2xl object-cover shadow-float"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-wrapper">
          <div className="container-custom">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl bg-card p-6 text-center shadow-sm"
                >
                  <stat.icon className="mx-auto mb-4 h-8 w-8 text-icon" />
                  <p className="mb-1 text-3xl font-medium text-title">{stat.value}</p>
                  <p className="text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl text-center">
              <span className="badge mb-6 border border-[#9a9c9e]">Our Values</span>
              <h2 className="mb-4 text-2xl font-normal sm:text-3xl md:text-4xl">
                Built on Trust & Quality
              </h2>
              <p className="mb-12 text-lg">
                Our values guide everything we do, from the products we choose 
                to the way we treat our customers and their homes.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Quality First",
                  description: "We never compromise on quality. Every product and technique we use is carefully selected to deliver lasting results.",
                },
                {
                  title: "Customer Focus",
                  description: "Your satisfaction is our priority. We listen, advise, and work with you to achieve your vision for your home.",
                },
                {
                  title: "Honest & Reliable",
                  description: "Transparent pricing, clear communication, and reliable service you can count on from start to finish.",
                },
                {
                  title: "Safety First",
                  description: "We prioritise safety on every job site, following strict protocols to protect our team, your property, and your family.",
                },
                {
                  title: "Australian-Made Premium Products",
                  description: "We exclusively use top-quality Australian-made paints and materials designed to withstand our unique climate conditions.",
                },
                {
                  title: "Local Expertise",
                  description: "As Brisbane locals, we understand the unique challenges of Queensland's climate and tailor our services accordingly.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl bg-[#2a2a2a]/80 backdrop-blur-sm p-8 border border-white/10"
                >
                  <h3 className="mb-3 text-xl font-medium text-white">{value.title}</h3>
                  <p className="leading-relaxed text-white/90">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <ProjectsShowcase />

        {/* Testimonials Section */}
        <section className="section-padding bg-wrapper">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              {/* Left intro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <span className="badge mb-6 border border-[#9a9c9e]">Testimonials</span>
                <h2 className="mb-4 text-2xl font-normal sm:text-3xl md:text-4xl">
                  Our Lovely Clients
                </h2>
                <p className="mb-8 leading-relaxed">
                  We're proud to have earned the trust of thousands of Brisbane 
                  homeowners. Here's what some of our valued clients have to say 
                  about their experience with Brisbane Roof Painting Solutions.
                </p>
                <Button asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </motion.div>

              {/* Right testimonial grid */}
              <div className="lg:col-span-3">
                <div className="grid gap-4 sm:grid-cols-2">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="rounded-2xl bg-card p-6 shadow-sm"
                    >
                      <p className="mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-title">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-title">— {testimonial.name}</p>
                          <p className="text-xs">{testimonial.location}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Form */}
        <CTA />
      </main>
      <Footer />
      </div>
    </>
  );
};

export default About;