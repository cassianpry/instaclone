import { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atom/modalAtom';
import Modal from 'react-modal';
import { CameraIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function UploadModel() {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <div>
      {open && (
        <Modal
          className="bg-white border-2 rounded-lg shadow-md max-w-xl w-[100%] absolute p-6 top-56 left-[50%] translate-x-[-50%] focus:ring-0"
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
            setSelectedFile(null);
          }}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            {selectedFile ? (
              <Image
                className="w-full max-h-[75%]"
                src={selectedFile}
                alt={selectedFile}
                width="0"
                height="0"
                onClick={() => setSelectedFile(null)}
              />
            ) : (
              <CameraIcon
                className="cursor-pointer h-14 bg-blue-200 p-2 rounded-full border-2 text-blue-500"
                onClick={() => filePickerRef.current.click()}
              />
            )}

            <input
              type="file"
              hidden
              ref={filePickerRef}
              onChange={addImageToPost}
            />
            <input
              className="m-4 border-none text-center w-full focus:ring-0"
              type="text"
              max="150"
              placeholder="Escreval algo legal..."
            />
            <button
              className="w-full rounded-md bg-blue-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
              disabled
            >
              Postar
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
