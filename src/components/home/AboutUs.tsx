import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGE_URL =
  "https://garicroofs.com.au/wp-content/uploads/2022/02/Group-2-5.png";

const accordionItems = [
  {
    title: "Affordable Service",
    content:
      "At Garic Roofs, our top priority is delivering exceptional service of the highest quality while keeping it affordable for our customers. We recognize that roofing projects can be significant financial investments, which is why we are dedicated to collaborating with you to discover solutions that align with your budget.\n\nOur pricing is competitive, ensuring that you receive the best value for your hard-earned money. Whether it’s a minor repair or a complete roof replacement, we’ve got you covered with our reasonable rates and flexible payment plans. Your satisfaction and financial comfort matter to us, and we’re here to provide the best roofing services tailored to your needs.",
  },
  {
    title: "Local Company You Can Trust",
    content:
      "Unlike certain national chains, Garic Roofs stands out as a locally-owned and operated business with a solid track record of serving our community for over two decades. Our team of certified professionals is unwavering in its commitment to delivering the utmost level of service and craftsmanship.\n\nCustomer satisfaction is our foremost priority, and we take immense pride in the quality of our workmanship and the excellence of our customer service. Throughout the years, we have earned a reputation for providing top-notch work at a price that is friendly to your budget. We are confident that the results of our services will leave you thoroughly pleased.",
  },
  {
    title: "Professionalism At Its Best",
    content:
      "At Garic Roofs, professionalism forms the very foundation of our success. Our team comprises exclusively of seasoned and certified professionals who possess the expertise to execute your roofing project with meticulous care and precision.\n\nUsing only the finest materials available, we strictly adhere to industry standards and continually keep ourselves abreast of the latest roofing technologies and techniques. This commitment guarantees that your project benefits from cutting-edge advancements.\n\nWe place great emphasis on meeting your roofing needs and providing you with the highest quality of service. Our experienced staff undergoes extensive training and holds the necessary certifications to ensure that your roofing job is carried out with skill and precision, delivering exceptional results. You can trust us to handle your roofing project with utmost professionalism and expertise.",
  },
];

export const AboutUs = () => {
  const [openItem, setOpenItem] = useState(0);

  return (
    <section className="section-padding bg-wrapper">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="badge mb-6 border border-[#9a9c9e]">
            About Garic Roofs
          </span>
          <h2 className="mb-4 text-2xl font-normal sm:text-3xl md:text-4xl">
            About Garic Roofs
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Fixed image (replaces slider) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100"
          >
            <img
              src={IMAGE_URL}
              alt="Garic Roofs"
              className="absolute inset-0 h-full w-full object-contain"
              loading="lazy"
            />
          </motion.div>

          {/* Content + dropdowns */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card p-6 md:p-8"
          >
            <h3 className="mb-4 text-2xl font-normal">About Garic Roofs</h3>

            <div className="space-y-4">
              <p>
                For over two decades, Garic Roofs has been the trusted name in
                quality roofing services for homeowners in our area. Our
                certified professionals are dedicated to exceeding customer
                expectations with their expert workmanship. Whether you need a
                complete roof replacement or a minor repair, we offer a
                comprehensive range of roofing services, specializing in shingle,
                metal, and flat roof installations.
              </p>

              <p>
                Rest assured, all our services come with a full satisfaction
                guarantee. Throughout the project, our experienced staff will be
                available to address any questions you may have. We take pride in
                using only the finest materials and adhering strictly to the
                highest industry standards. Keeping up-to-date with the latest
                roofing technologies and techniques ensures that your project
                benefits from the most advanced practices available.
              </p>

              <p>
                At Garic Roofs, we are committed to delivering excellent customer
                service at a fair price. Contact us today for a complimentary
                estimate on any of our roofing services, and discover why we are
                your trusted local roofer.
              </p>

              <p>
                With every leak fix and repair, we provide a warranty against
                defects. Upon completing roof repairs or restoration, you’ll be
                covered by a 7-year warranty against existing roof leaks. While we
                always strive for a 99% success rate in sourcing and repairing roof
                leaks, we acknowledge that leak detection can be challenging. If we
                don’t find the leak the first time, we’ll persist until it’s
                resolved, or you’ll receive a money-back guarantee.
              </p>

              <p>
                We proudly serve Melbourne, Laverton, Oakleigh, the Prahran,
                Chadstone, and the Moonee Ponds, and we’re the only roof repair
                company in the area that will refund your quoted price if we can’t
                detect and rectify the water ingress issue.
              </p>
            </div>

            <h3 className="mt-8 mb-4 text-2xl font-normal">Why Choose Us?</h3>

            {/* Dropdowns - keep original styles */}
            <div className="space-y-4">
              {accordionItems.map((item, index) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-xl border border-outline bg-card-secondary"
                >
                  <button
                    onClick={() => setOpenItem(openItem === index ? -1 : index)}
                    className="flex w-full items-center justify-between p-4 text-left"
                    type="button"
                  >
                    <span className="font-medium text-title">{item.title}</span>
                    {openItem === index ? (
                      <Minus className="h-5 w-5 shrink-0 text-icon" />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 text-icon" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openItem === index && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {item.content.split("\n\n").map((para, i) => (
                          <p key={i} className="px-4 pb-4 text-sm leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};