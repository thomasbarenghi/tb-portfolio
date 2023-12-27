export interface ITechnology {
  title: string
  url: string
}

const detail = {
  languages: {
    javascript: {
      title: 'JavaScript',
      url: '/icon/tecnologias/javascript.svg'
    },
    typescript: {
      title: 'TypeScript',
      url: '/icon/tecnologias/typescript.svg'
    }
  },
  frontend: {
    html: {
      title: 'HTML',
      url: '/icon/tecnologias/html.svg'
    },
    css: {
      title: 'CSS',
      url: '/icon/tecnologias/css.svg'
    },
    sass: {
      title: 'Sass',
      url: '/icon/tecnologias/sass.svg'
    },
    bootstrap: {
      title: 'Bootstrap',
      url: '/icon/tecnologias/bootstrap.svg'
    },
    tailwindcss: {
      title: 'TailwindCSS',
      url: '/icon/tecnologias/tailwindcss.svg'
    },
    react: {
      title: 'React',
      url: '/icon/tecnologias/react.svg'
    },
    nextjs: {
      title: 'NextJS',
      url: '/icon/tecnologias/next.svg'
    },
    redux: {
      title: 'Redux',
      url: '/icon/tecnologias/redux.svg'
    }
  },
  backend: {
    nodejs: {
      title: 'NodeJS',
      url: '/icon/tecnologias/node.svg'
    },
    expressjs: {
      title: 'ExpressJS',
      url: '/icon/tecnologias/express.svg'
    },
    nestjs: {
      title: 'NestJS',
      url: '/icon/tecnologias/nestjs.svg'
    },
    springboot: {
      title: 'Spring Boot',
      url: '/icon/tecnologias/springboot.svg'
    }
  },
  database: {
    sqlite: {
      title: 'SQLite',
      url: '/icon/tecnologias/sqlite.svg'
    },
    postgresql: {
      title: 'PostgreSQL',
      url: '/icon/tecnologias/postgresql.svg'
    },
    mongodb: {
      title: 'MongoDB',
      url: '/icon/tecnologias/mongo.svg'
    }
  },
  nocode: {
    strapi: {
      title: 'Strapi',
      url: '/icon/tecnologias/strapi.svg'
    },
    sanity: {
      title: 'Sanity',
      url: '/icon/tecnologias/sanity.svg'
    },
    wordpress: {
      title: 'Wordpress',
      url: '/icon/tecnologias/wordpress.svg'
    }
  },
  tools: {
    git: {
      title: 'Git',
      url: '/icon/tecnologias/git.svg'
    },
    github: {
      title: 'GitHub',
      url: '/icon/tecnologias/github.svg'
    },
    postman: {
      title: 'Postman',
      url: '/icon/tecnologias/postman.svg'
    },
    figma: {
      title: 'Figma',
      url: '/icon/tecnologias/figma.svg'
    }
  },
  devops: {
    vercel: {
      title: 'Vercel',
      url: '/icon/tecnologias/vercel.svg'
    },
    netlify: {
      title: 'Netlify',
      url: '/icon/tecnologias/netlify.svg'
    },
    render: {
      title: 'Render',
      url: '/icon/tecnologias/render.svg'
    }
  }
}

export const technologies: ITechnology[] = [
  ...Object.values(detail.languages),
  ...Object.values(detail.frontend),
  ...Object.values(detail.backend),
  ...Object.values(detail.database),
  ...Object.values(detail.nocode),
  ...Object.values(detail.tools),
  ...Object.values(detail.devops)
]
