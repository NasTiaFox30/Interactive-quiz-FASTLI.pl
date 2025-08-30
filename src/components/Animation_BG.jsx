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
  
}
