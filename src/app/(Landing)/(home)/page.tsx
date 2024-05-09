'use client'

import { Button } from '@/components/button'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from 'react';
//import { Metadata } from 'next'

//export const metadata: Metadata = {
//  title: 'Home',
//}

const ContentComponent = ({ content }) => {
  const refs = content.map(() => useRef<HTMLParagraphElement>(null));
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  
  const animations = content.map((_, index) => {
    const { scrollYProgress } = useScroll({
      target: refs[index],
      offset: ['0 1', '1.33 1'],
    });

    
    return scrollYProgress;
  });
  const animations = content.map((_, index) => {
    const { scrollYProgress } = useScroll({
      target: refs[index],
      offset: ['0 1', '1.33 1'],
    });

    
    return scrollYProgress;
  });
  return (
    <>
      <Button variant="ghost" title="Home"/>
      {content.map((item, index) => (
        <motion.div 
          key={index}
          ref={refs[index]}
          style={{
            scale: animations[index],
            opacity: animations[index],
          }} 
        >
          <p>
            {item}
          </p>
        </motion.div>
      ))}
    </>
  );
};


export default function Home() {
  const content = [
    <>
    <img src="/Black-Logo.png" alt="" />
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perferendis molestiae suscipit maiores accusantium? Provident dolore dolorem magni nulla. Architecto illo magnam aperiam odit iste veritatis tenetur ipsa ratione temporibus!",
    </>
  ];

  return (
  <>
    <ContentComponent content={content} />
    <ContentComponent content={content} />
    <ContentComponent content={content} />
    <ContentComponent content={content} />
  </>
  );
}