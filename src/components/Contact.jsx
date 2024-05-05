import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
    // Scroll to the top of the page when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [state, handleSubmit] = useForm("xkndkznv");

    const handleFormSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        try {
            await handleSubmit(event); // Submit the form
            if (state.succeeded) {
                alert('Thank you for your message!'); // Display thank you message
            }
        } catch (error) {
            console.error('Form submission error:', error);
        }
    };

    // State to handle form inputs
    const [user, setUser] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        location: '',
        message: '',
    });

    // Handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-1/2">
                    <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
                    <form action='https://formspree.io/f/xkndkznv' method='POST' onSubmit={handleFormSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
                                Phone Number:
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={user.phoneNumber}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <ValidationError
                                prefix="Phone Number"
                                field="phoneNumber"
                                errors={state.errors}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
                                Location:
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={user.location}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <ValidationError
                                prefix="Location"
                                field="location"
                                errors={state.errors}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                                Message:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={user.message}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded"
                                rows="5"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3 rounded font-bold hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
