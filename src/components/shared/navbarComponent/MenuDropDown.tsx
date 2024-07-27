import { Menu } from "lucide-react";
import Container from "../Container";
import { useState } from "react";
import { motion } from "framer-motion";

const dropParent = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.3,
    },
  },
  close: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      duration: 0.3,
    },
  },
};

const dropChildren = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const MenuDropDown = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <motion.div className="relative">
        <button
          onClick={() => setVisible(!visible)}
          className="bg-[#fbb71c] hover:bg-[#fbb71c] w-8 h-8 rounded-md px-[5px]"
        >
          <Menu />
        </button>
        <motion.div
          initial="close"
          animate={visible ? "open" : "close"}
          variants={dropParent}
          style={{ originY: 0 }}
          className="bg-white rounded-md w-[200px] h-[300px] absolute top-12 z-50 text-gray-900"
        >
          <motion.ul
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            variants={dropChildren}
          >
            <li className="m-[14px]">Weightlifting</li>
            <hr />
            <li className="m-[14px]">Cycling</li>
            <hr />
            <li className="m-[14px]">Yoga</li>
            <hr />
            <li className="m-[14px]">CrossFit</li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default MenuDropDown;
