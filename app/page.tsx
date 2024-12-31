'use client';

import React from 'react';
import { Twitter, Instagram, Linkedin, Youtube, Figma } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeProvider } from '../providers/theme'; // Adjust the path accordingly
import './globals.css'; // adjust the path as needed


const LogoSlider = () => {
  const logos = [
    { name: 'Figma', src: 'https://i.ibb.co/ct0rQVw/Item-figma-png.png' },
    { name: 'Product Hunt', src: 'https://i.ibb.co/qCZf2nv/Item-producthunt-png.png' },
    { name: '9999', src: 'https://i.ibb.co/f0h19Ry/Item-gaga-png.png' },
    { name: 'abdz', src: 'https://i.ibb.co/Gv26vQx/Item-abdz-png.png' },
    { name: 'Dribbble', src: 'https://i.ibb.co/Rc0m07V/Item-dribbble-png.png' },
    { name: 'Adobe', src: 'https://i.ibb.co/DMXxnQT/Item-adobe-png.png' }
  ];

  const doubledLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden group">
      {/* Fade on the left */}
      <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
    
      {/* Fade on the right */}
      <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
    
      {/* Logo Slider */}
      <div className="relative flex items-center group-hover:blur-sm group-hover:relative">
        <div className="animate-slide flex items-center gap-8 whitespace-nowrap hover:[animation-play-state:paused]">
          {doubledLogos.map((logo, index) => (
            <img
              key={`${logo.name}-${index}`}
              src={logo.src}
              alt={logo.name}
              className="h-7 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    
      {/* Featured by Text on Hover with Gradient */}
      <div className="absolute inset-0 flex items-center justify-center font-semibold font-fraunces text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl">
        <span>Featured by</span>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  description?: string;
  year: string;
  icon: string;
  isNew?: boolean;
  badge?: {
    text: string;
    color: string;
  };
}

const ProjectCard = ({ title, description, year, icon, isNew, badge }: ProjectCardProps) => (
  <div className="w-[224px] h-[250px] bg-[#111] hover:bg-[#161616] rounded-2xl p-6 transition-all duration-300 relative group">
    <div className="relative mb-3">
      <img src={icon} alt={title} className="w-16 h-16" />
      {badge && (
        <span className={`absolute top-0 right-0 ${badge.color} text-xs px-2 py-0.5 rounded-full`}>
          {badge.text}
        </span>
      )}
    </div>
    <h3 className="text-white text-lg font-medium mb-1">{title}</h3>
    <p className="text-gray-500 text-sm">{year}</p>
    {description && <p className="text-gray-400 text-sm mt-2 line-clamp-2">{description}</p>}
  </div>
);

const Home = () => {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-black text-white font-inter relative px-6 py-12">
        <div className="max-w-[700px] mx-auto mt-36">
          {/* Header Section */}
          <div className=" mb-24 ">
            <h1 className="text-6xl sm:text-6xl font-light leading-tight font-fraunces">
              Hi, I'm 
              <span className="relative inline-block mx-2">
                <img
                  src="https://i.ibb.co/LrDZhC2/image.jpg"
                  alt="Profile"
                  className="inline-block w-20 h-20 rounded-full object-cover  align-middle"
                />
                
              </span>
              Vuk M,
            </h1>
          
            <h1 className="text-6xl sm:text-6xl font-light leading-tight font-fraunces">
            founder & ninja at
            </h1>
            <h1 className="text-6xl sm:text-6xl font-light leading-tight font-fraunces mt-4">
              WolfMail.
            </h1>

            <div className="flex gap-6 pt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Figma size={20} />
              </a>
            </div>

            <p className="text-gray-400 text-lg max-w-2xl pt-4">
              A ninja who loves design and code. I tell stories through my designs
              and illustrations. I spend most of my time designing for brands and
              creating design resources and tools.
            </p>

            <p className="text-gray-500 pt-8">
              Building what I love at{' '}
              <a href="https://wolfmail.services" className="text-pink-500 hover:text-pink-400 transition-colors">
                @wolfmail
              </a>
              .services
            </p>

            <div className="pt-8">
              <LogoSlider />
            </div>
          </div>

          {/* Current Work Section */}
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-gray-500">CURRENT WORK</h2>
              <a href="#" className="text-blue-400 hover:text-blue-300">All Work →</a>
            </div>

            <div className="grid grid-cols-3 gap-4 justify-items-center">
              <ProjectCard
                title="WolfMail"
                description="Custom Email Templates and Email Marketing"
                year="2024"
                icon="https://i.ibb.co/5j4xVKb/Wolf-Mail-Logo.png"
                badge={{ text: 'UPDATE', color: 'bg-orange-500' }}
              />
              <ProjectCard
                title="StarLabs"
                description="Software Development"
                year="2024"
                icon="https://i.ibb.co/2qcdvrV/starlabss.png"
                badge={{ text: 'DESIGN', color: 'bg-purple-500' }}
              />
              <ProjectCard
                title="KT Ikerkor+"
                description="Management & Growth"
                year="2024"
                icon="https://i.ibb.co/LtHyXMd/inerkor.png"
                badge={{ text: 'NEW', color: 'bg-green-500' }}
              />
              <ProjectCard
                title="RetroBoosting"
                description="RetroBoosting is a service for League of Legends"
                year="2023-now"
                icon="https://i.ibb.co/mcHjtGs/logo-1.png"
                badge={{ text: 'NEW', color: 'bg-red-500' }}
              />
              <ProjectCard
                title="PearlDB"
                description="Build the documentation you've always wanted"
                year="2023-now"
                icon="https://i.ibb.co/kyL6CPt/PearlDB.png"
                badge={{ text: 'FIGMA', color: 'bg-purple-500' }}
              />
              <ProjectCard
                title="SeoAI"
                description="Automatically write, publish and rank blog posts on an"
                year="2021-now"
                icon="https://i.ibb.co/yWnrh6R/seoAI.png"
              />
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-20 bg-[#0A0A0A] rounded-2xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl mb-4">
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Say hi!
                </span>
              </h2>
              <p className="text-gray-400 max-w-md mb-6">
                Want to create something awesome? Or, you have any query? Drop an email or tweet.
              </p>
              <div className="flex space-x-6">
                <a 
                  href="https://twitter.com/intent/tweet" 
                  className="text-[#1DA1F2] hover:underline"
                >
                  tweet
                </a>
                <a 
                  href="mailto:vuk@wolfmail.services" 
                  className="text-orange-400 hover:underline"
                >
                  vuk@wolfmail.services
                </a>
              </div>
            </div>
            <div className="absolute right-0 bottom-2 transform ">
              <img 
                src="https://i.ibb.co/6JC4fkS/3dicons-mail-front-color.png" 
                alt="" 
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center text-gray-500 mt-20">
            <p>©vuk 2023</p>
          </footer>
        </div>
      </main>
    </ThemeProvider>
  );
};

export default Home;
