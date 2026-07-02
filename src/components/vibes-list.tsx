import Link from "next/link";
export default function VibesList() {
  return (
    <ul className="flex flex-col gap-2 w-full items-center">
      {[...Array(20)].map((_, index) => {
        return (
          <li className="flex justify-between items-center bg-gray-200 w-full p-3 cursor-pointer hover:bg-gray-300">
            <div className="flex">
              <div>💔</div>
              <Link href={"/"}>Explain</Link>
            </div>
            <i className="text-sm">minu987</i>
          </li>
        );
      })}
    </ul>
  );
}
