import Image from 'next/image'
import { technologies } from '../_lib/technologies'

const Skills = () => (
  <section className='flex w-full flex-col items-center justify-center gap-10 bg-gray-100 '>
    <div className='padding-x-estilo2 flex w-full items-center justify-center gap-4 2xl:container'>
      <div className='flex w-full flex-col items-center justify-center gap-3 py-24'>
        <h1 className='text-titulo1 w-full font-light'>
          Mis <span className='text-titulo1 font-semibold '>habilidades </span>
          🤖🤯
        </h1>
        <p className='mb-4 text-base font-light'>
          Trabajé en más de 10 proyectos de desarrollo de software, que incluyen
          proyectos fullstack, CMS, low code, electrónica y domótica. Como líder
          de equipo,{' '}
          <b>
            he dirigido equipos de más de 5 personas y siempre me he adaptado
            satisfactoriamente a diferentes entornos y personas.
          </b>{' '}
          Estas experiencias me han enseñado la importancia de la comunicación
          clara y efectiva, la planificación cuidadosa, y el trabajo en equipo
          para lograr un proyecto exitoso. Además, tengo una actitud positiva y
          proactiva, lo que me permite enfrentar desafíos con confianza y
          creatividad.
        </p>
        <div className='flex w-full flex-row flex-wrap justify-start gap-2'>
          {technologies.map((tecnologia, index) => (
            <div key={'s' + index} className='relative h-10 w-10'>
              <Image
                src={tecnologia.url}
                alt={tecnologia.title}
                layout='fill'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Skills
