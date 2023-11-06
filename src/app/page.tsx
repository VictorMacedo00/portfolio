import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col justify-between items-center bg-dark-10">
      <div className="flex flex-col w-[1080px] justify-center relative    ">
        <header className="flex min-w-full h-20 justify-center">
          <div className="flex w-full h-full justify-between">
            <div>
              <h1 className="flex h-full items-center text- xl text-brand-color">
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

        <section className="flex w-screen h-[639px] justify-between items-center ">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">OLÁ, EU SOU</h1>
            <span className="text-5xl text-brand-color">VICTOR MACÊDO</span>
            <h1 className="text-2xl">DESENVOLVEDOR FRONT-END</h1>
          </div>
          <div className="h-full w-full bg-[url('/images/illustration.svg')]"></div>
        </section>
      </div>
    </main>
  );
}
