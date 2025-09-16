"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

const valves = [
  {
    name: "Bellow Seal Gate Valve",
    image: "/blue-industrial-bellow-seal-gate-valve.jpg",
    description:
      "Bellow Seal Gate Valve is designed to provide leak-proof sealing and is suitable for high-temperature applications.",
  },
  {
    name: "Bronze Gate Valve",
    image: "/bronze-gate-valve-industrial.jpg",
    description:
      "Bronze Gate Valve offers excellent corrosion resistance and is ideal for marine and industrial applications.",
  },
  {
    name: "Cast Iron Gate Valve",
    image: "/blue-cast-iron-gate-valve.jpg",
    description:
      "Cast Iron Gate Valve provides reliable shut-off service for water, oil, gas, and other non-corrosive fluids.",
  },
  {
    name: "Cast Steel Gate Valve",
    image: "/steel-gate-valve-industrial.jpg",
    description:
      "Cast Steel Gate Valve is suitable for high-pressure and high-temperature applications in various industries.",
  },
  {
    name: "Cryogenic Gate Valve",
    image: "/blue-cryogenic-gate-valve.jpg",
    description:
      "Cryogenic Gate Valve is designed for extremely low temperature applications and provides excellent sealing.",
  },
  {
    name: "OS Gate Valve",
    image: "/blue-os-gate-valve.jpg",
    description:
      "OS Gate Valve is suitable for outside screw and yoke design, providing easy maintenance and operation.",
  },
  {
    name: "Forged Steel Gate Valve",
    image: "/forged-steel-gate-valve-black.jpg",
    description:
      "Forged Steel Gate Valve is designed for use in high-pressure applications and offers superior strength.",
  },
  {
    name: "Manual Knife Gate Valve",
    image: "/manual-knife-gate-valve.jpg",
    description: "Manual Knife Gate Valve is ideal for applications with thick fluids, slurries, and powders.",
  },
  {
    name: "Parallel Slide Gate Valve",
    image: "/parallel-slide-gate-valve.jpg",
    description: "Parallel Slide Gate Valve is suitable for bi-directional flow control and provides tight shut-off.",
  },
  {
    name: "Pneumatic Knife Gate Valve",
    image: "/pneumatic-knife-gate-valve.jpg",
    description:
      "Pneumatic Knife Gate Valve offers automated operation and is suitable for remote control applications.",
  },
  {
    name: "Rising Stem Gate Valve",
    image: "/blue-rising-stem-gate-valve.jpg",
    description:
      "Rising Stem Gate Valve provides visual indication of valve position and is suitable for various applications.",
  },
  {
    name: "Through Conduit Gate Valve",
    image: "/through-conduit-gate-valve.jpg",
    description: "Through Conduit Gate Valve allows full bore flow and is suitable for pipeline applications.",
  },
  {
    name: "Angle Globe Valve",
    image: "/blue-angle-globe-valve.jpg",
    description:
      "Angle Globe Valve provides excellent throttling control and is suitable for steam and liquid applications.",
  },
  {
    name: "Bellow Seal Globe Valve",
    image: "/blue-bellow-seal-globe-valve.jpg",
    description: "Bellow Seal Globe Valve offers leak-proof sealing and is ideal for hazardous fluid applications.",
  },
  {
    name: "Bronze Angle Globe Valve",
    image: "/bronze-angle-globe-valve.jpg",
    description: "Bronze Angle Globe Valve provides excellent corrosion resistance and precise flow control.",
  },
  {
    name: "Cast Steel Globe Valve",
    image: "/cast-steel-globe-valve.jpg",
    description: "Cast Steel Globe Valve is designed for high-pressure and high-temperature service applications.",
  },
  {
    name: "Cryogenic Globe Valve",
    image: "/cryogenic-globe-valve.jpg",
    description: "Cryogenic Globe Valve is specially designed for extremely low temperature applications.",
  },
  {
    name: "OS Globe Valve",
    image: "/os-globe-valve.jpg",
    description: "OS Globe Valve features outside screw and yoke design for easy maintenance and operation.",
  },
  {
    name: "Ductile Iron Globe Valve",
    image: "/ductile-iron-globe-valve.jpg",
    description: "Ductile Iron Globe Valve offers superior strength and is suitable for water and steam applications.",
  },
  {
    name: "Pneumatic Angle Gate Valve",
    image: "/pneumatic-angle-gate-valve.jpg",
    description: "Pneumatic Angle Gate Valve provides automated operation and precise flow control.",
  },
  {
    name: "Y Pattern Globe Valve",
    image: "/y-pattern-globe-valve.jpg",
    description: "Y Pattern Globe Valve offers reduced pressure drop and is suitable for high-flow applications.",
  },
  {
    name: "Butterfly Check Valve",
    image: "/butterfly-check-valve.jpg",
    description: "Butterfly Check Valve prevents backflow and is suitable for large diameter pipeline applications.",
  },
  {
    name: "Wafer Check Valve",
    image: "/wafer-check-valve.jpg",
    description: "Wafer Check Valve provides compact design and is ideal for space-constrained installations.",
  },
  {
    name: "Tilting Disc Swing Check Valve",
    image: "/tilting-disc-swing-check-valve.jpg",
    description: "Tilting Disc Swing Check Valve offers low pressure drop and quick closure to prevent backflow.",
  },
  {
    name: "Dual Plate Wafer Check Valve",
    image: "/dual-plate-wafer-check-valve.jpg",
    description: "Dual Plate Wafer Check Valve provides compact design and reliable backflow prevention.",
  },
  {
    name: "Forged Steel Check Valve",
    image: "/forged-steel-check-valve.jpg",
    description: "Forged Steel Check Valve is designed for high-pressure applications and offers superior strength.",
  },
  {
    name: "Lift Check Valve",
    image: "/lift-check-valve.jpg",
    description: "Lift Check Valve provides reliable backflow prevention and is suitable for horizontal installations.",
  },
]

