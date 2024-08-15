type Props = {
  isOpen: boolean;
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
};

export const Modal = (props: Props) => {
  const onClickOutsideModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      props.onClose?.();
    }
  };

  return (
    <div onClick={onClickOutsideModal} className={`fixed left-0 top-0 z-[12] flex h-full w-full items-center justify-center bg-[rgba(218,218,218,0.26)] ${props.isOpen ? "visible" : "hidden"}`}>
      <div className={`${props.className ? props.className : ""} fixed overflow-y-auto rounded-lg  p-4 shadow`}>{props.children}</div>
    </div>
  );
};
