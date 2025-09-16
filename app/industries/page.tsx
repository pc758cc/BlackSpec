import Image from "next/image"
import Link from "next/link"

const industries = [
  {
    name: "Oil & Gas",
    image: "/oil-gas-offshore-platform.jpg",
    description: "Providing high-quality valves for upstream, midstream, and downstream oil & gas operations.",
  },
  {
    name: "Power Generation",
    image: "/power-generation-plant.jpg",
    description: "Specialized valves for thermal, nuclear, and renewable energy power generation facilities.",
  },
  {
    name: "Chemical & Petrochemical",
    image: "/chemical-petrochemical-plant.jpg",
    description: "Corrosion-resistant valves designed for harsh chemical processing environments.",
  },
  {
    name: "Water Treatment",
    image: "/water-treatment-facility.jpg",
    description: "Reliable valve solutions for municipal and industrial water treatment applications.",
  },
  {
    name: "Marine & Offshore",
    image: "/marine-offshore-vessel.jpg",
    description: "Marine-grade valves built to withstand harsh offshore and marine environments.",
  },
  {
    name: "Mining",
    image: "/mining-operations.jpg",
    description: "Heavy-duty valves designed for mining operations and mineral processing.",
  },
  {
    name: "Pharmaceutical",
    image: "/pharmaceutical-manufacturing.jpg",
    description: "Sanitary and sterile valve solutions for pharmaceutical manufacturing processes.",
  },
  {
    name: "Food & Beverage",
    image: "/food-beverage-processing.jpg",
    description: "Food-grade valves meeting strict hygiene standards for food processing industries.",
  },
]

export default function IndustriesPage() {
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
            <span className="text-gray-900">Industries</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Providing specialized valve solutions across diverse industries with over 20 years of expertise
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Industry Expertise</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We have extensive experience serving various industries with our high-quality valve products. Our solutions
            are tailored to meet the specific requirements and challenges of each sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{industry.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{industry.description}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Industrial Solutions?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Industry-specific valve designs and materials</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Compliance with international standards and regulations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Extensive testing and quality assurance processes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Technical support and after-sales service</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 rounded-lg p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">3000+</div>
                <div className="text-gray-600 mb-4">Satisfied Clients Across Industries</div>
                <div className="text-2xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-600">Years of Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
