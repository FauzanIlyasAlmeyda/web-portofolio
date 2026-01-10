import dataimage from "../data";
import {file,myimage} from "../data";
import { listTools, listProyek, social, pengalaman } from "../data";

function App() {
  return (
    <>
      <div className="container mx-auto ">
        <div className="hero grid lg:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1 px-10">
          <div className="ml-2">
            <div>
              <h1 className="mb-6 text-5xl/tight font-bold transition-transform duration-300 hover:scale-110 ">
                Selamat Datang, Saya Fauzan Ilyas Almeyda
              </h1>
              <p className="mb-6">
                Mahasiswa Program Studi Informatika dengan fokus dan minat pada
                Backend Development dan DevOps Engineering. Berpengalaman dalam
                merancang dan mengembangkan aplikasi berbasis web, backend
                server-side,sistem IoT cloud, serta kemampuan dasar frontend
                untuk mendukung pengembangan aplikasi. Terbiasa bekerja secara
                kolaboratif dalam tim dengan Git & GitHub. Aktif mengikuti riset
                bersama dosen, kompetisi, dan komunitas untuk meningkatkan
                kompetensi teknis.
              </p>
            </div>
            <div className="flex items-center sm:gap-4 gap-2 ">
              <a
                href={file.cv} download="CV Fauzan Ilyas Almeyda."
                className="bg-blue-500 rounded-2xl p-4 hover:bg-blue-950"
              >
                Unduh CV <i className="ri-download-line ri-lg"></i>
              </a>
              <a
                href="#projek"
                className="bg-gray-600 rounded-2xl p-4 hover:bg-gray-800"
              >
                Lihat Projek <i className="ri-arrow-down-long-line ri-lg"></i>
              </a>
            </div>
          </div>
          <img
            src={dataimage.HeroImage}
            alt="Fauzan"
            className="w-125 md:ml-auto mx-auto rounded-2xl"
          />
        </div>
      </div>

      <div
        className="bg-zinc-600 w-full p-4 mt-32 py-10 flex flex-col items-center text-center "
        id="tentang"
      >
        <h1 className="text-4xl/snug font-bold mb-2">Tentang saya</h1>
        <div>
          <div className="grid gap-3 px-7 w-full py-4 items-center md:grid-cols-2 grid-cols-1 ">
            <div>
              <img
                src={myimage.image}
                alt="Fauzan1"
                className="w-90 rounded-2xl lg:ml-14 mx-auto"
              />
            </div>
            <div className="mr-auto">
              <p className="text-base/loose opacity-50 lg:text-right md:text-center ">
                Saya adalah mahasiswa Program Studi Informatika UPN Veteran Jawa
                Timur angkatan 2023 dengan minat dan fokus pada Backend
                Development dan DevOps Engineering. Saya tertarik dalam
                membangun sistem backend yang terstruktur, efisien, dan
                scalable.
              </p>
              <p className="text-base/loose opacity-50 lg:text-right py-4 md:text-center">
                saya aktif mengikuti riset bersama dosen, kompetisi teknologi,
                dan komunitas pengembang sebagai upaya untuk terus meningkatkan
                kemampuan teknis, problem solving, dan adaptasi terhadap
                perkembangan teknologi.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-semibold">Social Media</h1>
          <div className="flex gap-8 pt-4">
            {social.map((sosmed) => (
              <a
                key={sosmed.id}
                href={sosmed.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={sosmed.gambar} alt=" tools image" className="w-10" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="Experience mt-20 py-10 mb-10 flex flex-col items-center text-center "
        id="pengalaman"
      >
        <h1 className="text-4xl/snug font-bold mb-2">Pengalaman</h1>
        <p className="w-2/5 md:text-lg text-sm-base/loose opacity-50 mb-4">
          berikut ini merupakan pengalaman akademik dan non-akademik
        </p>
        <div className="pengalaman-box grid lg:grid-cols-3 md:grid-cols-3 gap-3 px-4 py-10 ">
          {pengalaman.map((pengalaman) => (
            <div className=" bg-zinc-700 rounded-2xl p-4" key={pengalaman.id}>
              <img src={pengalaman.gambar} alt="projek" />
              <div>
                <h1 className="text-2xl font-bold my-4">{pengalaman.nama}</h1>
                <p className="text-base/loose mb-4">{pengalaman.desk}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      

      <div>
        <div
          className="tools mt-20 mb-10 mx-auto  px-4 flex flex-col items-center text-center "
          id="tools"
        >
          <h1 className="text-4xl/snug font-bold mb-2">
            Tools yang saya pakai
          </h1>
          <p className="md:w-2/5 md:text-lg text-sm-base/loose opacity-50 mb-4">
            berikut ini merupakan tools yang saya gunakan
          </p>
          <div className="tools-box grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7 ">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 group rounded-md hover:bg-blue-500 hover:border-blue-500 "
                key={tool.id}
              >
                <img
                  src={tool.gambar}
                  alt=" tools image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div className=" text-[11px] sm:text-sm">
                  <h4>{tool.nama}</h4>
                  <p>{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="projek mt-20 py-10 " id="projek">
        <h1 className="text-center text-4xl font-bold mb-2">Projek</h1>
        <p className="text-base/loose opacity-50 text-center ">
          Berikut beberapa projek yang telah saya buat
        </p>
        <div className="projek-box grid  lg:grid-cols-3 md:grid-cols-3 gap-3 px-4 py-10">
          {listProyek.map((proyek) => (
            <div className=" bg-zinc-700 rounded-2xl p-4" key={proyek.id}>
              <img src={proyek.gambar} alt="projek" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
              </div>
              <div className="flex flex-wrap gap-2 py-2">
                {proyek.tools.map((tool, index) => (
                  <p
                    className="py-1 px-3 bg-blue-500  rounded-md font-semibold "
                    key={index}
                  >
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
