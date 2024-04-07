import { TfiReload } from "react-icons/tfi";

import Image from "next/image";
export default function Loader() {
  return (
    <div className="w-full min-h-screen p-16 bg-neutral-800">
      {/* <TfiReload className="mx-auto font-bold text-blue-500 text-7xl animate-spin scale-[-1]" /> */}
      <div className="w-[300px] h-[300px] mx-auto font-bold text-blue-500 text-7xl  flexMid r	">
      <Image
        src="/images/loader/loader.png"
        width={300}
        height={300}
        alt="loader"
        className="animate-loader scale-[-1]"
      
      />
    </div>
    </div>
  );
}
