import Image from "next/image"
import Link from "next/link"
import { Award, BookOpen, Heart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InspirationStation() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-green-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Award className="h-6 w-6 text-green-500" />
            <span className="font-bold text-xl">Inspiration Station</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-green-400 hover:text-green-300 transition">
              About
            </Link>
            <Link href="#partners" className="text-green-400 hover:text-green-300 transition">
              Partners
            </Link>
            <Link href="#heroes" className="text-green-400 hover:text-green-300 transition">
              Unsaid Heroes
            </Link>
            <Link href="#achievers" className="text-green-400 hover:text-green-300 transition">
              High Achievers
            </Link>
          </nav>
          <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-900">
            Join Us
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-400">Inspiration Station</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-green-200">
            Showcasing the talents of all students from all districts from Kerala
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Explore Talents</Button>
            <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-900">
              Submit Your Work
            </Button>
          </div>
        </div>
      </section>

      {/* What is Inspiration Station */}
      <section id="about" className="py-16 bg-green-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-green-400">What is Inspiration Station?</h2>
              <p className="text-green-100 mb-4">
                Inspiration Station is a platform dedicated to showcasing the exceptional talents and achievements of
                students across all districts of Kerala. We believe in recognizing and celebrating the diverse skills,
                creativity, and dedication of our young minds.
              </p>
              <p className="text-green-100 mb-4">
                Our mission is to inspire the next generation by highlighting the accomplishments of their peers,
                creating a community of motivated learners who push boundaries and strive for excellence.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white mt-2">Learn More</Button>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Students collaborating"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Partners */}
      <section id="partners" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Community Partners</h2>
          <p className="text-center text-green-100 max-w-3xl mx-auto mb-12">
            We collaborate with educational institutions, government bodies, and organizations across Kerala to identify
            and promote exceptional talent.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((partner) => (
              <div key={partner} className="bg-green-900 p-6 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-800 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Users className="h-10 w-10 text-green-400" />
                  </div>
                  <h3 className="font-medium text-green-300">Partner {partner}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Achievers */}
      <section id="achievers" className="py-16 bg-green-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-green-400">High Achievers</h2>
              <p className="text-green-100 mt-2">From all communities across Kerala</p>
            </div>
            <Tabs defaultValue="academic" className="mt-4 md:mt-0">
              <TabsList className="bg-green-900">
                <TabsTrigger value="academic" className="data-[state=active]:bg-green-700">
                  Academic
                </TabsTrigger>
                <TabsTrigger value="arts" className="data-[state=active]:bg-green-700">
                  Arts
                </TabsTrigger>
                <TabsTrigger value="sports" className="data-[state=active]:bg-green-700">
                  Sports
                </TabsTrigger>
                <TabsTrigger value="innovation" className="data-[state=active]:bg-green-700">
                  Innovation
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((achiever) => (
              <Card key={achiever} className="bg-green-900 border-green-800">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt={`Achiever ${achiever}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-green-300">Student Name</CardTitle>
                        <CardDescription className="text-green-400">District, School</CardDescription>
                      </div>
                    </div>
                    <Award className="h-5 w-5 text-yellow-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-green-100 text-sm">
                    Achieved excellence in academics with state rank in higher secondary examinations. Represented
                    Kerala in national science olympiad.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-green-600 hover:bg-green-700 text-white">View All Achievers</Button>
          </div>
        </div>
      </section>

      {/* Unsaid Heroes */}
      <section id="heroes" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-green-400">Unsaid Heroes</h2>
          <p className="text-center text-green-100 max-w-3xl mx-auto mb-12">
            These people are the helpers without any name, working tirelessly behind the scenes to support and nurture
            talent across Kerala.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((hero) => (
              <div key={hero} className="bg-green-900 rounded-lg p-6 text-center">
                <div className="w-24 h-24 mx-auto relative mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={`Unsaid Hero ${hero}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-medium text-xl text-green-300 mb-2">Mentor Name</h3>
                <p className="text-green-400 mb-3">Role / Contribution</p>
                <p className="text-green-100 text-sm">
                  Dedicated their life to teaching and mentoring students from underprivileged backgrounds, helping them
                  achieve their dreams.
                </p>
                <div className="mt-4 flex justify-center">
                  <Heart className="h-5 w-5 text-red-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section (Right Side) */}
      <section className="py-16 bg-green-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Latest Success Stories</h2>
              <div className="grid gap-6">
                {[1, 2, 3].map((story) => (
                  <div key={story} className="bg-green-900 rounded-lg p-6">
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
                        <h3 className="font-medium text-xl text-green-300 mb-2">From Challenges to Triumph</h3>
                        <p className="text-green-100 text-sm mb-3">
                          How a student from a remote village overcame obstacles to achieve national recognition in
                          science innovation.
                        </p>
                        <Link href="#" className="text-green-400 hover:text-green-300 text-sm flex items-center gap-1">
                          Read full story <BookOpen className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-green-900 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-green-300">Upcoming Events</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((event) => (
                  <div key={event} className="border-b border-green-800 pb-3 last:border-0">
                    <p className="text-green-400 text-sm">June {event + 10}, 2023</p>
                    <h3 className="font-medium text-green-200">State Science Exhibition</h3>
                    <p className="text-green-100 text-sm">Thiruvananthapuram</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 border-green-500 text-green-500 hover:bg-green-800">
                View All Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-green-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-6 w-6 text-green-500" />
                <span className="font-bold text-xl text-green-400">Inspiration Station</span>
              </div>
              <p className="text-green-100 text-sm">
                Celebrating and showcasing the exceptional talents of students across Kerala.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-green-400 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-green-100 hover:text-green-300 text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-100 hover:text-green-300 text-sm">
                    Our Partners
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-100 hover:text-green-300 text-sm">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-100 hover:text-green-300 text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-green-400 mb-4">Districts</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-green-100 hover:text-green-300 text-sm">
                    Thiruvananthapuram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-100 hover:text-green-300 text-sm">
                    Kochi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-100 hover:text-green-300 text-sm">
                    Kozhikode
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-100 hover:text-green-300 text-sm">
                    View All Districts
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-green-400 mb-4">Connect With Us</h3>
              <p className="text-green-100 text-sm mb-4">
                Join our community and stay updated with the latest success stories and events.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full">Subscribe</Button>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-6 text-center text-green-100 text-sm">
            &copy; {new Date().getFullYear()} Inspiration Station. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

