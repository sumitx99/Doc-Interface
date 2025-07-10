import React from 'react';
import { 
  Activity, 
  Calendar, 
  Users, 
  Pill, 
  Shield, 
  Clock, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Star,
  Heart,
  Stethoscope
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const features = [
    {
      icon: Users,
      title: 'Patient Management',
      description: 'Comprehensive patient profiles with medical history, allergies, and contact information.',
      color: 'bg-blue-500'
    },
    {
      icon: Calendar,
      title: 'Appointment Scheduling',
      description: 'Efficient appointment booking with calendar integration and status tracking.',
      color: 'bg-green-500'
    },
    {
      icon: Pill,
      title: 'Medicine Tracking',
      description: 'Complete medicine inventory with expiry alerts and stock management.',
      color: 'bg-purple-500'
    },
    {
      icon: Activity,
      title: 'Prescription Management',
      description: 'Digital prescriptions with dosage tracking and treatment monitoring.',
      color: 'bg-red-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time insights and reports to optimize your healthcare practice.',
      color: 'bg-indigo-500'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'HIPAA-compliant security with encrypted data storage and backup.',
      color: 'bg-teal-500'
    }
  ];

  const benefits = [
    'Reduce administrative workload by 60%',
    'Improve patient satisfaction scores',
    'Eliminate scheduling conflicts',
    'Track medicine inventory automatically',
    'Generate comprehensive reports',
    'Ensure regulatory compliance'
  ];

  const testimonials = [
    {
      name: 'Dr. Sumit Kumar Ranjan',
      role: 'Family Medicine',
      content: 'This system has transformed how we manage our practice. Patient scheduling is now seamless.',
      rating: 5
    },
    {
      name: 'Dr. Sumit Kumar Ranjan',
      role: 'Internal Medicine',
      content: 'The prescription tracking feature has significantly reduced medication errors in our clinic.',
      rating: 5
    },
    {
      name: 'Dr. Sumit Kumar Ranjan',
      role: 'Pediatrics',
      content: 'User-friendly interface that our entire staff adopted within days. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="bg-blue-600 rounded-lg p-2 mr-3">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">HealthCare Pro</h1>
            </div>
            <button
              onClick={onGetStarted}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Stethoscope className="h-4 w-4 mr-2" />
                Healthcare Management Solution
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Streamline Your
                <span className="text-blue-600 block">Healthcare Practice</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive patient management, appointment scheduling, and medicine tracking 
                in one powerful platform. Designed for modern healthcare professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onGetStarted}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors font-semibold text-lg">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Today's Overview</h3>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    All Systems Active
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <Users className="h-8 w-8 text-blue-600" />
                      <span className="text-2xl font-bold text-blue-600">247</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Total Patients</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <Calendar className="h-8 w-8 text-green-600" />
                      <span className="text-2xl font-bold text-green-600">18</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Today's Appointments</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <Pill className="h-8 w-8 text-purple-600" />
                      <span className="text-2xl font-bold text-purple-600">156</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Medicines</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <Activity className="h-8 w-8 text-red-600" />
                      <span className="text-2xl font-bold text-red-600">89</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Active Prescriptions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Your Practice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools healthcare professionals need 
              to deliver exceptional patient care efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
                >
                  <div className={`${feature.color} rounded-lg p-3 w-fit mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Transform Your Healthcare Practice Today
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of healthcare professionals who have revolutionized 
                their practice management with our platform.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <div className="text-center">
                <Heart className="h-16 w-16 text-red-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Trusted by Healthcare Professionals
                </h3>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">10K+</div>
                    <div className="text-blue-200">Doctors</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">500K+</div>
                    <div className="text-blue-200">Patients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">99.9%</div>
                    <div className="text-blue-200">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Healthcare Professionals Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from doctors who use our platform daily
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Revolutionize Your Practice?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your free trial today and experience the difference our platform can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetStarted}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center justify-center group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
          <p className="text-gray-500 mt-4">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 rounded-lg p-2 mr-3">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">HealthCare Pro</h3>
              </div>
              <p className="text-gray-400">
                Empowering healthcare professionals with modern practice management solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Security</li>
                <li>Integrations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Training</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 HealthCare Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;