import Link from "next/link";
import Comment from "./comment";
export default function VibeCard() {
  return (
    <div className="absolute bottom-0 w-full md:relative h-1/2 left-0 md:h-[35vw] bg-gray-100 p-5 grid grid-rows-[1fr_2fr] gap-2">
      <div className="bg-gray-200">
        <div className="inline-grid grid-rows-2  border-l-2 border-t-2 border-(--primaryColor) p-2 ">
          <h2>Vibe explanation</h2>
          <i className="text-sm justify-self-end">minu987</i>
        </div>
        <div className="border-2 border-t-0 border-(--primaryColor) p-2">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            culpa sint error magnam porro ipsam at aliquam beatae perferendis
            debitis.
          </p>
        </div>
      </div>

      <h3 className="mt-5">Comments, Stories, More songs...</h3>
      <div className=" w-full overflow-y-auto flex flex-col items-start">
        {Array.from({ length: 10 }).map((_, i) => (
          <Comment />
        ))}
      </div>
    </div>
  );
}
