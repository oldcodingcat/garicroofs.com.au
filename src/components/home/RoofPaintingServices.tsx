import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

const services: Service[] = [
  {
    title: "Roof Repairs",
    description:
      "Don't underestimate the seriousness of a damaged roof, as it can result in even costlier repairs if left unattended. At our company, we understand the urgency and offer swift and dependable roof repair services. Rest assured, our prompt action will safeguard your home from additional damage and ensure a proper seal against the elements. Let us handle your roofing concerns promptly and effectively to protect your home and your peace of mind.",
    image: "/images/services/roof-repairs.webp",
    link: "/services/roof-repairs/",
  },
  {
    title: "Roof Leak",
    description:
      "Numerous factors can lead to a leaking roof, such as improper installation, aging materials, and storm damage. However, worry not, as we offer swift and trustworthy leak repair services. Count on us to efficiently fix the leaks and ensure your home remains dry and secure against the elements. With our expertise, you can rest assured that your roof will be in capable hands, keeping your home safe and protected.",
    image: "/images/services/roof-leak.webp",
    link: "/services/roof-leak/",
  },
  {
    title: "Roof Restoration",
    description:
      "Opt for our comprehensive roof restoration services to prolong the life of your existing roof. Our team of skilled professionals will conduct a thorough inspection, diligently repair any issues, and expertly recoat your roofing system. By entrusting us with the task, you can rest assured that your roof will receive the utmost care and maintenance, ensuring it functions at its best and stands the test of time.",
    image: "/images/services/roof-restoration.webp",
    link: "/services/roof-restoration/",
  },
  {
    title: "Roof Maintenance",
    description:
      "Regular maintenance is key to keeping your roof in optimal condition, and we understand its significance. That's why we offer personalized maintenance plans tailored to meet your specific needs. Our plans are designed to maximize the lifespan of your roof and shield it from potential damage in the future.",
    image: "/images/services/roof-maintenance.webp",
    link: "/services/roof-maintenance/",
  },
  {
    title: "24/7 Emergency Repairs & Make Safes",
    description:
      "At Garic Roofs, we are at your service 24/7 for emergency repairs and make-safe services. Our skilled team is well-equipped to swiftly identify roofing issues, offer effective solutions, and promptly repair any damage to ensure your roof remains secure and protected from the elements. You can rely on our experience and dedication to handle roofing emergencies promptly and efficiently, providing you with the peace of mind you need during challenging times.",
    image: "/images/services/24-7-emergency-repairs-make-safes.webp",
    link: "/services/24-7-emergency-repairs-make-safes/",
  },
  {
    title: "Roof Replacement",
    description:
      "At our company, we excel in the replacement of various roof types, including shingle, metal, and flat roofs. With the expertise of our experienced team, we will guide you in selecting the most suitable material and design that aligns with your specific needs while also considering your budget.",
    image: "/images/services/roof-replacement.webp",
    link: "/services/roof-replacement/",
  },
  {
    title: "Metal Pergolas & Patios",
    description:
      "Elevate your outdoor space with our exquisite metal pergolas, offering a touch of elegance and sophistication. Crafted as custom-made structures, our pergolas seamlessly blend into your property, causing minimal disruption to your landscaping. With their sleek design, they not only enhance the aesthetics but also provide practical benefits, shielding you from the sun and rain while creating a warm and welcoming ambiance for entertaining guests.",
    image: "/images/services/metal-pergolas-patios.webp",
    link: "/services/metal-pergolas-patios/",
  },
  {
    title: "Metal Roofing & Flashings",
    description:
      "Experience the expertise of our team through professional metal roofing and flashings installation services. We take pride in staying up-to-date with the latest trends and technologies in the industry, ensuring that your metal roof not only looks exceptional but also delivers long-lasting protection for your home.",
    image: "/images/services/metal-roofing-flashings.webp",
    link: "/services/metal-roofing-flashings/",
  },
  {
    title: "Ridge Capping Restoration",
    description:
      "If your roof has endured wind or hail damage, our ridge capping restoration service is here to assist. Our specialists will take the necessary measures to restore your roof effectively, ensuring it receives the proper care and long-term protection against the elements. Utilizing only the highest quality materials and techniques, we guarantee a weatherproof seal that will endure for years to come.",
    image: "/images/services/ridge-capping-restoration.webp",
    link: "/services/ridge-capping-restoration/",
  },
  {
    title: "Safety Roof Anchors",
    description:
      "At Garic Roofs, we understand the paramount importance of keeping your roof safe and secure. That's why we offer safety roof anchors as an additional measure to protect against wind or weather-related damage. Our anchors are both lightweight and robust, ensuring a secure and stable installation when correctly implemented. With our safety roof anchors, you can have peace of mind, knowing that your roof is well-protected, no matter the weather conditions.",
    image: "/images/services/safety-roof-anchors.webp",
    link: "/services/safety-roof-anchors/",
  },
  {
    title: "Restoration & Remediation Services",
    description:
      "At Garic Roofs, we specialize in comprehensive restoration and remediation services for all types of roofs. Whether your roof has suffered from storm damage, hail damage, wind damage, or water seepage, we are here to help restore it to its original condition. Additionally, we offer mold and mildew removal services, as well as gutter cleaning and repair.",
    image: "/images/services/restoration-remediation.webp",
    link: "/services/restoration-remediation/",
  },
];

export const RoofPaintingServices = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="badge mb-6">Roofing Services</span>
          <h2 className="text-3xl sm:text-4xl">
            Complete Roofing Solutions Across Melbourne
          </h2>
        </div>

        {/* 3 COLUMN GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-card shadow-md overflow-hidden"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="h-56 w-full object-cover"
              />

              {/* Content BELOW image */}
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 text-title">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-content mb-5">
                  {service.description}
                </p>

                <Button
                  variant="outline"
                  className="border-primary text-title hover:bg-primary hover:text-white"
                  asChild
                >
                  <a href={service.link}>Learn More</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};