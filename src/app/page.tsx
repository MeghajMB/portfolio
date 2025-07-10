import LinksSection from "./_components/links-section";
import ProjectsSection from "./_components/projects-section";

export default function Home() {
  return (
    <main className="min-h-screen font-secondary">
      <div className="flex justify-center items-center">
        <h1 className="text-xl md:text-3xl lg:text-5xl m-5 font-primary">
          Meghaj MB
        </h1>
      </div>
      <div className="mx-10 md:mx-40 lg:mx-64">
        <p className="text-lg leading-none">
          Hi Welcome to my website.The website is not much as I plan to create a
          2D game with phaser and make the landing page 3D with react three
          fibre...so for now this is it.
        </p>

        <section>
          <h2 className="font-primary my-3">About</h2>
          <p>
            Iam a fullstack developer who loves to code.Iam currently preparing
            for interviews and building redis from scratch as a side project
          </p>
        </section>
        <LinksSection />
        <ProjectsSection />
        <section className="mb-4">
          <h2 className="font-primary my-3">Conclusion</h2>
          <p>
            Thank You for visiting my website.
            <br /> Have a great day.
          </p>
        </section>
      </div>
    </main>
  );
}
