import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children, className = "" }) => {
  return (
    <div className={cn(
      "mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:gap-4 md:auto-rows-[18rem] md:grid-cols-3",
      className
    )}>
      {children}
    </div>
  );
};

interface BentoCardProps {
  title: string | React.ReactNode;
  description: React.ReactNode;
  header: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  header,
  icon,
  className = ""
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-3 sm:space-y-4 rounded-xl border border-transparent bg-[#BBC6CC]/90 backdrop-blur-sm p-4 sm:p-5 md:p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-white/20",
        className
      )}
    >
      {/* Header/Animation Section */}
      {header}
      
      {/* Content Section */}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="font-sans font-bold text-[#003366] text-lg sm:text-xl mt-2 mb-2">
          {title}
        </div>
        <div className="font-sans font-normal text-[#212842] text-sm sm:text-base">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
