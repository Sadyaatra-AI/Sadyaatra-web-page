'use client';
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const FEATURES = [
    {
        type: 'image',
        src: '/feature-1.png',
        title: 'Explore Section',
        description:
            'Browse each destination and view them in 360\u00b0 immersive mode before actually visiting the place',
    },
    {
        type: 'image',
        src: '/feature-2.png',
        title: 'Planning Section',
        description:
            'AI powered platform mastered in generating the detailed day-wise itinerary according to user preferences and budget',
    },
    {
        type: 'image',
        src: '/feature-3.png',
        title: 'Community Section',
        description:
            'Share your travel experiences, tips, and recommendations with the Sadyaatra community',
    },
    {
        type: 'image',
        src: '/feature-4.png',
        title: 'Travel agencies marketplace',
        description:
            'Sadyaatra connects you with verified travel agencies and tour operators to book your next adventure',
    },
];

export default function Features() {
    return (
        <section className="relative bg-[#2b2728] py-24 px-[6vw]">

            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-100px' }}
                className="mx-auto mb-16 max-w-2xl text-center"
            >
                <p className="mb-4 font-serif text-2xl italic text-[#9eb094] md:text-3xl">
                    Why Sadyaatra
                </p>
                <h2 className="font-serif text-2xl font-medium leading-snug text-white md:text-3xl">
                    Efforts is ours, experience is yours
                </h2>
            </motion.div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2">

                {/* Card 1 - Tall left card */}
                <motion.div
                    custom={0}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="group relative overflow-hidden rounded-2xl bg-[#353030] md:row-span-2"
                >
                    <img
                        src={FEATURES[0].src}
                        alt={FEATURES[0].title}
                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 md:p-8">
                        <h3 className="font-serif text-2xl text-white">
                            {FEATURES[0].title}
                        </h3>
                        <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#ded7cb]">
                            {FEATURES[0].description}
                        </p>
                    </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    custom={1}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="flex flex-col justify-between overflow-hidden rounded-2xl bg-[#353030] p-6"
                >
                    <img
                        src={FEATURES[1].src}
                        alt={FEATURES[1].title}
                        className="mb-5 h-40 w-full rounded-xl object-cover"
                    />
                    <div>
                        <h3 className="font-serif text-xl text-white">
                            {FEATURES[1].title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#ded7cb]">
                            {FEATURES[1].description}
                        </p>
                    </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    custom={2}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="flex flex-col justify-between overflow-hidden rounded-2xl bg-[#353030] p-6"
                >
                    <img
                        src={FEATURES[2].src}
                        alt={FEATURES[2].title}
                        className="mb-5 h-40 w-full rounded-xl object-cover"
                    />
                    <div>
                        <h3 className="font-serif text-xl text-white">
                            {FEATURES[2].title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#ded7cb]">
                            {FEATURES[2].description}
                        </p>
                    </div>
                </motion.div>

                {/* Card 4 - Wide bottom card */}
                <motion.div
                    custom={3}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="flex flex-col overflow-hidden rounded-2xl bg-[#353030] md:col-span-2 md:flex-row"
                >
                    <img
                        src={FEATURES[3].src}
                        alt={FEATURES[3].title}
                        className="h-48 w-full object-cover md:h-auto md:w-1/2"
                    />
                    <div className="flex flex-col justify-center p-6 md:p-8">
                        <h3 className="font-serif text-xl text-white md:text-2xl">
                            {FEATURES[3].title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#ded7cb]">
                            {FEATURES[3].description}
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
