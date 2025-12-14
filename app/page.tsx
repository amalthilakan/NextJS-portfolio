'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiDownload, HiArrowRight } from 'react-icons/hi';
import PageTransition from '@/components/PageTransition';
import { CardContainer, CardItem, CardBody } from '@/components/ui/3d-card';

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-medium text-[#7C4DFF] mb-2"
          >
            Hello, I'm
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
          >
            Amal Thilakan
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
          >
            Software Engineer & Data Science Specialist
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed"
          >
            I build exceptional digital experiences that are fast, accessible, and visually stunning.
            Specializing in full-stack development and data science solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-[#7C4DFF] text-white font-semibold hover:bg-[#6c42e0] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#7C4DFF]/30"
            >
              Hire Me <HiArrowRight />
            </Link>
            <a
              href="/AmalResumeATS.pdf"
              download
              className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              Download Resume <HiDownload />
            </a>
          </motion.div>
        </div>

        {/* Image */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex-1 order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-[#7C4DFF] rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <Image
              src="/profile.jpg"
              alt="Amal Thilakan"
              fill
              className="object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl relative z-10"
              priority
            />
          </div>
        </motion.div> */}
        {/* 3D Card - Right Side */}
        <div className="flex-1 order-1 md:order-2 flex justify-center">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-[#7C4DFF]/[0.2] dark:bg-gray-900 dark:border-white/[0.2] border-black/[0.1] w-[280px] sm:w-[320px] md:w-[380px] h-auto rounded-2xl p-0 border overflow-hidden">
              <CardItem
                translateZ="100"
                className="w-full"
              >
                <Image
                  src="/profile.jpg"
                  alt="Amal Thilakan"
                  width={380}
                  height={480}
                  className="w-full h-[350px] sm:h-[400px] md:h-[450px] object-cover object-top -mb-5 group-hover/card:shadow-xl"
                  priority
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </PageTransition>
  );
}
