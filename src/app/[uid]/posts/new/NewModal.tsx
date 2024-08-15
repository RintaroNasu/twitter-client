import { Modal } from "@/components/Modal";
import { RxCross2 } from "react-icons/rx";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const NewModal = (props: Props) => {
  return (
    <>
      <Modal className="w-[700px] h-[300px] bg-black" onClose={props.onClose} isOpen={props.isOpen}>
        <div className="flex justify-between items-center">
          <div className="hover:rounded-full hover:bg-gray-700 p-3" onClick={props.onClose}>
            <RxCross2 className="text-white font-bold" />
          </div>
          <div className="text-white text-[20px] font-bold">投稿</div>
          <button className="rounded-3xl bg-white p-2 font-bold hover:bg-gray-400">Save</button>
        </div>
        <div className="flex flex-col gap-7">
          <div className="">
            <input placeholder="What is happening?!" className="py-3 w-full  bg-black px-2" />
          </div>
        </div>
      </Modal>
    </>
  );
};
