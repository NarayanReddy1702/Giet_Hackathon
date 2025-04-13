import React from 'react'

const About = () => {
  const features = [
    {
      title: "Interactive Learning",
      description: "Engage with our interactive quiz platform designed to test and enhance your software knowledge.",
      icon: "🎯"
    },
    {
      title: "Real-time Feedback",
      description: "Get immediate feedback on your answers and track your progress as you go.",
      icon: "⚡"
    },
    {
      title: "Comprehensive Coverage",
      description: "Questions covering various aspects of software development, from basics to advanced concepts.",
      icon: "📚"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your performance with detailed analytics and progress indicators.",
      icon: "📊"
    }
  ]

  return (
    <div className="min-h-screen w-full bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">
            About Our <span className="text-blue-500">Quiz Platform</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A modern platform designed to test and enhance your software development knowledge through interactive quizzes and real-time feedback.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We're dedicated to making software education accessible and engaging. Our platform combines 
              interactive learning with comprehensive assessment tools to help you master software development 
              concepts at your own pace.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Take the Quiz</h3>
            <p className="text-gray-400">Start with our carefully curated questions about software development.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-400">Monitor your performance with real-time feedback and analytics.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Improve Skills</h3>
            <p className="text-gray-400">Learn from your mistakes and enhance your knowledge.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
