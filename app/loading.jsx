import { TfiReload } from "react-icons/tfi";

export default function Loader() {
  return (
    <div className="w-full p-16 min-h-52 bg-neutral-800">
      <TfiReload className="mx-auto font-bold text-blue-500 text-7xl animate-spin scale-[-1]" />
    </div>
  );
}
