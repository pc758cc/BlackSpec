import Image from "next/image"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">KNOW ABOUT US</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Prominent Manufacturer & Supplier of a Wide Range of Valve Products
            </h2>
            <p className="text-gray-600 mb-6">
              Pharmach Engineering Private Limited is a prominent engineering company that manufactures of valve
              products.
            </p>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>The company was launched in 2002.</strong>
                <br />
                Based in Mumbai - India.
              </p>
              <p className="text-gray-700">
                <strong>By Mr. Gufran Ahmed Khan</strong>
              </p>
              <p className="text-gray-600">
                We always dream about serving Pharmach Engineering Private Limited and our valued clients.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/industrial-gate-valve-blue-machinery-close-up.jpg"
              alt="Industrial valve manufacturing"
              width={500}
              height={400}
              className="rounded-lg"
            />
            {/* Stats Overlay */}
            <div className="absolute top-4 right-4 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-600">YEARS EXPERIENCE</div>
              </div>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">PRODUCTS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3000+</div>
                <div className="text-sm text-gray-600">SATISFIED CLIENTS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Specialized Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Specialized in Manufacturing all Kinds of Valves</h2>
            <p className="text-gray-600 mb-4">
              As a leading manufacturer and supplier of valve products, we are committed to meeting the requirements of
              our clients. We have a team of experienced engineers and technicians who work closely with our clients to
              understand their specific requirements.
            </p>
            <p className="text-gray-600 mb-4">
              Because everyone has different requirements, we offer a wide range of valve products and solutions. We are
              committed to providing high-quality products and services to our clients.
            </p>
            <p className="text-gray-600">
              We work with the highest level of integrity towards our clients, manufacturers and suppliers. We are
              committed to providing the best possible service to our clients.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  Our vision is to become the leader in the production of industrial valves for different applications.
                  We aim to provide innovative solutions that meet the evolving needs of our clients, providing the best
                  technical accuracy. We put our focus on providing a way of life.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  Our mission is to provide innovative and superior products and services to our clients. We are
                  committed to providing the best technical solutions to our clients. Our mission is to continue
                  providing superior quality products and services to our clients and to maintain our position as a
                  leader in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CEO Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-lg mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Mr. Gufran Ahmed Khan</h2>
            <p className="text-blue-100">Managing Director (CEO)</p>
          </div>
          <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
            He is the heart with a vision. He made a significant contribution to the valve industry.
          </p>

          <div className="bg-white text-gray-800 p-8 rounded-lg max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-blue-600">10,000</div>
              <div className="text-lg text-gray-600">SQ. FT.</div>
              <div className="text-sm text-gray-500">Production House and Its Production Workshop</div>
            </div>
            <p className="text-gray-600 mb-6">
              Since the beginning, the company has a reputation for excellence for manufacturing valves for the past 20
              years. We provide services of the company of best class with many other companies.
            </p>
            <p className="text-gray-600 mb-6">
              We always had the objective to produce and sell the best quality products. We are committed to meeting the
              needs of the industry.
            </p>
            <div className="border-l-4 border-blue-600 pl-6">
              <p className="text-gray-700 italic mb-2">
                "I am very happy to make friends. I made many new friends by offering high-performance high-quality
                valve."
              </p>
              <p className="text-sm text-gray-500">- Mr. Gufran Ahmed Khan</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Certified Company</h3>
            <p className="text-gray-600 text-sm">
              We are ISO certified company and we are committed to providing the best quality products to our clients.
              We are committed to design and manufacture of valve products.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Vast Experience & Expertise</h3>
            <p className="text-gray-600 text-sm">
              With over 20 years of experience, we have been serving the industry with the best quality products. We
              have a team of experienced engineers and technicians.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Provide Quality Products</h3>
            <p className="text-gray-600 text-sm">
              We are high-quality industrial valves to customers for superior performance. We are committed to providing
              the best quality products to our clients.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">100% Tested Products</h3>
            <p className="text-gray-600 text-sm">
              All our products are tested and certified for superior quality. We ensure that only the best quality
              products are delivered to our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
