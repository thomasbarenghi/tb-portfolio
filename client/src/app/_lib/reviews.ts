export interface IReview {
  author: string;
  position: string;
  picture: string;
  text: string;
}

export const reviews: IReview[] = [
  {
    author: 'Fabian Pacheco',
    position: 'Compañero en Henry | Desarrollador Fullstack',
    picture: '/image/resenas/fabian.jpg',
    text: 'Desde mi experiencia trabajando con el en el proyecto de Beat Connect puedo decir que es un gran diseñador, con gran creatividad y un alto nivel en desarrollo web. Tambien puedo decir que es una persona bastante experimentada en lo que es front-end y he notado que no tiene dificultad para solucionar los bugs o problemas que se puedan presentar durante el desarrollo.'
  },
  {
    author: 'Juan Villalba',
    position: 'Supervisor en BeatConnect | Desarrollador Fullstack',
    picture: '/image/resenas/juan.jpg',
    text: 'Lamento si alguien tiene dudas del potencial de Thomas. Es un profesional de muy alto nivel, maneja muy buenos criterios en UX/UI. Sabe modularizar codigo de manera impecable y entiende muy bien los procesos y tareas que debe ejecutar. He tenido la suerte de supervisar su trabajo y no ha hecho otra cosa mas que crecer. La empresa que cuente con la suerte de tenerlo en sus filas va a salir ganando sin dudas.'
  },
  {
    author: 'Lucas Regner',
    position: 'Compañero en Henry | Desarrollador Fullstack',
    picture: '/image/resenas/lucas.png',
    text: 'Buena calidad técnica para desarrollar en el frontend. Gran nivel técnico de código. Excelente manejo de Figma y diseño UX/UI.'
  },
  {
    author: 'Valentin Dealbera',
    position: 'Compañero en Henry | Desarrollador Fullstack en Avature',
    picture: '/image/resenas/valentin.png',
    text: 'Muy buen compañero y programador, muy buena resolucion de problemas y creatividad de soluciones.'
  },
  {
    author: 'Tadeo Massó',
    position: 'Compañero en Henry | Desarrollador Fullstack',
    picture: '/image/resenas/tadeo.png',
    text: 'Muy buen programador, sabe escuchar y adaptarse a los cambios, destacables habilidades blandas, en diseño ux/ui y muy comprometido con el trabajo.'
  }
]
