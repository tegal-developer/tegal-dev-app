import ServiceItem from './ServiceItem';

export default function ServiceItemList() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <ServiceItem
        text="Komunitas developer memiliki jaringan luas developer dengan
      berbagai macam keahlian dan pengalaman. Hal ini dapat membantu
      perusahaan atau lembaga pendidikan untuk menemukan talenta yang
      tepat untuk kebutuhan mereka."
      />
      <ServiceItem
        text="Komunitas developer dapat memberikan umpan balik dan validasi yang
      berharga atas produk dan layanan baru. Hal ini dapat membantu
      perusahaan atau lembaga pendidikan untuk memastikan bahwa produk
      dan layanan mereka memenuhi kebutuhan developer dan pengguna
      akhir."
      />
      <ServiceItem
        text="Komunitas developer dapat membantu perusahaan atau lembaga
      pendidikan untuk mempromosikan produk dan layanan mereka kepada
      developer dan pengguna akhir. Hal ini dapat dilakukan melalui
      berbagai macam cara, seperti media sosial, blog, dan acara."
      />
      <ServiceItem
        text="Komunitas developer dapat membantu perusahaan atau lembaga
      pendidikan untuk mengembangkan keterampilan developer mereka
      melalui berbagai macam cara, seperti workshop, tutorial, dan
      mentoring."
      />
      <ServiceItem
        text="Komunitas developer adalah sumber inovasi yang hebat. Mereka dapat
      membantu perusahaan atau lembaga pendidikan untuk mengembangkan
      ide-ide baru dan memecahkan masalah yang kompleks."
      />
    </div>
  );
}
