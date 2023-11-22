import { Animate } from '@/components/AnimateIn'
import { premios } from '@/data/awards'
import { Card, CardSection } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import Image from 'next/image'

const PremiosPage = () => {
  return (
    /*<main className="py-32 px-10">
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
    */
    <main className="py-16 px-0">
      <div className="flex mb-16">   {/* first content div */}
        <div className="mx- w-7/12 flex flex-col items-end pr-16 justify-center bg-[#00415a] rounded-r">  {/* text box */}
          <h1 className="text-4xl text-white font-bold mb-2">Prémio do Dia</h1>
          <p className="text-white">{premios[2].description}</p>
        </div>
        <div className="w-5/12 flex ml-6 pl-16 border-2 border-[#00415a] rounded-l border-r-0"> {/* images */}
          <div className="align-center h-{280}">
            <Image
              src={premios[2].image.src}
              alt={premios[2].description}
              width={320}
              height={280}
            />
          </div>
        </div>
      </div>
      <h1 className="text-2xl text-primary-500 font-bold mb-4 ml-8">Prémios da Semana</h1>  {/* second content title */}
      <Carousel slideSize="320px" height={460} slideGap="md" controlSize={32} loop>
        {premios.map((premio, key) => (
          <Carousel.Slide key={`premio_${key}`}>
            <Card radius="md" withBorder padding="xl">
              <div className="h-80 w-full relative">
                <img
                  src={premio.image.src}
                  alt={premio.description}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <Card.Section>
                <h2 className="text-2xl text-primary-500 font-medium">
                  {premio.title}
                </h2>
                <p className="mt-5">{premio.description}</p>
              </Card.Section>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
      {/*<div className='mt-16 w-3/4 mx-auto flex justify-evenly '>
        <div>
          <Image
                  src={premios[4].image.src}
                  alt={premios[4].title}
                  width={320}
                  height={320}
                />
        </div>
        <div>
          {premios[4].title}
        </div>
        </div>*/}
    </main>
  )
}

export default PremiosPage
