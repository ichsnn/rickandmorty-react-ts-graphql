import { twMerge } from "tailwind-merge";

type InputTextBoxProps = React.HTMLProps<HTMLInputElement>;

const InputTextBox = (props: InputTextBoxProps) => {
  return (
    <div className="w-full">
      <input
        {...props}
        className={twMerge(
          "border py-2 px-4 rounded-full font-medium bg-white border-slate-500 cursor-pointer shadow-[6px_6px_0px_0px_#000000]",
          props.className
        )}
      />
    </div>
  );
};

export default InputTextBox;
