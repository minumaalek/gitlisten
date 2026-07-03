import Link from "next/link";
import UserPreview from "./user-preview";
export default function VibesList() {
  return (
    <ul className="flex flex-col gap-2 w-full items-center">
      {[...Array(20)].map((_, index) => {
        return (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-200 w-full p-3 cursor-pointer hover:bg-gray-300"
          >
            <div className="flex">
              <div>💔</div>
              <Link href={"/"}>Explain</Link>
            </div>
            <UserPreview username={"minu987"} />
          </li>
        );
      })}
    </ul>
  );
}
