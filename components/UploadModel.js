import { modalState } from '../atom/modalAtom';
import { useRecoilState } from 'recoil';
import Modal from 'react-modal';

export default function UploadModel() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      {open && (
        <Modal
          className="bg-white border-2 rounded-lg shadow-md max-w-lg w-[90%] h-[300px] absolute top-56 left-[50%] translate-x-[-50%]"
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            <h1>Modal</h1>
          </div>
        </Modal>
      )}
    </div>
  );
}
