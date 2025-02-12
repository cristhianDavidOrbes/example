import Image from "next/image";

export default function Home() {
  return (
    <main className="flex gap-3 flex-grap items-center justify-center m-20 bg-gray-100">
      <section className="w-80 bg-white rounded-xl shadow-lg overflow-hidden border-color-100">
        <Image 
          src="/montain.png"
          alt="Paisaje Montañoso"
          width={400}
          height={200}
          className="w-full h-40  rounded-t-xl"
        />
        <section className="p-5">
          <h1 className="text-lg font-bold text-gray-800">Red Heaven</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <section className="mt-3 flex ">
            <span className="bg-red-200 text-red-800 rounded px-3  text-sm">#tailwind</span>
            <span className="bg-red-200 text-red-800 rounded px-3  text-sm">#frontendeverything</span>
          </section>
        </section>
      </section>
    </main>
  );
}
