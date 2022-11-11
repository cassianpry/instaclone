import { modalState } from '../atom/modalAtom';
import { useRecoilState } from 'recoil';

export default function UploadModel() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h1>Modal</h1>
      {open && <h1>Open</h1>}
    </div>
  );
}
