'use client';

import React from 'react';

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to My AWS-Powered Application!
        </h1>
        <p className="text-lg max-w-3xl mb-8">
          I have built this amazing platform using the power of AWS services, including AWS Amplify, Lambda Functions, AppSync with GraphQL, DynamoDB, S3, and much more. This project is a showcase of what modern cloud architecture can do for web applications.
        </p>
        <a href="#services" className="bg-white text-indigo-800 px-6 py-3 rounded-lg shadow-lg text-xl hover:bg-gray-200 transition">
          Explore My AWS Journey
        </a>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-8">About This Project</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            This project is powered by AWS, utilizing a suite of services that are integrated seamlessly to provide an interactive and reliable platform. 
            I used AWS Amplify for hosting and backend management, AWS Lambda for serverless functions, AppSync for GraphQL APIs, 
            DynamoDB for data storage, and S3 for file storage. All of this is put together with a modern React-based frontend.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-indigo-800 mb-8">What I’ve Built with AWS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-800 text-white p-8 rounded-xl shadow-lg hover:scale-105 transition transform">
              <h3 className="text-2xl font-bold mb-4">AWS Amplify</h3>
              <p>
                AWS Amplify powers the backend, frontend, and authentication for this project, offering a seamless full-stack cloud experience.
              </p>
            </div>
            <div className="bg-purple-600 text-white p-8 rounded-xl shadow-lg hover:scale-105 transition transform">
              <h3 className="text-2xl font-bold mb-4">AWS Lambda Functions</h3>
              <p>
                Lambda functions handle the serverless logic, making the application more scalable and cost-efficient without maintaining servers.
              </p>
            </div>
            <div className="bg-indigo-700 text-white p-8 rounded-xl shadow-lg hover:scale-105 transition transform">
              <h3 className="text-2xl font-bold mb-4">AppSync & GraphQL</h3>
              <p>
                AppSync with GraphQL enables fast and efficient querying of data, allowing for complex real-time interactions with the backend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white text-indigo-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Real-Time Data</h3>
              <p>
                Experience real-time data synchronization using AWS AppSync, enabling an interactive user experience.
              </p>
            </div>
            <div className="bg-white text-indigo-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Serverless Architecture</h3>
              <p>
                No servers to manage! AWS Lambda allows for seamless scalability without the overhead of server management.
              </p>
            </div>
            <div className="bg-white text-indigo-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Secure Storage</h3>
              <p>
                Your files are stored securely in AWS S3, with easy access and seamless integration into the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-indigo-800 mb-8">Contact Me</h2>
          <p className="text-lg mb-6">
            If you want to learn more about this project or have any questions, feel free to reach out to me.
          </p>
          <a href="mailto:your.email@example.com" className="bg-indigo-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-indigo-800 text-white text-center">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
