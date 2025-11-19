import React from 'react';
import Hero from '../components/Hero';
import DestinasiUnggulan from '../components/DestinasiUnggulan';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { budayaData } from '../data/budayaData';
import { kulinerData } from '../data/kulinerData';
import Tilt from 'react-parallax-tilt';

const HomePage: React.FC = () => {
  const kulinerPreview = kulinerData.slice(0, 4);
  const budayaPreview = budayaData[0];

  return (
    <div className="relative overflow-hidden">
      {/* ✅ Tambahkan video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-[-10]"
      >
        <source src="/upload/taput.mp4" type="video/mp4" />
        Browser Anda tidak mendukung video.
      </video>

      
      {/* ✅ Semua konten tetap sama */}
      <div className="relative z-10">
        <Hero />
        <DestinasiUnggulan />

       
<Section
  id="kuliner-preview"
  title="Cita Rasa Khas"
  subtitle="Cicipi kelezatan kuliner otentik dari Tarutung"
>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
    {kulinerPreview.map((item, index) => (
      <motion.div
        key={item.name}
        className="group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.2}
          scale={1.02}
          transitionSpeed={250}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          className="rounded-xl overflow-hidden shadow-xl bg-white/5 backdrop-blur-md border border-white/20"
        >
          <div className="relative h-64">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <h3 className="absolute bottom-4 left-4 font-serif text-white text-xl font-bold drop-shadow-lg">
              {item.name}
            </h3>
          </div>
        </Tilt>
      </motion.div>
    ))}
  </div>

  {/* Button Tetap Glassy */}
  <div className="text-center mt-12">
    <Link
      to="/kuliner"
      className="px-8 py-3 rounded-full font-bold text-white bg-white/10 backdrop-blur-md border border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105 hover:bg-white/20 shadow-md"
    >
      Lihat Semua Kuliner
    </Link>
  </div>
</Section>

        <Section
  id="budaya-preview"
  title="Warisan Budaya"
  subtitle="Selami kekayaan tradisi dan kearifan lokal tanah Batak"
  className="bg-transparent"
>
  <motion.div
    className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.7 }}
  >
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-2xl"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <img
        src="/upload/pulos.jpg"
        alt={budayaPreview.title}
        className="w-full h-80 object-cover"
      />
    </motion.div>

    <div className="relative bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
      <h3 className="font-serif text-3xl font-bold text-white mb-4">
        {budayaPreview.title}
      </h3>
      <p className="text-white/90 text-lg mb-6">{budayaPreview.description}</p>
      <Link
        to="/budaya"
        className="font-bold text-brand-primary hover:underline"
      >
        Pelajari Lebih Lanjut
      </Link>
    </div>
  </motion.div>
</Section>

      </div>
    </div>
  );
};

export default HomePage;
