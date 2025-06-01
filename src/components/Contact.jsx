import React from 'react';

export default function Contact({setShowContact}) {
  const handleClose = () => {
    setShowContact(!setShowContact);
  };

    const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    const object = Object.fromEntries(formData);
    // ✅ Append required fields for Web3Forms
    object.access_key = "3b198aa1-8b8e-4b91-9bb9-3cbea688f41e"; // Replace with your Web3Forms access key
    object.subject = "New Contact Form Submission";

    // Optional (can help identify the sender)
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
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Error sending message: " + res.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }; 
  return (
    <>
    <div className="min-h-screen backdrop-blur-md w-screen text-white px-4 py-10 font-mono absolute top-0 left-0 z-10">
      <h1 className="text-4xl font-bold border-b-4 border-gray-950 text-gray-950 inline-block mb-10">Contact</h1>

      <div className="flex justify-center items-start text-start space-x-8">
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
        <form className="space-y-4 bg-zinc-900 p-6 rounded-md shadow-lg w-[400px]" onSubmit={onSubmit}>
          <div>
            <label className="block mb-1">Name:</label>
            <input type="text" className="w-full p-2 rounded bg-zinc-800 text-white" name='name' />
          </div>
          <div>
            <label className="block mb-1">Email:</label>
            <input type="email" className="w-full p-2 rounded bg-zinc-800 text-white" name='email'/>
          </div>
          <div>
            <label className="block mb-1">Message:</label>
            <textarea className="w-full p-2 rounded bg-zinc-800 text-white h-32" name='message'/>
          </div>
          <button type="submit"  className='bg-blue-500 text-white md:px-4 md:py-2 p-2 rounded-lg hover:bg-blue-700 transition duration-300' >
            Submit
          </button>
        </form>
        <button
            className='bg-rose-500 text-white md:px-4 md:py-2 p-2 rounded-lg hover:bg-rose-700 transition duration-300 absolute top-4 right-4 z-20'
          onClick={handleClose} 
          >
            Close
          </button>
      </div>
    </div>
    </>
  );
}
