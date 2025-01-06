const Footer = () => {
  const handleOpenGmail = () => {
    const recipient = "courageobunike@gmail.com"; // Replace with desired email
    const subject = "Hello Courage"; // Replace with your subject
    const body = `Hi,
I visited your website and I’m interested in discussing [specific topic, e.g., collaboration, project idea, job opportunity]. Looking forward to your response.
Best regards,
[Your Name]`;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailLink, "_blank"); // Opens in a new tab
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "src/public/image/Courage-Nduka-FlowCV-Resume-20241126 (2).pdf"; // Replace with your file's URL
    link.download = "My Cv"; // Set the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="bg-[#191919] md:p-16 p-5" id="footer">
      <div>
        <h1 className="text-[200px] font-bold text-[#2a2a2a] font-sans">03</h1>
        {/* <p className="text-5xl text-white absolute top-[545%] 2xl:top-[402%] ml-3 font-serif">Get In Touch.</p> */}
      </div>
      <section className="flex flex-col md:flex-row justify-between gap-3 lg:gap-0">
        <div className="lg:w-[50%] md:w-[90%] text-[#767776] font-sans text-xl leading-9">
          Whether you're looking to collaborate on an exciting project, have a question, or just want to say hi, feel free to drop me a message using the form below or any of the contact methods provided—I'll get back to you as soon as I can! I'm open to freelance opportunities, full-time roles, or any interesting ideas you'd like to discuss. Have a project, feedback, or just want to chat? Let's make something great together!
        </div>
        <div>
          <h1 className="text-2xl text-white font-serif">Follow Me</h1>
          <ul className="flex flex-col text-[#767776] font-sans text-xl gap-3">
            <a href='https://www.instagram.com/couragecnc?igsh=aTlpYWhqN3Z3MnJi&utm_source=qr' className='hover:text-white'>
              <li>Instagram</li>
            </a>
           <a href="http://linkedin.com/in/couragenduka" className='hover:text-white'>
              <li>LinkedIn</li>
           </a>
            <a href="https://x.com/couragenwaigbo" className='hover:text-white'>
             <li>Twitter</li>
            </a>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl text-white font-serif">Contact Me</h1>
          <ul className="flex flex-col text-[#767776] font-sans text-xl gap-3">
            <li className='hover:text-white'>Email: Courageobunike@gmail.com</li>
            <li className='hover:text-white'>Phone: +234 9049854437</li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-3 mt-9">
        <button
          className="h-20 w-full bg-[#c9401c] text-white hover:bg-[#c93f1cd3]"
          onClick={handleOpenGmail}
        >
          Message Me
        </button>
        <button
          className="h-20 w-full border border-white text-white hover:bg-white hover:text-black"
          onClick={handleDownload}
        >
          GET My Cv
        </button>
      </section>
    </main>
  );
};

export default Footer;