const pipes = [
  {
    name: "Stainless Steel Pipes",
    image: "/stainless-steel-pipes.jpg",
    description:
      "High-grade stainless steel pipes suitable for chemical and pharmaceutical industries with excellent corrosion resistance.",
  },
  {
    name: "Carbon Steel Pipes",
    image: "/carbon-steel-pipes.jpg",
    description: "Durable carbon steel pipes designed for high-pressure applications in oil and gas industries.",
  },
  {
    name: "Alloy Steel Pipes",
    image: "/alloy-steel-pipes.jpg",
    description: "Premium alloy steel pipes engineered for extreme temperature and pressure conditions.",
  },
  {
    name: "Seamless Pipes",
    image: "/seamless-pipes.jpg",
    description:
      "Precision seamless pipes manufactured for critical applications requiring superior strength and reliability.",
  },
  {
    name: "Welded Pipes",
    image: "/welded-pipes.jpg",
    description:
      "Cost-effective welded pipes suitable for general industrial applications and infrastructure projects.",
  },
  {
    name: "Duplex Steel Pipes",
    image: "/duplex-steel-pipes.jpg",
    description: "Advanced duplex steel pipes offering superior corrosion resistance and mechanical properties.",
  },
]

const motors = [
  {
    name: "Electric Actuator Motors",
    image: "/electric-actuator-motors.jpg",
    description: "High-performance electric actuator motors for precise valve control and automation systems.",
  },
  {
    name: "Pneumatic Motors",
    image: "/pneumatic-motors.jpg",
    description: "Reliable pneumatic motors designed for industrial automation and valve operation applications.",
  },
  {
    name: "Hydraulic Motors",
    image: "/hydraulic-motors.jpg",
    description: "Heavy-duty hydraulic motors suitable for high-torque applications and extreme operating conditions.",
  },
  {
    name: "Servo Motors",
    image: "/servo-motors.jpg",
    description: "Precision servo motors offering accurate positioning and speed control for automated valve systems.",
  },
  {
    name: "Stepper Motors",
    image: "/stepper-motors.jpg",
    description: "High-precision stepper motors ideal for accurate positioning in valve control applications.",
  },
  {
    name: "Gear Motors",
    image: "/gear-motors.jpg",
    description: "Robust gear motors providing high torque output for heavy-duty valve operation requirements.",
  },
]

const allProducts = [...valves, ...pipes, ...motors]

const categories = [
  { id: "all", name: "ALL", products: allProducts },
  { id: "valves", name: "Types Of Valve", products: valves },
  { id: "pipes", name: "Types Of Pipes", products: pipes },
  { id: "motors", name: "Types Of Motors", products: motors },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("valves")
  const searchParams = useSearchParams()

  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam && categories.some((cat) => cat.id === categoryParam)) {
      setSelectedCategory(categoryParam)
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [searchParams])

  const currentCategory = categories.find((cat) => cat.id === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">Products</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{currentCategory?.name}</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are engaged in the production of all types of industrial products. We are the leading manufacturer of
            valves, pipes, and motors. We manufacture high-quality products and we have a wide range of industrial
            solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all relative ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
              }`}
            >
              <span className="flex items-center gap-2">
                {category.name}
                <span
                  className={`px-2 py-1 text-xs rounded-full font-semibold ${
                    selectedCategory === category.id ? "bg-blue-800 text-white" : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {category.products.length}
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategory?.products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-50 p-6 flex items-center justify-center h-48">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
                <Link
                  href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                >
                  View Info
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
