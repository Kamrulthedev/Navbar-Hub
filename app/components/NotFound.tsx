import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-xl text-gray-600 mt-4">Page not found</p>
            <a href="/" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg">
                Go Home
            </a>
        </div>
    );
};

export default NotFound;