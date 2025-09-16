import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const products = [
  {
    name: "Bellow Seal Gate Valve",
    slug: "bellow-seal-gate-valve",
    image: "/blue-industrial-bellow-seal-gate-valve.jpg",
    description:
      "Bellow Seal Gate Valve is designed to provide leak-proof sealing and is suitable for high-temperature applications.",
    category: "Gate Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "150 LB to 2500 LB",
      "Size Range": '1/2" to 24"',
      "Temperature Range": "-29°C to 538°C",
      "End Connections": "Flanged, Threaded, Socket Weld, Butt Weld",
      Materials: "Carbon Steel, Stainless Steel, Alloy Steel",
      Standards: "API 600, ASME B16.34, BS 1414",
    },
    features: [
      "Zero leakage through stem",
      "Suitable for high temperature applications",
      "Maintenance-free operation",
      "Excellent sealing performance",
      "Corrosion resistant materials",
    ],
    applications: ["Power Generation", "Petrochemical Industry", "Oil & Gas", "Chemical Processing", "Steam Service"],
  },
  {
    name: "Bronze Gate Valve",
    slug: "bronze-gate-valve",
    image: "/bronze-gate-valve-industrial.jpg",
    description:
      "Bronze Gate Valve offers excellent corrosion resistance and is ideal for marine and industrial applications.",
    category: "Gate Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "125 LB to 300 LB",
      "Size Range": '1/2" to 8"',
      "Temperature Range": "-18°C to 232°C",
      "End Connections": "Threaded, Flanged",
      Materials: "Bronze, Brass",
      Standards: "ASME B16.34, MSS SP-80",
    },
    features: [
      "Excellent corrosion resistance",
      "Suitable for seawater applications",
      "Non-magnetic properties",
      "Easy maintenance",
      "Long service life",
    ],
    applications: ["Marine Industry", "Water Treatment", "HVAC Systems", "Plumbing", "Fire Protection"],
  },
  {
    name: "Cast Iron Gate Valve",
    slug: "cast-iron-gate-valve",
    image: "/blue-cast-iron-gate-valve.jpg",
    description:
      "Cast Iron Gate Valve provides reliable shut-off service for water, oil, gas, and other non-corrosive fluids.",
    category: "Gate Valves",
    type: "valve",
    specifications: {
      "Pressure Rating": "125 LB to 250 LB",
      "Size Range": '2" to 48"',
      "Temperature Range": "-29°C to 200°C",
      "End Connections": "Flanged",
      Materials: "Cast Iron, Ductile Iron",
      Standards: "AWWA C515, BS 5163",
    },
    features: [
      "Cost-effective solution",
      "Suitable for water applications",
      "Robust construction",
      "Easy operation",
      "Low maintenance",
    ],
    applications: ["Water Distribution", "Sewage Treatment", "Municipal Systems", "Industrial Water", "Fire Fighting"],
  },
  // Pipes
  {
    name: "Stainless Steel Pipes",
    slug: "stainless-steel-pipes",
    image: "/stainless-steel-pipes.jpg",
    description:
      "High-grade stainless steel pipes suitable for chemical and pharmaceutical industries with excellent corrosion resistance.",
    category: "Stainless Steel",
    type: "pipe",
    specifications: {
      Grade: "304, 316, 321, 347",
      "Size Range": '1/8" to 48"',
      "Wall Thickness": "SCH 5S to SCH XXS",
      Length: "Single Random, Double Random, Cut Length",
      "End Finish": "Plain End, Beveled End",
      Standards: "ASTM A312, ASME B36.19M",
    },
    features: [
      "Excellent corrosion resistance",
      "High temperature resistance",
      "Hygienic and clean",
      "Low maintenance",
      "Recyclable material",
    ],
    applications: ["Chemical Processing", "Pharmaceutical", "Food & Beverage", "Oil & Gas", "Power Generation"],
  },
  {
    name: "Carbon Steel Pipes",
    slug: "carbon-steel-pipes",
    image: "/carbon-steel-pipes.jpg",
    description: "Durable carbon steel pipes designed for high-pressure applications in oil and gas industries.",
    category: "Carbon Steel",
    type: "pipe",
    specifications: {
      Grade: "A106 Gr.B, API 5L Gr.B, A53 Gr.B",
      "Size Range": '1/8" to 48"',
      "Wall Thickness": "SCH 40 to SCH XXS",
      Length: "Single Random, Double Random",
      "End Finish": "Plain End, Beveled End",
      Standards: "ASTM A106, API 5L, ASME B36.10M",
    },
    features: [
      "High strength and durability",
      "Cost-effective solution",
      "Wide temperature range",
      "Easy welding and fabrication",
      "Reliable performance",
    ],
    applications: ["Oil & Gas", "Power Plants", "Refineries", "Petrochemical", "Industrial Piping"],
  },
  {
    name: "Alloy Steel Pipes",
    slug: "alloy-steel-pipes",
    image: "/alloy-steel-pipes.jpg",
    description: "Premium alloy steel pipes engineered for extreme temperature and pressure conditions.",
    category: "Alloy Steel",
    type: "pipe",
    specifications: {
      Grade: "P5, P9, P11, P22, P91",
      "Size Range": '1/2" to 24"',
      "Wall Thickness": "SCH 40 to SCH XXS",
      Length: "Single Random, Double Random",
      "End Finish": "Plain End, Beveled End",
      Standards: "ASTM A335, ASME B36.10M",
    },
    features: [
      "High temperature resistance",
      "Superior mechanical properties",
      "Excellent creep resistance",
      "Enhanced durability",
      "Precision manufacturing",
    ],
    applications: [
      "Power Generation",
      "Petrochemical",
      "High Temperature Service",
      "Boiler Applications",
      "Heat Exchangers",
    ],
  },
  // Motors
  {
    name: "Electric Actuator Motors",
    slug: "electric-actuator-motors",
    image: "/electric-actuator-motors.jpg",
    description: "High-performance electric actuator motors for precise valve control and automation systems.",
    category: "Electric Motors",
    type: "motor",
    specifications: {
      "Power Range": "0.5 HP to 50 HP",
      Voltage: "110V, 220V, 380V, 440V",
      "Torque Range": "50 Nm to 5000 Nm",
      Speed: "Variable Speed Control",
      Protection: "IP65, IP67",
      Standards: "IEC 60034, NEMA MG-1",
    },
    features: [
      "Precise positioning control",
      "Variable speed operation",
      "Remote control capability",
      "Low maintenance",
      "Energy efficient",
    ],
    applications: ["Valve Automation", "Process Control", "Water Treatment", "HVAC Systems", "Industrial Automation"],
  },
  {
    name: "Pneumatic Motors",
    slug: "pneumatic-motors",
    image: "/pneumatic-motors.jpg",
    description: "Reliable pneumatic motors designed for industrial automation and valve operation applications.",
    category: "Pneumatic Motors",
    type: "motor",
    specifications: {
      "Air Pressure": "2 to 10 bar",
      "Torque Range": "100 Nm to 8000 Nm",
      "Operating Temperature": "-20°C to +80°C",
      "Air Consumption": "Optimized for efficiency",
      Protection: "IP65, IP67",
      Standards: "ISO 5211, VDI/VDE 3845",
    },
    features: [
      "Explosion-proof operation",
      "Fast response time",
      "High reliability",
      "Fail-safe operation",
      "Maintenance-free",
    ],
    applications: ["Hazardous Areas", "Emergency Shutdown", "Process Automation", "Oil & Gas", "Chemical Plants"],
  },
  {
    name: "Hydraulic Motors",
    slug: "hydraulic-motors",
    image: "/hydraulic-motors.jpg",
    description: "Heavy-duty hydraulic motors suitable for high-torque applications and extreme operating conditions.",
    category: "Hydraulic Motors",
    type: "motor",
    specifications: {
      "Pressure Range": "50 to 350 bar",
      "Torque Range": "500 Nm to 50000 Nm",
      "Flow Rate": "10 to 1000 L/min",
      "Operating Temperature": "-40°C to +120°C",
      Fluid: "Hydraulic Oil ISO VG 32-68",
      Standards: "ISO 4401, SAE J518",
    },
    features: ["High torque output", "Compact design", "Smooth operation", "Long service life", "Precise control"],
    applications: ["Heavy Industry", "Marine Applications", "Mining Equipment", "Steel Mills", "Large Valve Operation"],
  },
]

interface PageProps {
  params: {
    slug: string
  }
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  const getProductTypeTitle = (type: string) => {
    switch (type) {
      case "valve":
        return "Valve Manufacturers"
      case "pipe":
        return "Pipe Manufacturers"
      case "motor":
        return "Motor Manufacturers"
      default:
        return "Manufacturers"
    }
  }

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
            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {product.name} {getProductTypeTitle(product.type)}
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Leading manufacturer and supplier of high-quality {product.name.toLowerCase()} designed for industrial
            applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="bg-blue-50 rounded-lg p-8 flex items-center justify-center h-96">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Overview</h2>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Applications</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="border-b border-gray-200 pb-3">
                <dt className="font-semibold text-gray-800">{key}</dt>
                <dd className="text-gray-600 mt-1">{value}</dd>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
          <p className="mb-6">Contact our technical team for detailed specifications and custom solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
