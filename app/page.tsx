import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Heart, PawPrint, Users, Phone, Mail, MapPin, Star, CheckCircle } from "lucide-react"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Clarity Coverage Group" width={120} height={60} className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-blue-200 transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-blue-200 transition-colors">
              Contact
            </a>
          </nav>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
          >
            <a href="#contact">Get Quote</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Protect What Matters Most</h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto">
            Comprehensive insurance solutions tailored to your needs. From property protection to health coverage, we've
            got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
            
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            
            >
              <a href="#contact">Get Started Today</a>
            </Button>
            <Button

              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
            >
              <a href="#services">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Insurance Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage options designed to protect you, your family, and your assets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-slate-900">Property & Casualty</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Protect your home, auto, and personal property with comprehensive coverage options tailored to your
                  lifestyle.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-slate-900">Life & Health</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Secure your family's future with life insurance and maintain your health with comprehensive medical
                  coverage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4">
                  <PawPrint className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-slate-900">Pet Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Keep your furry family members healthy and happy with comprehensive pet insurance coverage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-slate-900">Medicare/Medicaid</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Navigate Medicare and Medicaid options with expert guidance to find the best coverage for your needs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 text-center">Why Choose Clarity Coverage?</h2>
              <p className="text-lg text-gray-600 mb-8 text-center">
                With decades of combined experience, we provide personalized insurance solutions that give you peace of
                mind and financial security.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Expert Guidance</h3>
                    <p className="text-gray-600">
                      Licensed professionals help you navigate complex insurance decisions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Competitive Rates</h3>
                    <p className="text-gray-600">
                      We work with top carriers to find you the best coverage at the best price
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock customer service when you need it most</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Claims Assistance</h3>
                    <p className="text-gray-600">We're here to help you through every step of the claims process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Clarity Coverage made finding the right insurance so easy. Their team was knowledgeable and helped me
                  save money while getting better coverage."
                </p>
                <div className="font-semibold text-slate-900">Sarah Johnson</div>
                <div className="text-sm text-gray-500">Homeowner</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "When I needed to file a claim, they were there every step of the way. Excellent customer service and
                  support throughout the process."
                </p>
                <div className="font-semibold text-slate-900">Michael Chen</div>
                <div className="text-sm text-gray-500">Auto Insurance Client</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Their Medicare guidance was invaluable. They helped me understand my options and choose the best plan
                  for my needs and budget."
                </p>
                <div className="font-semibold text-slate-900">Dorothy Williams</div>
                <div className="text-sm text-gray-500">Medicare Client</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Have questions? We're here to help.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-200">Ready to protect what matters most? Contact us today.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-slate-200">(215) 300-8700</p>
              <p className="text-sm text-slate-300">Mon-Fri 9AM-5PM</p>
            </div>

            <div>
              <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-slate-200">bradyinsuranceservice@gmail.com</p>
              <p className="text-sm text-slate-300">We'll respond within 24 hours</p>
            </div>

            <div>
              <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Located</h3>
              <p className="text-slate-200">Philadelphia PA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/logo.png"
                alt="Clarity Coverage Group"
                width={120}
                height={60}
                className="h-12 w-auto mb-4"
              />
              <p className="text-slate-300">Protecting what matters most with comprehensive insurance solutions.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Property & Casualty</li>
                <li>Life & Health</li>
                <li>Pet Insurance</li>
                <li>Medicare/Medicaid</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#services">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Claims Center</li>
                <li>Policy Management</li>
                <li>FAQ</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
            <p>&copy; 2025 Clarity Coverage Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
