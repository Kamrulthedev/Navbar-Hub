const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <h1 className="text-4xl md:text-5xl font-bold">Welcome to Navbar Hub</h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl">
                    Explore a collection of beautifully designed and fully responsive navigation bars. 
                    Save time, enhance your projects, and get inspired!
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                    Explore Now
                </button>
            </section>

            {/* Features Section */}
            <section className="py-16 px-6 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800">Why Choose Navbar Hub?</h2>
                <div className="mt-10 grid md:grid-cols-3 gap-8 text-center">
                    
                    <div className="p-6 bg-white shadow-md rounded-lg">
                        <h3 className="text-2xl font-semibold text-blue-600">✨ Stunning Designs</h3>
                        <p className="mt-3 text-gray-600">A variety of modern and creative navbar styles to fit any website theme.</p>
                    </div>

                    <div className="p-6 bg-white shadow-md rounded-lg">
                        <h3 className="text-2xl font-semibold text-blue-600">⚡ Fully Responsive</h3>
                        <p className="mt-3 text-gray-600">All designs are mobile-friendly and work seamlessly across devices.</p>
                    </div>

                    <div className="p-6 bg-white shadow-md rounded-lg">
                        <h3 className="text-2xl font-semibold text-blue-600">🎨 Easy Customization</h3>
                        <p className="mt-3 text-gray-600">Modify colors, layouts, and effects to match your project’s needs.</p>
                    </div>

                    <div className="p-6 bg-white shadow-md rounded-lg">
                        <h3 className="text-2xl font-semibold text-blue-600">🛠️ Developer Friendly</h3>
                        <p className="mt-3 text-gray-600">Copy-paste ready components with well-structured and clean code.</p>
                    </div>

                    <div className="p-6 bg-white shadow-md rounded-lg">
                        <h3 className="text-2xl font-semibold text-blue-600">🚀 Time-Saving</h3>
                        <p className="mt-3 text-gray-600">Get professional navbars without starting from scratch.</p>
                    </div>

                    <div className="p-6 bg-white shadow-md rounded-lg">
                        <h3 className="text-2xl font-semibold text-blue-600">🔄 Regular Updates</h3>
                        <p className="mt-3 text-gray-600">New navbar designs added frequently to keep up with trends.</p>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-20 bg-blue-600 text-white">
                <h2 className="text-3xl md:text-4xl font-bold">Get Started with Navbar Hub Today!</h2>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Browse our collection, find your perfect navbar, and make your website stand out effortlessly.
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                    Start Exploring
                </button>
            </section>
        </div>
    );
};

export default About;
