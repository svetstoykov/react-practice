import { useCallback, useState } from "react";
import Dropzone from "react-dropzone";
import uploadFile from "../assets/images/icon-upload.svg";
import info from "../assets/images/icon-info.svg";
import { FileIcon, XIcon } from "lucide-react";

const AvatarFileInput = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setFileName(file.name);

    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result && typeof e.target.result === "string") {
          setPreview(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, []);

  const clearFile = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setPreview(null);
    setFileName("");
  };

  return (
    <section className="text-start">
      <span>Upload avatar</span>
      <Dropzone
        onDrop={onDrop}
        maxSize={5 * 1024 * 100} // 500KB in bytes
        accept={{
          "image/*": [".png", ".jpg", ".jpeg"],
        }}
        multiple={false}
      >
        {({ getRootProps, getInputProps }) => (
          <section className="border-2 border-dashed hover:border-white/80 border-white/40 py-6 mt-1 px-4 rounded-xl bg-white bg-opacity-[8%] hover:shadow-[0_0_5px_white] transition duration-300 text-light-gray">
            <div className="flex flex-col items-center" {...getRootProps()}>
              <input {...getInputProps()} />

              {!preview && !fileName && (
                <>
                  <img
                    className="min-w-[45px] mb-2 border-[1px] border-white/10 bg-light-gray/20 rounded-xl p-1"
                    src={uploadFile}
                    alt="Upload File"
                  />
                  <p>Drag and drop or click to upload</p>
                </>
              )}

              {(preview || fileName) && (
                <div className="relative">
                  <button
                    onClick={clearFile}
                    className="absolute -top-3 -right-3 p-1 rounded-full 
                    hover:shadow-[0_0_2px_white]
                    bg-black/80 border border-white/50 hover:bg-black/70 transition-colors"
                  >
                    <XIcon className="w-4 h-4" />
                  </button>

                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="max-w-[120px] max-h-[120px] rounded-lg object-contain"
                    />
                  ) : (
                    <div className="flex flex-col items-center">
                      <FileIcon className="w-12 h-12 mb-2 text-white/60" />
                      <p className="text-sm text-white/80">{fileName}</p>
                    </div>
                  )}
                </div>
              )}
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
    </section>
  );
};

export default AvatarFileInput;
