'use client';

import Link from 'next/link'
import { Dribbble, Instagram, Search, Twitter, Sun, Moon } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { useTheme } from 'next-themes' // Import useTheme hook
import { useEffect, useState } from 'react'

const Header = () => {
  const { theme, setTheme } = useTheme(); // Get current theme and setTheme function
  const [mounted, setMounted] = useState(false); // Track if the component has mounted

  useEffect(() => {
    setMounted(true); // Set mounted to true after the component mounts
  }, []);

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark'); // Switch theme
  };

  // If not mounted, return null to prevent hydration mismatch
  if (!mounted) return null;

  return (
    <header className="fixed top-6 left-0 right-0 z-50 mx-auto max-w-[70%] md:max-w-[800px]">
      <div 
        className="container flex items-center justify-between rounded-full px-6 py-3"
        style={{
          backgroundColor: 'rgba(18, 12, 27, 0.3)',
          boxShadow: 'inset 0px 0px 8px rgba(255, 255, 255, 0.08)'
        }}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://i.ibb.co/p3LvcQH/Link-dark-SVG.png"
            alt="Vuk M."
            width={100}
            height={40}
            unoptimized
            priority
          />
        </Link>
        
        <nav className="hidden md:flex items-center justify-center gap-6 max-w-[700px] mx-auto">
          <Link href="/" className="text-muted-foreground hover:text-primary">home</Link>
          <Link href="/work" className="text-muted-foreground hover:text-primary">work</Link>
          <Link href="/story" className="text-muted-foreground hover:text-primary">story</Link>
          <Link href="/about" className="text-muted-foreground hover:text-primary">about</Link>
          <Link href="/book" className="text-muted-foreground hover:text-primary">book</Link>
          <Link href="/services" className="text-orange-500 hover:text-orange-600">services</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Twitter className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Dribbble className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Instagram className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>

          {/* Dark/Light mode toggle button */}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" /> // Sun icon for light mode
            ) : (
              <Moon className="h-5 w-5" /> // Moon icon for dark mode
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
