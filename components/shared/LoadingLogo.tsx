import Image from "next/image";

type Props = {
  size?: number;
};

export const LoadingLogo = ({ size = 400 }: Props) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Image
        src="/Logo_Completo.svg"
        alt="Logo"
        width={size}
        height={size}
        className="animate-pulse duration-800"
      />
    </div>
  );
};
