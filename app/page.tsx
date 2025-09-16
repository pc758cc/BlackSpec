"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Shield, Award, Globe, Factory, Users, Zap } from "lucide-react"
import { ProductCarousel } from "@/components/product-carousel"
import Link from "next/link"
import React from "react"

export default function Home() {
  const featuredProducts = [
    {
      name: "Bellow Seal Gate Valve",
      image: "/blue-industrial-bellow-seal-gate-valve.jpg",
      description: "Designed to provide leak-proof sealing and is suitable for high-temperature applications.",
    },
    {
      name: "Stainless Steel Ball Valve",
      image: "/stainless-steel-ball-valve.jpg",
      description: "Premium ball valve with excellent corrosion resistance and precision engineering.",
    },
    {
      name: "Bronze Gate Valve",
      image: "/bronze-gate-valve-industrial.jpg",
      description: "Offers excellent corrosion resistance and is ideal for marine and industrial applications.",
    },
    {
      name: "Cast Steel Globe Valve",
      image: "/cast-steel-globe-valve.jpg",
      description: "Designed for high-pressure and high-temperature service applications.",
    },
    {
      name: "Butterfly Check Valve",
      image: "/butterfly-check-valve.jpg",
      description: "Prevents backflow and is suitable for large diameter pipeline applications.",
    },
    {
      name: "Electric Actuator Motors",
      image: "/electric-actuator-motors.jpg",
      description: "High-performance electric actuator motors for precise valve control and automation systems.",
    },
    {
      name: "Stainless Steel Pipes",
      image: "/stainless-steel-pipes.jpg",
      description: "High-grade stainless steel pipes suitable for chemical and pharmaceutical industries.",
    },
    {
      name: "Pneumatic Motors",
      image: "/pneumatic-motors.jpg",
      description: "Reliable pneumatic motors designed for industrial automation and valve operation applications.",
    },
  ]

  const featuredProductsByCategory = {
    valves: {
      name: "Duplex Stainless Steel Ball Valve",
      image: "/stainless-steel-ball-valve.jpg",
      description:
        "Ball valves, also called shut-off valves are used to control the flow of liquid and gases in a pipeline by means of a rotary ball having a bore. These are manufactured of excellent grade raw material with superior durability and performance.",
      features: ["High Durability", "Corrosion Resistant", "Precision Engineering", "Quality Tested"],
    },
    pipes: {
      name: "Stainless Steel Seamless Pipes",
      image: "/stainless-steel-pipes.jpg",
      description:
        "Premium grade stainless steel seamless pipes designed for high-pressure applications in chemical, pharmaceutical, and food processing industries. Manufactured with precision to ensure optimal performance and longevity.",
      features: ["Seamless Construction", "High Pressure Rating", "Corrosion Resistant", "Food Grade Quality"],
    },
    motors: {
      name: "Electric Actuator Motors",
      image: "/electric-actuator-motors.jpg",
      description:
        "High-performance electric actuator motors engineered for precise valve control and industrial automation. These motors provide reliable operation with excellent torque characteristics and energy efficiency.",
      features: ["High Torque Output", "Energy Efficient", "Precise Control", "Long Service Life"],
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/industrial-valve-facility-hero.jpg"
            alt="Industrial Valve Manufacturing Facility"
            className="w-full h-full object-cover scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-600/90 backdrop-blur-sm border border-blue-400/30 text-white px-6 py-3 text-sm font-semibold rounded-full shadow-lg">
                  Premium Industrial Solutions
                </Badge>

                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
                    Industrial Valves
                    <span className="block text-blue-400 drop-shadow-lg">You Can Trust</span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-white/95 font-medium drop-shadow-lg">
                    Precision Engineering for Critical Applications
                  </p>
                </div>

                <p className="text-lg text-white/90 leading-relaxed max-w-2xl drop-shadow-md">
                  Leading manufacturer of high-quality industrial valves, pipes, and automation solutions. Serving
                  critical industries with precision-engineered products that ensure safety, reliability, and optimal
                  performance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    size="lg"
                    className="bg-blue-600/90 backdrop-blur-sm hover:bg-blue-700/90 text-white px-8 py-4 text-lg shadow-xl border border-blue-400/30 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/80 text-white hover:bg-white/20 hover:text-white px-8 py-4 text-lg bg-white/10 backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  >
                    View Products
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">20+</div>
              <div className="text-white/90 text-sm font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">500+</div>
              <div className="text-white/90 text-sm font-medium">Product Range</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">1000+</div>
              <div className="text-white/90 text-sm font-medium">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-600" />
              <span className="text-gray-900 font-semibold text-lg">Certified Excellence</span>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              {[
                { name: "ISO 9001", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
                { name: "CE MARKED", color: "bg-blue-50 text-blue-700 border-blue-200" },
                { name: "MAKE IN INDIA", color: "bg-orange-50 text-orange-700 border-orange-200" },
                { name: "ISI MARK", color: "bg-red-50 text-red-700 border-red-200" },
                { name: "BIS MARK", color: "bg-purple-50 text-purple-700 border-purple-200" },
              ].map((cert, index) => (
                <Badge key={index} className={`${cert.color} px-4 py-2 text-sm font-medium`}>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {cert.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-600 text-white border-blue-600">
                  <Factory className="w-4 h-4 mr-2" />
                  Excellence Driven
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Industrial Valve <span className="text-blue-600">Manufacturers</span> in India
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Leading the industry with precision-engineered valves for diverse industrial applications. Our
                  commitment to quality and innovation sets new standards in valve manufacturing.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  {["Gate Valves", "Ball Valves", "Check Valves", "Butterfly Valves", "Control Valves"].map(
                    (valve, index) => (
                      <div key={index} className="flex items-center gap-3 group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
                        <span className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                          {valve}
                        </span>
                      </div>
                    ),
                  )}
                </div>
                <div className="space-y-4">
                  {["Globe Valves", "Special Valves", "Plug Valves", "Strainers", "Safety Valves"].map(
                    (valve, index) => (
                      <div key={index} className="flex items-center gap-3 group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
                        <span className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                          {valve}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="relative">
              <img
                src="/modern-valve-manufacturing-facility.jpg"
                alt="Modern Manufacturing"
                className="w-full h-[600px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Globe className="w-4 h-4" />
              Global Industrial Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Industries We <span className="text-blue-600">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Delivering precision-engineered valve solutions across critical industrial sectors worldwide, ensuring
              operational excellence and safety standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                name: "Oil & Gas",
                image: "/oil-and-gas-industry-sunset.jpg",
                icon: Zap,
                description: "High-pressure valves for upstream, midstream, and downstream operations",
                applications: ["Refineries", "Pipelines", "Offshore Platforms", "Processing Plants"],
              },
              {
                name: "Petrochemical",
                image: "/petrochemical-refinery-plant.jpg",
                icon: Factory,
                description: "Corrosion-resistant solutions for chemical processing environments",
                applications: ["Chemical Plants", "Refineries", "Storage Facilities", "Distribution"],
              },
              {
                name: "Aerospace",
                image: "/aerospace-manufacturing-facility.jpg",
                icon: Shield,
                description: "Precision-engineered components meeting aerospace quality standards",
                applications: ["Aircraft Systems", "Ground Support", "Testing Facilities", "Manufacturing"],
              },
              {
                name: "Pharmaceutical",
                image: "/pharmaceutical-clean-room.jpg",
                icon: Users,
                description: "Sanitary and sterile valve solutions for pharmaceutical manufacturing",
                applications: ["Clean Rooms", "Process Lines", "Quality Control", "Packaging Systems"],
              },
            ].map((industry, index) => (
              <Card
                key={index}
                className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.name}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <industry.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-800">Key Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {industry.applications.map((app, appIndex) => (
                          <span key={appIndex} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-md">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600 font-medium">Countries Served</div>
                <div className="text-sm text-gray-500">Global Presence</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-gray-600 font-medium">Industrial Projects</div>
                <div className="text-sm text-gray-500">Successfully Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">99.8%</div>
                <div className="text-gray-600 font-medium">Quality Rating</div>
                <div className="text-sm text-gray-500">Customer Satisfaction</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600 font-medium">Technical Support</div>
                <div className="text-sm text-gray-500">Global Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of industrial valves, pipes, and motors engineered for excellence
            </p>
          </div>
          <ProductCarousel products={featuredProducts} />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Product</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our premium solutions engineered for excellence
            </p>
          </div>

          <FeaturedProductSection products={featuredProductsByCategory} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trusted by <span className="text-primary">Industry Leaders</span>
            </h2>
            <p className="text-muted-foreground">Serving major corporations across diverse industries</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
            {[
              { src: "/ntpc-logo.jpg", alt: "NTPC" },
              { src: "/ongc-logo.jpg", alt: "ONGC" },
              { src: "/iocl-logo.jpg", alt: "IOCL" },
              { src: "/gail-logo.jpg", alt: "GAIL" },
              { src: "/hpcl-logo.jpg", alt: "HPCL" },
              { src: "/bpcl-logo.jpg", alt: "BPCL" },
              { src: "/bhel-logo.jpg", alt: "BHEL" },
              { src: "/tata-steel-logo.jpg", alt: "Tata Steel" },
              { src: "/larsen-toubro-logo.jpg", alt: "L&T" },
              { src: "/reliance-industries-logo.jpg", alt: "Reliance" },
              { src: "/adani-logo.jpg", alt: "Adani" },
              { src: "/sail-logo.jpg", alt: "SAIL" },
            ].map((client, index) => (
              <img
                key={index}
                src={client.src || "/placeholder.svg"}
                alt={client.alt}
                className="h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get in <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your industrial valve requirements? Our expert team is here to provide tailored solutions
              for your business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phone & Email</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="font-semibold">+91 98765 43210</p>
                  <p className="font-semibold">+91 87654 32109</p>
                  <p>info@pharmachindia.com</p>
                  <p>sales@pharmachindia.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Office Address</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="font-semibold">Pharmach Engineering Pvt Ltd</p>
                  <p>Industrial Area, Phase-II</p>
                  <p>Sector 28, Gurgaon</p>
                  <p>Haryana - 122001, India</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <p className="text-sm text-blue-600 font-medium mt-4">24/7 Emergency Support Available</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
              <p className="text-lg text-gray-600 mb-8">
                Our technical experts are ready to discuss your specific requirements and provide customized valve
                solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  Request Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 bg-transparent"
                >
                  Download Catalog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quality Assurance</h3>
              <ul className="space-y-2 text-white/80">
                <li>Quality Management Systems</li>
                <li>Products exceeding expectations</li>
                <li>Well-equipped quality control</li>
                <li>Rigorous testing standards</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-white/80">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Why Choose Us</li>
                <li>Client Testimonials</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-white/80">
                <li>Ball Valves</li>
                <li>Gate Valves</li>
                <li>Butterfly Valves</li>
                <li>Check Valves</li>
                <li>Control Valves</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Specialties</h3>
              <ul className="space-y-2 text-white/80">
                <li>Cast Iron Gate Valve</li>
                <li>Forged Steel Gate Valve</li>
                <li>Stainless Steel Gate Valve</li>
                <li>Bronze Gate Valve</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 Pharmach Engineering Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeaturedProductSection({ products }: { products: any }) {
  const [selectedCategory, setSelectedCategory] = React.useState("valves")

  const categories = [
    { id: "valves", name: "Valves", icon: "⚙️" },
    { id: "pipes", name: "Pipes", icon: "🔧" },
    { id: "motors", name: "Motors", icon: "⚡" },
  ]

  const currentProduct = products[selectedCategory]

  return (
    <div className="space-y-12">
      <div className="flex justify-center">
        <div className="flex bg-white rounded-lg p-2 shadow-lg border">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={currentProduct.image || "/placeholder.svg"}
            alt={currentProduct.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg transition-all duration-500"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900">{currentProduct.name}</h3>
          <p className="text-lg text-gray-600 leading-relaxed">{currentProduct.description}</p>
          <div className="flex flex-wrap gap-3 mb-6">
            {currentProduct.features.map((feature: string, index: number) => (
              <Badge key={index} className="bg-blue-600 text-white border-blue-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                {feature}
              </Badge>
            ))}
          </div>
          <div className="pt-4">
            <Link
              href={`/products?category=${selectedCategory}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
