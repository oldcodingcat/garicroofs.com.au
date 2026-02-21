import { motion } from "framer-motion";

const colours = [
  // Row 1: Whites & Light Neutrals
  { name: "Perfect White", color: "#E8E4DC" },
  { name: "Pearl Half", color: "#E0D5C6" },
  { name: "Snow Fall White", color: "#E5E3DD" },
  { name: "Dover White", color: "#E4E2DC" },
  { name: "Builders White", color: "#E8E6E2" },
  { name: "Calm", color: "#A4A48E" },
  
  // Row 2: Greys
  { name: "Southerly", color: "#BCBAB4" },
  { name: "Shale Grey Double™", color: "#9A9A92" },
  { name: "undefined", color: "#7A8692" },
  { name: "Dark Charcoal", color: "#3C3E40" },
  { name: "Surfmist", color: "#E4E0D6" },
  { name: "Silence", color: "#E2DED4" },
  
  // Row 3: Additional Whites
  { name: "Modern White Quarter", color: "#E6E6E6" },
  { name: "Heirloom", color: "#EBE6DA" },
  { name: "Arctic White", color: "#F5F5F5" },
  { name: "Bright On White", color: "#EBEBEB" },
  { name: "Classic Cream", color: "#E8D9A8" },
  { name: "Tuscany", color: "#D4936A" },
  
  // Row 4: Terracotta Tones
  { name: "Tile Terracotta", color: "#B07458" },
  { name: "Mid Terracotta", color: "#A45D38" },
  { name: "Pale Terracotta", color: "#C9A48A" },
  { name: "Coast Terracotta", color: "#B46A48" },
  { name: "Tuscan Red", color: "#8B3028" },
  { name: "Manor Red®", color: "#6E2820" },
  
  // Row 5: Greys & Darks
  { name: "Windspray®", color: "#8C8C86" },
  { name: "Basalt®", color: "#6E6E68" },
  { name: "Charcoal", color: "#2E3C3A" },
  { name: "Night Sky®", color: "#0C0E10" },
  { name: "Shale Grey™", color: "#B8B6AE" },
  { name: "Monument®", color: "#3C3E3C" },
  
  // Row 6: Greens & Nature
  { name: "Slate Grey", color: "#4A4E48" },
  { name: "Ironstone®", color: "#3E4042" },
  { name: "Woodland Grey®", color: "#5C5E56" },
  { name: "Pale Eucalypt®", color: "#8A9A7E" },
  { name: "Cottage Green®", color: "#2E4A38" },
  { name: "Wallaby®", color: "#6E6E66" },
  
  // Row 7: Browns & Neutrals
  { name: "Stone", color: "#9A9280" },
  { name: "Mission Brown", color: "#2E2220" },
  { name: "Paperbark®", color: "#D6CBAA" },
  { name: "Jasper®", color: "#8A7A66" },
  { name: "Evening Haze®", color: "#C8C0AC" },
  { name: "Gully™", color: "#868474" },
  
  // Row 8: Additional
  { name: "Chocolate", color: "#5A4234" },
  { name: "Dune®", color: "#A8A090" },
  { name: "Deep Ocean®", color: "#3A4E60" },
];

// Helper function to determine if text should be light or dark based on background
const getContrastColor = (hexColor: string): string => {
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#1c1e1f" : "#ffffff";
};

export const ColourVisualizer = () => {
  return (
    <section id="colour-options" className="section-padding">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="badge mb-6 border border-[#9a9c9e]">Colour Options</span>
          <h2 className="mb-4 text-2xl font-normal sm:text-3xl md:text-4xl">
            Explore Our Colour Range
          </h2>
          <p className="text-lg">
            From classic whites to bold terracotta tones, find the perfect 
            colour to complement your home's style and surroundings.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl bg-card shadow-sm"
        >
          {/* Scrollable Colour Grid Container */}
          <div 
            className="overflow-y-auto p-4 sm:p-6 md:p-10"
            style={{ maxHeight: "420px" }}
          >
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-6 md:gap-5">
              {colours.map((colour, index) => (
                <motion.div
                  key={colour.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  className="group"
                >
                  <div
                    className="relative flex aspect-square min-h-[80px] items-center justify-center rounded-lg sm:rounded-xl shadow-sm ring-1 ring-outline transition-all group-hover:scale-105 group-hover:shadow-md sm:min-h-[100px] md:min-h-[120px]"
                    style={{ backgroundColor: colour.color }}
                  >
                    <span 
                      className="px-2 text-center text-xs font-medium leading-tight md:text-sm"
                      style={{ color: getContrastColor(colour.color) }}
                    >
                      {colour.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Bottom fade indicator */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 rounded-b-2xl bg-gradient-to-t from-card to-transparent" />
        </motion.div>

        <p className="mt-6 text-center text-sm">
          Can't find the colour you're looking for? We offer custom colour 
          matching to achieve your perfect shade.
        </p>
      </div>
    </section>
  );
};