"use client";

import Image from "next/image"
import Link from "next/link"
import { Award, BookOpen, Heart, Users } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InspirationStation() {
  return (
    <div className="min-h-screen bg-[#0c0914] text-white">
      {/* Header */}
      <div className="pt-16">
      <header className="fixed top-0 left-0 w-full bg-[#0c0914]/50 backdrop-blur-md border-b border-[#6e3a9c] z-50">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <span className="font-bold text-xl text-[#E787FC] animate-fade-in">Inspiration Station</span>
    </div>
    <nav className="hidden md:flex gap-6">
      <Link href="#about" className="text-[#E787FC] hover:text-[#f5b3ff] transition animate-fade-in">
        About
      </Link>
      <Link href="#partners" className="text-[#E787FC] hover:text-[#f5b3ff] transition animate-fade-in">
        Partners
      </Link>
      {/* <Link href="#heroes" className="text-[#E787FC] hover:text-[#f5b3ff] transition animate-fade-in">
        Unsaid Heroes
      </Link> */}
      {/* <Link href="#achievers" className="text-[#E787FC] hover:text-[#f5b3ff] transition animate-fade-in">
        High Achievers
      </Link> */}
    </nav>
  </div>
</header>
      </div>


      {/* What is Inspiration Station */}
      <section
  id="about"
  className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
  style={{
    backgroundImage: "url('/speech.webp')",
    backgroundSize: "cover",
    backgroundAttachment: "fixed", // Parallax effect
    backgroundBlendMode: "overlay",
    backgroundColor: "#1a0f2e",
  }}
>
  <div className="container mx-auto px-4 ">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 -mt-4 text-[#F0F7EE] animate-fade-in text-center md:text-left">
          Inspiration Station
        </h1>
        <p className="text-xl md:text-2xl mb-24 max-w-3xl mx-auto md:mx-0 text-[#BDFFFD] animate-fade-in text-center md:text-left">
          Showcasing the talents of all students from all districts of Kerala.
        </p>
        <h2 className="text-3xl font-bold mb-4 text-[#9FFFF5] animate-fade-in">
          What is Inspiration Station?
        </h2>
        <p className="text-[#EEE0CB] mb-4 animate-fade-in">
          Inspiration Station is a platform dedicated to showcasing the exceptional talents and achievements of
          students across all districts of Kerala. We believe in recognizing and celebrating the diverse skills,
          creativity, and dedication of our young minds.
        </p>
        <p className="text-[#FBFFF1] mb-4 animate-fade-in">
          Our mission is to inspire the next generation by highlighting the accomplishments of their peers,
          creating a community of motivated learners who push boundaries and strive for excellence.
        </p>
        {/* Buttons */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <Button className="bg-white/10 backdrop-blur-md border border-white/30 rounded-lg shadow-lg animate-fade-in px-6 py-3">
            <Link href="https://mulearn.org/">Join Us</Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gray-800/30 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-lg shadow-md animate-fade-in hover:bg-gray-800/50">
                Learn More
              </Button>
            </DialogTrigger>
            <DialogContent
  className="!bg-[#6e3a9c]/20 !p-6 !rounded-xl !border !border-[#E787FC]/30
    before:absolute before:inset-0 before:bg-[#E787FC]/10 before:rounded-xl
    !backdrop-blur-xl !backdrop-saturate-150
    !shadow-[0_0_30px_-10px_rgba(231,135,252,0.5)]
    data-[state=open]:!animate-in data-[state=open]:!fade-in-0 data-[state=open]:!zoom-in-95">
              <DialogHeader className="!mb-6">
                <DialogTitle className="!text-2xl !font-bold !bg-gradient-to-r !from-[#E787FC] !to-[#f5b3ff] !bg-clip-text !text-transparent">
                  About Inspiration Station
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <p className="text-white/90 text-lg leading-relaxed">
                  Inspiration Station is your gateway to discovering exceptional student talent across Kerala. Our platform serves as a bridge connecting aspiring students with opportunities, mentors, and resources.
                </p>
                <div className="bg-[#6e3a9c]/60 backdrop-blur-sm p-6 rounded-xl border border-[#E787FC]/20">
                  <p className="text-[#E787FC] font-semibold mb-4 text-lg">Key Features:</p>
                  <ul className="space-y-3 ml-4">
                    {["Showcase student achievements", "Connect with mentors", 
                      "Access educational resources", "Participate in events", 
                      "Join a community of learners"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/80">
                        <span className="text-[#E787FC]">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-white/90 text-lg">
                  Join us in building a brighter future for Kerala's youth through education, inspiration, and community support.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Community Partners */}
      <section id="partners" className="py-16 bg-[#0c0914]">
        <div className="container mx-auto px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E787FC]/5 to-[#6e3a9c]/5 rounded-3xl backdrop-blur-xl border border-white/5"></div>
          <div className="relative z-10 p-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#E787FC]">Community Partners</h2>
            <p className="text-center text-[#d8b4ff] max-w-3xl mx-auto mb-12">
              We collaborate with educational institutions, government bodies, and organizations across Kerala to identify
              and promote exceptional talent.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  {[
    { id: 1, img: '/kite.webp', name: 'KITES', className: 'w-40 h-22 p-2 bg-white rounded-lg' }, // Special styling for KITES
    { id: 2, img: '/future school.webp', name: 'FUTURE SCHOOL' },
    { id: 3, img: '/Tinkerhub.webp', name: 'TINKERHUB', className: 'w-34 h-15 bg-white rounded-lg p-0' },
    { id: 4, img: '/Tinkerhub.webp', name: 'MAKER STATION', className: 'w-34 h-15 bg-white rounded-lg p-0' },
    { id: 5, img: '/IEEE.svg', name: 'IEEE' },
    { id: 6, img: '/either.webp', name: 'ETHERINDIA', className: 'w-32 h-15 bg-white rounded-lg p-0'},
    { id: 7, img: '/Mask group.png', name: 'KSUM' },
    { id: 8, img: 'https://educatetoday.net/assets/site/school_profile.jpg', name: 'Govt. Technical Higher Secondary School, Sreekaryam' }
  ].map((partner) => (
    <div
      key={partner.id}
      className="bg-[#2a1745]/60 backdrop-blur-md p-6 rounded-lg flex items-center justify-center group
        relative overflow-hidden cursor-pointer border border-[#E787FC]/10
        before:absolute before:inset-0 before:bg-[#3a1f56]/60 before:opacity-0 before:transition-opacity before:duration-300
        hover:before:opacity-100 transform perspective-1000"
      style={{
        transition: 'transform 0.3s ease-out',
      }}
      onMouseMove={(e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'rotateX(0) rotateY(0)';
      }}
    >
      <div className="text-center relative z-10 transition-transform duration-300 group-hover:scale-110">
        <div className={`${
          partner.id === 1 || partner.id === 3 || partner.id === 4 || partner.id === 6 ? partner.className : 'w-32 h-20'
        } bg-white/10 backdrop-blur-sm mx-auto flex items-center justify-center mb-4 
          shadow-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(231,135,252,0.3)] overflow-hidden`}>
          <Image
            src={partner.img}
            alt={partner.name}
            width={partner.id === 7 ? 200 : partner.id === 1 || partner.id === 3 || partner.id === 4 || partner.id === 6 ? 136 : 128}
            height={partner.id === 7 ? 140 : partner.id === 1 || partner.id === 3 || partner.id === 4 || partner.id === 6 ? 60 : 80}
            className={`${
              partner.id === 7 ? 'scale-75 object-contain' :
              partner.id === 1 || partner.id === 3 || partner.id === 4 || partner.id === 6 ? 'w-full h-full object-cover' : 'object-contain'
            } transition-transform duration-300 group-hover:scale-110`}
          />
        </div>
        <h3 className="font-medium text-[#d8b4ff] transition-all duration-300 group-hover:text-[#E787FC]">
          {partner.name}
        </h3>
      </div>
    </div>
  ))}
</div>
          </div>
        </div>
      </section>

      
      {/* <section id="heroes" className="py-16 bg-[#0c0914] mt-16">
        <div className="container mx-auto px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E787FC]/5 to-[#6e3a9c]/5 rounded-3xl backdrop-blur-xl border border-white/5"></div>
          <div className="relative z-10 p-8">
            <h2 className="text-3xl font-bold mb-4 text-center text-[#E787FC]">Unsaid Heroes</h2>
            <p className="text-center text-[#d8b4ff] max-w-3xl mx-auto mb-12">
              These people are the helpers without any name, working tirelessly behind the scenes to support and nurture
              talent across Kerala.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { id: 1, name: 'Mentor John', role: 'Academic Advisor', img: '/placeholder.svg' },
                { id: 2, name: 'Dr. Sarah', role: 'Career Counselor', img: '/placeholder.svg' },
                { id: 3, name: 'Prof. Thomas', role: 'Research Guide', img: '/placeholder.svg' },
                { id: 4, name: 'Mrs. Lakshmi', role: 'Student Coordinator', img: '/placeholder.svg' }
              ].map((hero) => (
                <div
                  key={hero.id}
                  className="bg-[#2a1745]/60 backdrop-blur-md p-6 rounded-lg flex items-center justify-center group
                    relative overflow-hidden cursor-pointer border border-[#E787FC]/10
                    before:absolute before:inset-0 before:bg-[#3a1f56]/60 before:opacity-0 before:transition-opacity before:duration-300
                    hover:before:opacity-100 transform perspective-1000"
                  style={{
                    transition: 'transform 0.3s ease-out',
                  }}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;

                    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotateX(0) rotateY(0)';
                  }}
                >
                  <div className="text-center relative z-10 transition-transform duration-300 group-hover:scale-110">
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full mx-auto flex items-center justify-center mb-4 
                      shadow-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(231,135,252,0.3)] overflow-hidden">
                      <Image
                        src={hero.img}
                        alt={hero.name}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-medium text-xl text-[#E787FC] mb-2 transition-all duration-300">{hero.name}</h3>
                    <p className="text-[#d8b4ff] mb-3 transition-all duration-300">{hero.role}</p>
                    <div className="mt-4 flex justify-center">
                      <Heart className="h-5 w-5 text-red-400 transition-transform duration-300 group-hover:scale-125" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section id="achievers" className="py-16 bg-[#1a0f2e]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#E787FC]">High Achievers</h2>
              <p className="text-[#d8b4ff] mt-2">From all communities across Kerala</p>
            </div>
          </div>

          
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(9)].map((_, index) => (
              <Card key={index} className="bg-[#2a1745] border-[#6e3a9c]">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt={`Achiever ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-[#E787FC]">Student Name {index + 1}</CardTitle>
                        <CardDescription className="text-[#d8b4ff]">District, School</CardDescription>
                      </div>
                    </div>
                    <Award className="h-5 w-5 text-yellow-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#d8b4ff] text-sm">
                    Achieved excellence in academics with state rank in higher secondary examinations. Represented
                    Kerala in national science olympiad.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-[#6e3a9c] hover:bg-[#8347bd] text-white">View All Achievers</Button>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-[#1a0f2e]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-[#E787FC]">Latest Success Stories</h2>
              <div className="grid gap-6">
                {[1, 2, 3].map((story) => (
                  <div key={story} className="bg-[#2a1745] rounded-lg p-6">
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=200&width=200"
                          alt={`Story ${story}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-xl text-[#E787FC] mb-2">From Challenges to Triumph</h3>
                        <p className="text-[#d8b4ff] text-sm mb-3">
                          How a student from a remote village overcame obstacles to achieve national recognition in
                          science innovation.
                        </p>
                        <Link href="#" className="text-[#E787FC] hover:text-[#f5b3ff] text-sm flex items-center gap-1">
                          Read full story <BookOpen className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#2a1745] rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-[#E787FC]">Upcoming Events</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((event) => (
                  <div key={event} className="border-b border-[#6e3a9c] pb-3 last:border-0">
                    <p className="text-[#d8b4ff] text-sm">June {event + 10}, 2023</p>
                    <h3 className="font-medium text-[#E787FC]">State Science Exhibition</h3>
                    <p className="text-[#d8b4ff] text-sm">Thiruvananthapuram</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 border-[#E787FC] text-[#E787FC] hover:bg-[#3a1f56]">
                View All Events
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#0c0914] to-[#1a0f2e] py-12 border-t border-[#6e3a9c]">
  <div className="container mx-auto px-4">
    {/* Top Section */}
    <div className="grid md:grid-cols-4 gap-8">
      {/* About Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-6 w-6 text-[#E787FC]" />
          <span className="font-bold text-2xl text-[#E787FC]">Inspiration Station</span>
        </div>
        <p className="text-[#d8b4ff] text-sm leading-relaxed">
          Celebrating and showcasing the exceptional talents of students across Kerala. Join us in inspiring the next
          generation of achievers.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-bold text-[#E787FC] mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <Link href="#about" className="text-[#d8b4ff] hover:text-[#f5b3ff] text-sm">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#partners" className="text-[#d8b4ff] hover:text-[#f5b3ff] text-sm">
              Our Partners
            </Link>
          </li>
        </ul>
      </div>

      {/* Districts */}
      <div>
        <h3 className="font-bold text-[#E787FC] mb-4">Districts</h3>
        <ul className="space-y-2">
          <li className="text-[#d8b4ff] text-sm">
            Thiruvananthapuram
          </li>
          <li className="text-[#d8b4ff] text-sm">
            Kochi
          </li>
          <li className="text-[#d8b4ff] text-sm">
            Kozhikode
          </li>
          <li className="text-[#d8b4ff] text-sm">
            Thrissur
          </li>
          <li className="text-[#d8b4ff] text-sm">
            Malappuram
          </li>
          <li className="text-[#d8b4ff] text-sm">
            Kozhikode
          </li>
          <li className="text-[#d8b4ff] text-sm">
            Wayanad
          </li>
          <li className="text-[#d8b4ff] text-sm">
            Kannur
          </li>
          <li className="text-[#d8b4ff] text-sm">
            Kasaragod
          </li>
        </ul>
      </div>

      {/* Connect With Us */}
      <div>
        <h3 className="font-bold text-[#E787FC] mb-4">Connect With Us</h3>
        <p className="text-[#d8b4ff] text-sm mb-4 leading-relaxed">
          Join our community and stay updated with the latest success stories and events.
        </p>
        <Button className="bg-[#6e3a9c] hover:bg-[#8347bd] text-white w-full mb-4">
        <Link href="https://mulearn.org/">Join Us</Link>
        </Button>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-[#6e3a9c] mt-12"></div>

    {/* Bottom Section */}
    <div className="mt-6 flex justify-center items-center text-center">
      <p className="text-[#d8b4ff] text-sm">
        &copy; {new Date().getFullYear()} Inspiration Station. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
  )
}