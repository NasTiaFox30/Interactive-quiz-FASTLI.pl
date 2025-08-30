import { motion } from "framer-motion";

const icons = ['🛠️', '⚙️', '💅', '💇‍♀️', '🫂', '🌳', '🧑‍🌾',  '💡', '🍽️', '🏡', '📖', '💼', '⚡', '🎼', '🧹', '💉', '💻', '📱'];

export default function BG_animation() {
  return (
    <div className="bg-animation">
      {icons.map((icon, idx) => (
          <motion.span
            className="floating-icons"
            key={idx}
            initial={{ y: Math.random() + window.innerHeight, x: Math.random() * window.innerWidth }}
            animate={{ y: "-10vh" }}
            transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
            }}
        >
          {icon}
        </motion.span>
      ))}
    </div>
  );
}
