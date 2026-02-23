import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type Testimonial = {
  quote: string;
  name: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Best Roofers team in Laverton, Excellent and best quality job done, excellent customer service, would highly recommend to any one looking for top quality roofers",
    name: "Moborak Mousa",
  },
  {
    quote:
      "Great team! From the team quoting to the office support very smooth process. Will recommend to others.",
    name: "Philip Mcenaney",
  },
  {
    quote:
      "I was very happy with the service and communications regarding my roof repairs. It was within the time frame specified Inspectors and repairer both friendly.",
    name: "Howard, Lynette",
  },
  {
    quote: "Job is done as expected, I am very happy with the service I received.",
    name: "Maria",
  },
  {
    quote: "Fantastic job By Garic Roofs",
    name: "Dave",
  },
  {
    quote:
      "The Guys Did a Great Job!, They checked the roof & valleys if there was any damage and assured me that they fixed the damaged flashing to stop the bad leak.",
    name: "Michael",
  },
];

export const Testimonials = () => {
  return (
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
            <span className="badge mb-6 border border-[#9a9c9e]">
              Testimonials
            </span>

            <h2 className="mb-4 text-2xl font-normal sm:text-3xl md:text-4xl">
              What Our Clients Say
            </h2>

            <p className="mb-8 leading-relaxed text-content">
              We’re proud to be a trusted choice for roofing repairs and
              restoration across Melbourne and surrounding suburbs. Here’s what
              some of our customers have shared about their experience with
              Garic Roofs.
            </p>

            <Button asChild>
              <Link to="/contact-us/">Get Started</Link>
            </Button>
          </motion.div>

          {/* Right testimonial grid */}
          <div className="lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl bg-card p-6 shadow-sm"
                >
                  <p className="mb-6 leading-relaxed text-title">
                    “{testimonial.quote}”
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-title">
                      {testimonial.name.trim().charAt(0)}
                    </div>

                    <div>
                      <p className="font-medium text-title">
                        — {testimonial.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};