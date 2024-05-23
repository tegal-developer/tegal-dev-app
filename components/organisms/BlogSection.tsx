import Button from '../atoms/Button';

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="
    bg-[#FAFBFD]
    dark:bg-gray-900
    border-t
    border-gray-300
    dark:border-gray-700
    dark:bg
    px-5
    py-12
    text-gray-700
    dark:text-white
    flex
    flex-col
    gap-10
    items-center"
    >
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold ">
          Blog <span className="text-[#1B71D8]">Tegal Dev</span>
        </h1>
        <p>Belum ada blog nih!</p>
        {/* <div>
          <Button
            label="Lihat Lebih Banyak"
            backgroundColor="#1B71D8"
            hoverBackgroundColor="#1865c2"
            textColor="white"
          />
        </div> */}
      </div>
    </section>
  );
}