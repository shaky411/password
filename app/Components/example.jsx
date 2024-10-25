"use client"

import { useState, useMemo } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";

const Item = ({ id, title, subtitle, ...props }) => (
  <motion.div key={id} layoutId={id} {...props}>
    <span>{subtitle}</span>
    <h2>{title}</h2>
  </motion.div>
);

export default function Example() {
  const [selectedId, setSelectedId] = useState(null);

  const items = useMemo(
    () => [
      { id: 1, title: "Title 1", subtitle: "Subtitle 1" },
      { id: 2, title: "Title 2", subtitle: "Subtitle 2" },
      { id: 3, title: "Title 3", subtitle: "Subtitle 3" },
      { id: 4, title: "Title 4", subtitle: "Subtitle 4" },
    ],
    []
  );

  return (
    <LayoutGroup>
      <ul className="">
        {items.map((item) => (
          <Item
            key={item.id}
            {...item}
            onClick={() => setSelectedId(item.id)}
          />
        ))}
      </ul>
      <AnimatePresence>
        {selectedId && (
          <motion.div className="" key="modal" exit={{ opacity: 0 }}>
            <motion.div className="" layoutId={selectedId}>
              Hello World
              <motion.button
                className=""
                onClick={() => setSelectedId(null)}
              >
                {/* X icon here */}
              </motion.button>
            </motion.div>
            <motion.div
              key="backdrop"
              className=""
              onClick={() => setSelectedId(null)}
              variants={{
                hidden: { opacity: 0, transition: { duration: 0.16 } },
                visible: { opacity: 0.8, transition: { delay: 0.04, duration: 0.2 } },
              }}
              initial="hidden"
              exit="hidden"
              animate="visible"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
