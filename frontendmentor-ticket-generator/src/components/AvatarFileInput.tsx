import { useCallback, useState } from "react";
import Dropzone from "react-dropzone";
import uploadFile from "../assets/images/icon-upload.svg";
import info from "../assets/images/icon-info.svg";
import { FileIcon, XIcon } from "lucide-react";

interface IAvatarFileInputProps {
  onChange: (src: string) => void;
}

const AvatarFileInput: React.FC<IAvatarFileInputProps> = ({ onChange }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      setFileName(file.name);

      if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        // If we have a valid file, set an event when the reader finishes with the file read
        reader.onload = (e) => {
          if (e.target?.result && typeof e.target.result === "string") {
            const src = e.target.result;
            // the `e.target.result` will be the img src ready for preview
            setPreview(src);
            onChange(src);
          }
        };
        reader.readAsDataURL(file);
      } else {
        setPreview(null);
      }
    },
    [onChange]
  );

  const clearFile = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setPreview(null);
    setFileName("");
  };

  return (
    <section className="mt-4 md:mt-0 text-start">
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
          <section className="border-2 border-dashed  hover:border-white/80 border-white/40 py-6 mt-1 px-4 rounded-xl bg-white bg-opacity-[8%] hover:shadow-[0_0_5px_white] transition duration-300 text-light-gray">
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
                    className="absolute p-1 transition-colors border rounded-full -top-3 -right-3 bg-black/90 border-white/50 hover:bg-black/60"
                  >
                    <XIcon className="w-4 h-4" />
                  </button>

                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="max-w-[100px] border border-white/50 max-h-[100px] rounded-lg object-contain"
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
