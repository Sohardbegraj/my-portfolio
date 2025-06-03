import React, { useState } from 'react';
const VITE_WEB3FORMS_API_KEY = import.meta.env.VITE_WEB3FORMS_API_KEY;
export default function Contact({ setShowContact }) {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleClose = () => {
    setShowContact(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');
    const form = event.target;
    const formData = new FormData(form);

    const object = Object.fromEntries(formData);
    object.access_key = VITE_WEB3FORMS_API_KEY; // Replace with your Web3Forms API key
    object.name = object.name || "Anonymous";
    object.email = object.email || "unknown@example.com";
    object.message = object.message || "No message";
    object.subject = "New Contact Form Submission";
    object.from_name = object.name || "Contact Form";

    const json = JSON.stringify(object);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
      if (res.success) {
        setSuccessMsg("Message sent successfully!");
        form.reset();
      } else {
        setErrorMsg("Error sending message: " + res.message);
      }
    } catch (error) {
      setErrorMsg("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen backdrop-blur-md w-screen text-white px-4 py-10 font-mono absolute top-0 left-0 z-10">
        <h1 className="text-4xl font-bold border-b-4 border-gray-950 md:text-gray-950 text-white inline-block mb-10">Contact</h1>

        <div className="lg:flex justify-center items-start text-start lg:space-x-8 space-y-6 lg:space-y-0 ">
          {/* Contact Info */}
          <div className="space-y-6 bg-zinc-900 p-6 rounded-md shadow-lg w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px]">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div>
                  <p className="font-bold underline">Location</p>
                  <p>Shimla, Himachal Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div>
                  <p className="font-bold underline">Email</p>
                  <p>Sohard16begraj@gmail.com</p>
                </div>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.977150597911!2d76.52310407542442!3d31.705382374116616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b5f6c2ff27df9%3A0xc2bdecccf7691a4d!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1653428313615!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NIT Hamirpur Location"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 bg-zinc-900 p-6 rounded-md shadow-lg w-[400px] relative" onSubmit={onSubmit}>
            <div>
              <label className="block mb-1">Name:</label>
              <input type="text" className="w-full p-2 rounded bg-zinc-800 text-white" name='name' required />
            </div>
            <div>
              <label className="block mb-1">Email:</label>
              <input type="email" className="w-full p-2 rounded bg-zinc-800 text-white" name='email' required />
            </div>
            <div>
              <label className="block mb-1">Message:</label>
              <textarea className="w-full p-2 rounded bg-zinc-800 text-white h-32" name='message' required />
            </div>
            <button
              type="submit"
              className='bg-blue-500 text-white md:px-4 md:py-2 p-2 rounded-lg hover:bg-blue-700 transition duration-300'
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
            {successMsg && <p className="text-green-400 mt-2">{successMsg}</p>}
            {errorMsg && <p className="text-red-400 mt-2">{errorMsg}</p>}
          </form>
          <button
            className='bg-rose-500 text-white md:px-4 md:py-2 p-2 rounded-lg hover:bg-rose-700 transition duration-300 lg:absolute top-4 right-4 z-20'
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
