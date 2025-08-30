import { useState } from "react";
import { motion } from "framer-motion";

const icons = ['🛠️', '⚙️', '💅', '💇‍♀️', '🫂', '🌳', '🧑‍🌾',  '💡', '🍽️', '🏡', '📖', '💼', '⚡', '🎼', '🧹', '💉', '💻', '📱'];

export default function BG_animation() {
  return (
    <div className="bg-animation">
      {icons.map((icon, idx) => (
        <FloatingIcon key={idx} icon={icon} />
      ))}
    </div>
  );
}

function FloatingIcon({ icon }) {
  const [key, setKey] = useState(0);

  const randomX = Math.random() * window.innerWidth;
  const randomY = window.innerHeight + Math.random() * 100;
  const randomSize = Math.random() * 20 + 24;
  const randomDuration = Math.random() * 5 + 5;

  return (
    <motion.span
      key={key}
      className="floating-icons"
      initial={{ y: randomY, x: randomX, opacity: 0.2 }}
      animate={{ y: "-10vh" }}
      transition={{
        duration: randomDuration,
        ease: "linear"
      }}
      onAnimationComplete={() => setKey(prev => prev + 1)} //restart animation after complete
      style={{
        position: "absolute",
        fontSize: randomSize
      }}
    >
      {icon}
    </motion.span>
  );
}