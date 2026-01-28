'use client'; 
 
 import { motion } from 'framer-motion'; 
 
 const achievements = [ 
   { 
     year: '2024', 
     title: 'Global Client Expansion', 
     description: 'Successfully partnered with 50+ international clients across 10 different countries, delivering tailored digital solutions.', 
     stats: '50+', 
     statsLabel: 'Clients' 
   }, 
   { 
     year: '2024', 
     title: '100+ Projects Completed', 
     description: 'Reached a significant milestone of delivering over 100 successful projects with a 98% client satisfaction rate.', 
     stats: '98%', 
     statsLabel: 'Satisfaction' 
   }, 
   { 
     year: '2023', 
     title: 'Top Rated Agency', 
     description: 'Recognized as a top-rated digital agency on leading freelance platforms for consistency and quality.', 
     stats: '#1', 
     statsLabel: 'Rated' 
   }, 
   { 
     year: '2022', 
     title: 'Innovation Hub Launch', 
     description: 'Launched our internal innovation hub to experiment with emerging technologies like AI and AR/VR.', 
     stats: '3+', 
     statsLabel: 'Patents' 
   } 
 ]; 
 
 const containerVariants = { 
   hidden: { opacity: 0 }, 
   visible: { 
     opacity: 1, 
     transition: { 
       staggerChildren: 0.15, 
       delayChildren: 0.2 
     } 
   } 
 }; 
 
 const itemVariants = { 
   hidden: { opacity: 0, y: 30 }, 
   visible: { 
     opacity: 1, 
     y: 0, 
     transition: { 
       duration: 0.6, 
       ease: [0.22, 1, 0.36, 1] as const
     } 
   } 
 }; 
 
 const headerVariants = { 
   hidden: { opacity: 0, y: 20 }, 
   visible: { 
     opacity: 1, 
     y: 0, 
     transition: { 
       duration: 0.8, 
       ease: [0.22, 1, 0.36, 1] as const
     } 
   } 
 }; 
 
 export default function Achievements() { 
   return ( 
     <section className="bg-white min-h-screen py-24 lg:py-32 font-sans"> 
       <div className="max-w-6xl mx-auto px-6 lg:px-8"> 
         
         {/* Header */} 
         <motion.div 
           className="mb-20 lg:mb-28" 
           initial="hidden" 
           whileInView="visible" 
           viewport={{ once: true, margin: "-100px" }} 
           variants={headerVariants} 
         > 
           <div className="flex items-center gap-4 mb-6"> 
             <span className="text-gray-500 text-sm font-medium tracking-widest uppercase"> 
               Milestones 
             </span> 
             <div className="h-px flex-1 max-w-24 bg-gray-200"></div> 
           </div> 
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight tracking-tight text-balance"> 
             Our Journey to<br /> 
             <span>Digital Excellence</span> 
           </h2> 
         </motion.div> 
 
         {/* Timeline */} 
         <motion.div 
           className="relative" 
           initial="hidden" 
           whileInView="visible" 
           viewport={{ once: true, margin: "-50px" }} 
           variants={containerVariants} 
         > 
           {/* Vertical line */} 
          <div className="absolute left-[6px] md:left-[140px] top-0 bottom-0 w-px bg-gray-200 block" /> 
          
          {achievements.map((item, index) => ( 
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="group relative pb-16 last:pb-0" 
            > 
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-0 pl-8 md:pl-0"> 
                {/* Year */} 
                <div className="md:w-[140px] shrink-0"> 
                  <span className="text-sm font-medium tracking-widest text-gray-500"> 
                    {item.year} 
                  </span> 
                </div> 
                
                {/* Timeline dot */} 
                <div className="flex absolute left-[6px] md:left-[140px] top-1 md:top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-[#04d9ff] border-2 border-[#04d9ff] group-hover:scale-125 transition-all duration-300" /> 
                 
                 {/* Content Card */} 
                 <div className="flex-1 md:pl-12"> 
                   <div className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 group-hover:border-gray-400 transition-colors duration-300 shadow-sm"> 
                     <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6"> 
                       <div className="flex-1"> 
                         <h3 className="text-xl lg:text-2xl font-semibold text-black mb-3 transition-colors duration-300"> 
                           {item.title} 
                         </h3> 
                         <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-xl"> 
                           {item.description} 
                         </p> 
                       </div> 
                       
                       {/* Stats */} 
                       <div className="shrink-0 flex items-center gap-3 lg:flex-col lg:items-center lg:gap-1 bg-[#04d9ff] rounded-lg px-4 py-3 lg:px-5 lg:py-4"> 
                         <span className="text-3xl lg:text-4xl font-bold text-black"> 
                           {item.stats} 
                         </span> 
                         <span className="text-xs font-medium tracking-widest uppercase text-black/70"> 
                           {item.statsLabel} 
                         </span> 
                       </div> 
                     </div> 
                   </div> 
                 </div> 
               </div> 
             </motion.div> 
           ))} 
         </motion.div> 
 
       </div> 
     </section> 
   ); 
 }