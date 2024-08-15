import { Modal } from "@/components/Modal";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const EditModal = (props: Props) => {
  return (
    <>
      <Modal className="w-[700px] h-[500px] bg-black" onClose={props.onClose} isOpen={props.isOpen}>
        <div className="flex justify-between items-center">
          <div className="hover:rounded-full hover:bg-gray-700 p-3" onClick={props.onClose}>
            <RxCross2 className="text-white font-bold" />
          </div>
          <div className="text-white text-[20px] font-bold">Edit profile</div>
          <button className="rounded-3xl bg-white p-2 font-bold hover:bg-gray-400">Save</button>
        </div>
        <div className="ml-5 mb-8">
          <Image src="/twitter.jpg" alt="twitter" width={100} height={50} />
        </div>
        <div className="flex flex-col gap-7">
          <div className="border border-gray-700">
            <input placeholder="Name" className="py-3 w-full  bg-black" />
          </div>
          <div className="border border-gray-700">
            <input placeholder="Bio" className="bg-black py-3 w-full" />
          </div>
        </div>
      </Modal>
    </>
  );
};
