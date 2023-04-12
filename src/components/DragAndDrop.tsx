import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function DragAndDrop({ onFileRead, children }) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        onFileRead(reader.result);
      };
      reader.readAsText(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-md p-4 ${
        isDragActive ? "border-green-500" : "border-gray-300"
      }`}
    >
      <input {...getInputProps()} />
      {children}
      {isDragActive && (
        <p className="text-center text-green-500 font-semibold">
          Drop the file here...
        </p>
      )}
    </div>
  );
}

export default DragAndDrop;
