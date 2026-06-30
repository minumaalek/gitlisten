import Link from "next/link";
export default function VibesList() {
  const vibe = (
    <li className="flex justify-between items-center bg-gray-200 w-7/8 p-3 cursor-pointer hover:bg-gray-300">
      <div className="flex">
        <div>💔</div>
        <Link href={"/"}>Explain</Link>
      </div>
      <i className="text-sm">minu987</i>
    </li>
  );
  return (
    <ul className="flex flex-col gap-2">
      {[...Array(3)].map((_, index) => {
        return <div key={index}>{vibe}</div>;
      })}
    </ul>
  );
}
