import React from 'react'
import GlobalLayout from '../../layouts/GlobalLayout'
import {  UserOutlined } from '@ant-design/icons'

const About = () => {
  return (
    <GlobalLayout>

      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">




          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-gray-50">O que é isso no meu rótulo? projeto de pesquisa</h2>

              <p className="text-lg text-gray-800 dark:text-gray-50">A plataforma web "O que é isso no meu rótulo?" é fruto de um projeto de pesquisa para divulgação científica que consiste em um buscador de interface simples, e que permite às pessoas consultarem informações sobre origem e função dos ingredientes informados em rótulos de produtos utilizados no cotidiano, tais com produtos alimentícios, higiene pessoal, cosméticos e saneantes. </p>
            </div>

            <p className="text-lg text-gray-800 dark:text-gray-50"> Estamos constantemente atualizando a base de dados com novos ingredientes para que nossa plataforma esteja cada vez mais completa e útil para a sociedade </p>



            <div className="space-y-3">
              <h3 className="text-2xl font-semibold dark:text-gray-50"> Qual a motivação? </h3>

              <p className="text-lg text-gray-800 dark:text-gray-50">

                A lista de ingredientes pouco comunica ao público consumidor em geral,
                uma vez que trata-se de nomes técnicos, impressos em letras pequenas e que ainda podem aparecer em lingua inglesa.

              </p>
            </div>


            <div className="space-y-3">
              <h3 className="text-2xl font-semibold dark:text-gray-50">    O projeto </h3>

              <p className="text-lg text-gray-800 dark:text-gray-50">


                atualmenge vinculado ao edital de fluxo contínuo 16/2021, foi idealizado pelo servidor Emanoel Igor da Silva Oliveira -
                professor de Química do IFBA campus Feira de Santana e pesquisador nos grupos NEPCENT e GEPMES - e tem sido executado em parceria com professores e estudantes pesquisadores de nível superior da área da ciência da
                computação e de nível médio, com o apoio da PRPGI/IFBA, através de bolsas no programa de iniciação científica e tecnológica.

              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-semibold dark:text-gray-50"> Agradecimentos:
              </h3>

              <div className="text-lg text-gray-800 dark:text-gray-50">
            <p>
                <UserOutlined /> Fernanda Castelo Branco - Professora BSI<br />
                <UserOutlined /> Raimundo Carvalho Rabêlo - Professor BSI<br />
                <UserOutlined /> Davy Matos - Estudante BSI<br />
                <UserOutlined /> Mateus dos Santos Silva - Estudante BSI<br />
                <UserOutlined /> Felipe Jesus Macedo - Estudante BSI<br />
                <UserOutlined /> Ericka Almeida de Lima - PIBITI-EM 2021<br />
                <UserOutlined /> Jacson Bacellar Bittencourt - PIBITI-EM 2022<br />
                <UserOutlined /> Ana Luiza Araujo da Silva - PIBITI-EM 2023
            </p>
        </div>
            </div>



          </div>

        </div>
      </div>
    </GlobalLayout>
  )
}

export default About
