"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
            <span className="text-gray-900">Contact us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-1 h-12 bg-white"></div>
            <span className="text-lg">Connect with us...</span>
          </div>
          <h1 className="text-4xl font-bold">Reach us through contact details provided.!</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info & Map */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Connect with Us to Find the Valve You are Looking For...
            </h2>

            {/* Contact Details */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Navi Mumbai</h3>
              <div className="space-y-2 text-gray-600">
                <p>MIDC, TTC Industrial Area,</p>
                <p>Plot No. A-424, Mahape,</p>
                <p>Navi, Mumbai. MH. India</p>
                <p className="mt-4">
                  <strong>Tel:</strong> +91 86527 40424
                </p>
              </div>
            </div>

            {/* Email Section */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">E-MAIL US</h4>
                </div>
              </div>
              <div className="space-y-1 text-gray-600">
                <p>sales@pharmachindia.com</p>
                <p>marketing@pharmachindia.com</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <Image
                src="/navi-mumbai-location-map.jpg"
                alt="Location Map"
                width={400}
                height={250}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Kindly submit appropriate information.</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none bg-transparent text-gray-800 placeholder-gray-500"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none bg-transparent text-gray-800 placeholder-gray-500"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile no"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none bg-transparent text-gray-800 placeholder-gray-500"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none bg-transparent text-gray-800 placeholder-gray-500 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gray-800 text-white px-8 py-3 rounded hover:bg-gray-900 transition-colors font-medium"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Additional Contact Information */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Phone</h4>
              <p className="text-gray-600">+91 86527 40424</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Email</h4>
              <p className="text-gray-600">sales@pharmachindia.com</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Business Hours</h4>
              <p className="text-gray-600">Mon - Fri: 10:00 AM - 18:00 PM IST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
