'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import PageTransition from '@/components/PageTransition';
import { CardContainer, CardItem, CardBody } from '@/components/ui/3d-card';
import { EncryptedText } from '@/components/ui/encrypted-text';
import Footer from '@/components/Footer';
import { FloatingDock } from '@/components/ui/floating-dock';
import ResumeButton from '@/components/ResumeButton';
import { IconBrandGithub, IconPalette, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import { useState, useEffect, useCallback } from 'react';
import { fadeInDown, fadeIn, fadeInUp } from '@/lib/animations';

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);
  useEffect(() => {
    const interval = setInterval(toggleFlip, 5000);
    return () => clearInterval(interval);
  }, [toggleFlip]);

  const links = [
    {
      title: "Color Palette Generator",
      icon: (
        <IconPalette className="h-full w-full text-neutral-500 dark:text-neutral-300 group-hover:text-white transition-colors duration-200" />
      ),
      href: "/tools/color-palette-generator",
      className: "hover:bg-[#7C4DFF] dark:hover:bg-[#7C4DFF]",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300 group-hover:text-white dark:group-hover:text-white transition-colors duration-200" />
      ),
      href: "https://github.com/amalthilakan",
      className: "hover:bg-black dark:hover:bg-black",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300 group-hover:text-white transition-colors duration-200" />
      ),
      href: "https://linkedin.com/in/amalthilakan",
      className: "hover:bg-[#0077b5] dark:hover:bg-[#0077b5]",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300 group-hover:text-white transition-colors duration-200" />
      ),
      href: "https://www.instagram.com/joyboy__._?igsh=d2tvMzNiMDFjMXZ3",
      className: "hover:bg-[#E1306C] dark:hover:bg-[#E1306C]",
    },
  ];
  return (
    <>
      <PageTransition>
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-10">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <motion.h2
              {...fadeInDown}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-medium text-[#7C4DFF] mb-2"
            >
              Hello, I'm
            </motion.h2>
            <EncryptedText
              text="AMAL THILAKAN"
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
              revealDelayMs={70}
            />
            <motion.h3
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
            >
              Software Engineer & Data Science Specialist
            </motion.h3>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed"
            >
              I build exceptional digital experiences that are fast, accessible, and visually stunning.
              Specializing in full-stack development and data science solutions.
            </motion.p>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full bg-[#7C4DFF] text-white font-semibold hover:bg-[#6c42e0] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#7C4DFF]/30"
              >
                Hire Me <HiArrowRight />
              </Link>
              <ResumeButton />
            </motion.div>
          </div>

          {/* Image */}
          <div className="flex-1 order-1 md:order-2 flex justify-center">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-[#7C4DFF]/20 dark:bg-gray-900 dark:border-white/20 border-2 border-gray-200 w-[280px] sm:w-[320px] md:w-[380px] h-auto rounded-2xl p-0 overflow-hidden">
                <CardItem
                  translateZ="100"
                  className="w-full h-[350px] sm:h-[400px] md:h-[450px] -mb-5"
                >
                  <div
                    className="w-full h-full relative transition-all duration-500 transform-3d cursor-pointer"
                    style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                    onClick={() => setIsFlipped(!isFlipped)}
                  >
                    {/* Front Face */}
                    <div className="absolute inset-0 w-full h-full backface-hidden">
                      <Image
                        // src="/amal_image.png"
                        src="/profile.jpg"
                        alt="Amal Thilakan"
                        fill
                        className="object-cover object-[center_top] rounded-xl group-hover/card:shadow-xl"
                        priority
                      />
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)] rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-800">
                      <Image
                        // src="/amalAnimated.png"
                        src="/amal_animated.png"
                        alt="Amal Thilakan anime"
                        fill
                        className="object-cover object-[center_top] group-hover/card:shadow-xl"
                      />
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

        </div>
        <div className="flex items-center justify-center mb-5 mt-5">
          <FloatingDock
            items={links}
          />
        </div>
      </PageTransition >
      <Footer />
    </>
  );
}
