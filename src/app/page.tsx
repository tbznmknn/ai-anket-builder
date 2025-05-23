import logo from "@/assets/logo.png";
import resumePreview from "@/assets/Anket.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 px-5 py-12 text-center text-gray-900 md:flex-row md:text-start lg:gap-12">
      <div className="max-w-prose space-y-3">
        <Image
          src={logo}
          alt="Logo"
          width={150}
          height={150}
          className="mx-auto md:ms-0"
        />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Төгс{" "}
          <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Анкетээ
          </span>{" "}
          Минутын дотор бүтээгээрэй
        </h1>
        <p className="text-lg text-gray-500">
          Бидний <span className="font-bold">AI анкет бүтээгч</span> ажилд олгох
          анкетийг зохиомжлож бүтээхэд туслах болно
        </p>
        <div className="mb-2 max-w-md rounded-2xl p-4 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Хэрэглээнд нэвтэрсэн анкетийн загварууд
          </h2>
          <ul className="list-inside list-disc space-y-2 text-gray-700">
            <li>Мэргэжлийн CV</li>
            {/* <li>Төрийн албан хаагчийн 1-р анкет</li> */}
          </ul>
        </div>

        <Button asChild size="lg" variant="premium">
          <Link href="/resumes">Эхлэх</Link>
        </Button>
      </div>
      <div>
        <Image
          src={resumePreview}
          alt="Resume preview"
          width={600}
          className="shadow-md lg:rotate-[1.5deg]"
        />
      </div>
    </main>
  );
}
