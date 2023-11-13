"use client";
import { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone } from "react-dropzone";

type DropzoneProps = {
  bytesRead: Dispatch<SetStateAction<string| ArrayBuffer | null>>
}

const Dropzone = ({bytesRead}:DropzoneProps) => {
  const onDrop = useCallback((acceptedFiles:Array<File>) => {
    // Do something with the files
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
        bytesRead(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
  }, [bytesRead])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


  return (<>
    <div {...getRootProps()} style={{ width: 400, height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black', padding: 32}}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag and drop some files here, or click to select files</p>
      }
    </div>
  </>);
}

export default Dropzone;
