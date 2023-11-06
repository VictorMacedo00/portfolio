import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-dark-10">
      <header className="flex min-w-full h-20 justify-center">
        <div className="flex w-[1080px] h-full justify-between">
          <div>
            <h1 className="flex h-full items-center text-brand-color">
              Victor Macêdo
            </h1>
          </div>
          <nav>
            <ul className="flex h-full gap-x-10 items-center justify-between text-dark-30">
              <li>Home</li>
              <li>Sobre mim</li>
              <li>Experiência</li>
              <li>Projetos</li>
            </ul>
          </nav>
        </div>
      </header>
    </main>
  );
}
