import { Animate } from '@/components/AnimateIn'
import { premios } from '@/data/awards'
import Image from 'next/image'

const PremiosPage = () => {
  return (
    <main className="py-6 px-10">
      <h1 className="text-3xl font-semibold text-tertiary-500">
        Descobre os <span className="text-secondary-500">prémios</span> que
        podes vir a receber
      </h1>
      <p className="text-sm py-3 text-tertiary-500">
        Passa por cada imagem e descobre o que temos para oferecer
      </p>
      <section className="grid grid-cols-6 gap-10 mt-6">
        {premios.map((premio) => (
          <div
            className="col-span-6 md:col-span-3 lg:col-span-2"
            key={premio.title}
          >
            <Animate.FadeUp>
              <h2 className="text-2xl text-primary-500 font-medium">
                {premio.title}
              </h2>
              <div className="blur-md cursor-pointer ease-out focus:blur-0 hover:blur-0">
                <Image
                  src={premio.image.src}
                  alt={premio.description}
                  width={300}
                  height={300}
                />
                <p className="mt-5">{premio.description}</p>
              </div>
            </Animate.FadeUp>
          </div>
        ))}
      </section>
    </main>
  )
}

export default PremiosPage
