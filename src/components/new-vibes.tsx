import Link from "next/link";
export default function NewVibes() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex justify-between items-center w-3/4">
          <Link href={"/vibes"}>
            <h3>New vibes</h3>
          </Link>
        </div>
        <div className="w-5/6 h-16 bg-white">
          <Link
            href={"/"}
            className="text-(--primaryColor) hover:text-(--primaryHover)"
          >
            explanation...
          </Link>
        </div>
      </div>
    </>
  );
}
