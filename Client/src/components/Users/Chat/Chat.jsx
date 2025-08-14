const Chat = () => {
  return (
    <div className="fixed left-[515px] md:block hidden bg-[#f4f2f2] text-center w-[973px] cursor-default">
      <div className="h-screen flex flex-col justify-center items-center w-[550px] mx-auto">
        <img
          className="h-48"
          src="https://static.whatsapp.net/rsrc.php/v4/y6/r/wa669aeJeom.png"
          alt="image"
        />

        <div className="mt-9">
          <h3 className="text-4xl font-light">Download WhatsApp for Windows</h3>
          <p className="text-sm text-gray-600 mt-6">
            Make calls, share your screen and get a faster experience when you
            download the Windows app.
          </p>
        </div>

        <button className="cursor-pointer border-none rounded-3xl py-2 px-6 bg-green-600 text-sm text-white mt-8 mb-6">
          Download
        </button>

        <div className="flex text-sm text-gray-500 fixed bottom-10">
          <span className="material-symbols-outlined">lock</span>
          <p>Your personal messages are end-to-end encrypted</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
