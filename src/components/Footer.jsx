import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img src="./images/scoreLogo.png" alt="Logo" className="h-20 w-auto" />
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="space-y-2">
              <h3 className="font-bold text-blue-600 text-lg">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-blue-200 transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-blue-200 transition-colors">About</a></li>
                <li><a href="/score" className="hover:text-blue-200 transition-colors">Score</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-blue-600 text-lg">Contact</h3>
              <ul className="space-y-2">
                <li>Email: info@score.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Score Street</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t text-blue-600 border-blue-600">
          <p>&copy; 2025 create by Narayan Reddy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer