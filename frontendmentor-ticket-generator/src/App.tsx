import ResponsiveBackground from "./components/ResponsiveBackground";
import fullLogo from "../src/assets/images/logo-full.svg";
import TextInput from "./components/TextInput";
import Dropzone from "react-dropzone";
import uploadFile from "../src/assets/images/icon-upload.svg";
import info from "../src/assets/images/icon-info.svg";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center pb-20 text-center md:max-w-[700px]">
        <header className="mb-10 text-white flex flex-col md:gap-8 gap-6 justify-center items-center">
          <img src={fullLogo} alt="Coding Conf Logo" className="" />
          <h1 className="text-5xl mb-2 font-bold">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <h2 className="text-light-gray text-lg">
            Secure your spot at next year's biggest coding conference
          </h2>
        </header>
        <main className="gap-6 md:min-w-[350px] flex flex-col justify-center items-centers text-white/80">
          <div className="text-start">
            <span>Upload avatar</span>
            <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section className="border-2 border-dashed hover:border-white/80 border-white/40 py-6 mt-1 px-4 rounded-xl bg-white bg-opacity-[8%] hover:shadow-[0_0_5px_white] transition duration-300 text-light-gray">
                  <div
                    className="flex flex-col items-center"
                    {...getRootProps()}
                  >
                    <img
                      className="min-w-[45px] mb-2 border-[1px] border-white/10 bg-light-gray/20 rounded-xl p-1"
                      src={uploadFile}
                      alt="Upload File"
                    />
                    <input {...getInputProps()} />
                    <p>Drag and drop or click to upload</p>
                  </div>
                </section>
              )}
            </Dropzone>
            <div className="flex">
              <img className="opacity-80" src={info} alt="Upload Information" />
              <span className="text-[0.8rem] m-2 text-light-gray">
                Upload your photo (JPG or PNG, max size: 500KB).
              </span>
            </div>
          </div>
          <TextInput label="Full Name" placeholder="John Doe" />
          <TextInput label="Email Address" placeholder="example@mail.com" />
          <TextInput label="Github Username" placeholder="developer_404" />
          <button
            className="
          transition
          duration-300
          hover:shadow-[0_0_10px_coral]
          px-10 py-3 rounded-xl font-bold bg-coral text-black/90 mt-2"
          >
            Generate My Ticket
          </button>
        </main>
      </div>

      <ResponsiveBackground />
    </>
  );
}

export default App;
