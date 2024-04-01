import React from 'react'
import GlobalLayout from '../../layouts/GlobalLayout'

const About = () => {
  return (
    <GlobalLayout>

      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">




          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-gray-800">O que é isso no meu rótulo? projeto de pesquisa</h2>

              <p className="text-lg text-gray-800 dark:text-gray-800">A plataforma web "O que é isso no meu rótulo?" é fruto de um projeto de pesquisa para divulgação científica que consiste em um buscador de interface simples, e que permite às pessoas consultarem informações sobre origem e função dos ingredientes informados em rótulos de produtos utilizados no cotidiano, tais com produtos alimentícios, higiene pessoal, cosméticos e saneantes. </p>
            </div>

            <p className="text-lg text-gray-800 dark:text-gray-800"> Estamos constantemente atualizando a base de dados com novos ingredientes para que nossa plataforma esteja cada vez mais completa e útil para a sociedade </p>

            <figure>
              <img className="w-full object-cover rounded-xl" src="https://veja.abril.com.br/wp-content/uploads/2016/05/quimica-laboratorio-20133010-original.jpeg?quality=90&strip=info" alt="Image Description" />
              <figcaption className="mt-3 text-sm text-center text-gray-500">
                Substancia quimica
              </figcaption>
            </figure>

            <p className="text-lg text-gray-800 dark:text-gray-800">As we've grown, we've seen how Preline has helped companies such as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their designers closer together to create amazing things. We've also learned that when the culture of sharing is brought in earlier, the better teams adapt and communicate with one another.</p>

            <p className="text-lg text-gray-800 dark:text-gray-800">That's why we are excited to share that we now have a <a className="text-blue-600 decoration-2 hover:underline font-medium" href="#">free version of Preline</a>, which will allow individual designers, startups and other small teams a chance to create a culture of openness early on.</p>

            <blockquote className="text-center p-4 sm:px-7">
              <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-800">
                To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.
              </p>
              <p className="mt-5 text-gray-800 dark:text-gray-800">
                Nicole Grazioso
              </p>
            </blockquote>

            <figure>
              <img className="w-full object-cover rounded-xl" src="https://conteudo.imguol.com.br/c/entretenimento/af/2022/06/05/novo-rotulo-com-lupa-1654438067880_v2_900x506.png" alt="Image Description" />
              <figcaption className="mt-3 text-sm text-center text-gray-500">
                Rótulos de alimentos
              </figcaption>
            </figure>

            <div className="space-y-3">
              <h3 className="text-2xl font-semibold dark:text-gray-800">Bringing the culture of sharing to everyone</h3>

              <p className="text-lg text-gray-800 dark:text-gray-800">We know the power of sharing is real, and we want to create an opportunity for everyone to try Preline and explore how transformative open communication can be. Now you can have a team of one or two designers and unlimited spectators (think PMs, management, marketing, etc.) share work and explore the design process earlier.</p>
            </div>

            <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-gray-800">
              <li className="ps-2">Preline allows us to collaborate in real time and is a really great way for leadership on the team to stay up-to-date with what everybody is working on," <a className="text-blue-600 decoration-2 hover:underline font-medium" href="#">said</a> Stewart Scott-Curran, Intercom's Director of Brand Design.</li>
              <li className="ps-2">Preline opened a new way of sharing. It's a persistent way for everyone to see and absorb each other's work," said David Scott, Creative Director at <a className="text-blue-600 decoration-2 hover:underline font-medium" href="#">Eventbrite</a>.</li>
            </ul>

            <p className="text-lg text-gray-800 dark:text-gray-800">Small teams and individual designers need a space where they can watch the design process unfold, both for themselves and for the people they work with – no matter if it's a fellow designer, product manager, developer or client. Preline allows you to invite more people into the process, creating a central place for conversation around design. As those teams grow, transparency and collaboration becomes integrated in how they communicate and work together.</p>

            <div>
              <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                Plan
              </a>
              <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                Web development
              </a>
              <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                Free
              </a>
              <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                Team
              </a>
            </div>
          </div>

        </div>
      </div>
    </GlobalLayout>
  )
}

export default About
