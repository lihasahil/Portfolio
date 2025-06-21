import React, { useState, useRef, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPaperPlane } from "react-icons/fa";
import ThemeContext from "../context/ThemeContext";
import emailjs from "@emailjs/browser"; // ✅ Import EmailJS

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const formRef = useRef(); // ✅ Ref for the form element

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-blue-100 to-purple-200 text-gray-900"
      } p-6`}
    >
      <ToastContainer autoClose={3000} theme={isDark ? "dark" : "light"} />
      <div
        className={`p-8 rounded-2xl shadow-2xl max-w-lg w-full transition-all duration-300 ${
          isDark ? "bg-gray-900 border border-gray-700" : "bg-white"
        }`}
      >
        <h1
          className={`text-3xl font-bold mb-2 text-center ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Contact Us
        </h1>
        <p
          className={`text-center mb-6 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          We would love to hear from you!
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              className={`block text-sm font-medium mb-1 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Name
            </label>
            <input
              type="text"
              name="user_name" // ✅ Name attribute for EmailJS
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                isDark
                  ? "bg-gray-800 text-white border-gray-600 focus:ring-blue-500 placeholder-gray-400"
                  : "bg-white text-gray-900 border-gray-300 focus:ring-blue-400 placeholder-gray-500"
              }`}
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-1 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              name="user_email" // ✅ Name attribute for EmailJS
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                isDark
                  ? "bg-gray-800 text-white border-gray-600 focus:ring-blue-500 placeholder-gray-400"
                  : "bg-white text-gray-900 border-gray-300 focus:ring-blue-400 placeholder-gray-500"
              }`}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-1 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Message
            </label>
            <textarea
              name="message" // ✅ Name attribute for EmailJS
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                isDark
                  ? "bg-gray-800 text-white border-gray-600 focus:ring-blue-500 placeholder-gray-400"
                  : "bg-white text-gray-900 border-gray-300 focus:ring-blue-400 placeholder-gray-500"
              }`}
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50"
          >
            <FaPaperPlane />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
