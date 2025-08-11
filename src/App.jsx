import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { MessageCircle, Phone, MapPin, Building, Calendar, Star } from 'lucide-react'
import './App.css'

// Importando o logo e imagem de agendamento
import logo from './assets/logo.png'
import agendamentoImg from './assets/agendamento.png'

// Importando todas as imagens das velas
import vela1 from './assets/1.png'
import vela2 from './assets/2.png'
import vela3 from './assets/3.png'
import vela4 from './assets/4.png'
import vela5 from './assets/5.png'
import vela6 from './assets/6.png'
import vela7 from './assets/7.png'
import vela8 from './assets/8.png'
import vela9 from './assets/9.png'
import vela10 from './assets/10.png'
import vela11 from './assets/11.png'
import vela12 from './assets/12.png'
import vela13 from './assets/13.png'
import vela14 from './assets/14.png'
import vela15 from './assets/15.png'
import vela16 from './assets/16.png'
import vela17 from './assets/17.png'
import vela18 from './assets/18.png'
import vela19 from './assets/19.png'
import vela20 from './assets/20.png'
import vela21 from './assets/21.png'
import vela22 from './assets/22.png'
import vela23 from './assets/23.png'
import vela24 from './assets/24.png'
import vela25 from './assets/25.png'
import vela26 from './assets/26.png'
import vela27 from './assets/27.png'
import vela28 from './assets/28.png'
import vela29 from './assets/29.png'
import vela30 from './assets/30.png'
import vela31 from './assets/31.png'
import vela32 from './assets/32.png'
import vela33 from './assets/33.png'
import vela34 from './assets/34.png'
import vela35 from './assets/35.png'
import vela36 from './assets/36.png'
import vela37 from './assets/37.png'
import vela38 from './assets/38.png'
import vela39 from './assets/39.png'
import vela40 from './assets/40.png'

const velas = [
  { id: 1, imagem: vela1, nome: 'Vela Especial 1' },
  { id: 2, imagem: vela2, nome: 'Vela Especial 2' },
  { id: 3, imagem: vela3, nome: 'Vela Especial 3' },
  { id: 4, imagem: vela4, nome: 'Vela Especial 4' },
  { id: 5, imagem: vela5, nome: 'Vela Especial 5' },
  { id: 6, imagem: vela6, nome: 'Vela Especial 6' },
  { id: 7, imagem: vela7, nome: 'Vela Especial 7' },
  { id: 8, imagem: vela8, nome: 'Vela Especial 8' },
  { id: 9, imagem: vela9, nome: 'Vela Especial 9' },
  { id: 10, imagem: vela10, nome: 'Vela Especial 10' },
  { id: 11, imagem: vela11, nome: 'Vela Especial 11' },
  { id: 12, imagem: vela12, nome: 'Vela Especial 12' },
  { id: 13, imagem: vela13, nome: 'Vela Especial 13' },
  { id: 14, imagem: vela14, nome: 'Vela Especial 14' },
  { id: 15, imagem: vela15, nome: 'Vela Especial 15' },
  { id: 16, imagem: vela16, nome: 'Vela Especial 16' },
  { id: 17, imagem: vela17, nome: 'Vela Especial 17' },
  { id: 18, imagem: vela18, nome: 'Vela Especial 18' },
  { id: 19, imagem: vela19, nome: 'Vela Especial 19' },
  { id: 20, imagem: vela20, nome: 'Vela Especial 20' },
  { id: 21, imagem: vela21, nome: 'Vela Especial 21' },
  { id: 22, imagem: vela22, nome: 'Vela Especial 22' },
  { id: 23, imagem: vela23, nome: 'Vela Especial 23' },
  { id: 24, imagem: vela24, nome: 'Vela Especial 24' },
  { id: 25, imagem: vela25, nome: 'Vela Especial 25' },
  { id: 26, imagem: vela26, nome: 'Vela Especial 26' },
  { id: 27, imagem: vela27, nome: 'Vela Especial 27' },
  { id: 28, imagem: vela28, nome: 'Vela Especial 28' },
  { id: 29, imagem: vela29, nome: 'Vela Especial 29' },
  { id: 30, imagem: vela30, nome: 'Vela Especial 30' },
  { id: 31, imagem: vela31, nome: 'Vela Especial 31' },
  { id: 32, imagem: vela32, nome: 'Vela Especial 32' },
  { id: 33, imagem: vela33, nome: 'Vela Especial 33' },
  { id: 34, imagem: vela34, nome: 'Vela Especial 34' },
  { id: 35, imagem: vela35, nome: 'Vela Especial 35' },
  { id: 36, imagem: vela36, nome: 'Vela Especial 36' },
  { id: 37, imagem: vela37, nome: 'Vela Especial 37' },
  { id: 38, imagem: vela38, nome: 'Vela Especial 38' },
  { id: 39, imagem: vela39, nome: 'Vela Especial 39' },
  { id: 40, imagem: vela40, nome: 'Vela Especial 40' },
]

function App() {
  const [abaAtiva, setAbaAtiva] = useState('velas')
  const whatsappNumber = '5516999988788'
  
  const abrirWhatsApp = (nomeVela) => {
    const mensagem = `Olá Maria! Tenho interesse na ${nomeVela}. Poderia me dar mais informações?`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank')
  }

  const agendarTrabalhoEspiritual = () => {
    const mensagem = `Olá Maria! Gostaria de agendar um trabalho espiritual. Poderia me dar mais informações sobre consulta com cartas, energização, limpeza espiritual e orientações personalizadas?`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center space-y-4">
            <img 
              src={logo} 
              alt="Mensageiros de Maria" 
              className="h-24 w-auto object-contain"
            />
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-2">
                Mensageiros de Maria
              </h1>
              <p className="text-amber-700 text-lg">
                Loja e Fábrica de Velas
              </p>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <Phone className="h-4 w-4 text-amber-600" />
                <span className="text-amber-600 font-medium">(16) 99998-8788</span>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="mt-6">
            <div className="flex justify-center space-x-4">
              <Button
                variant={abaAtiva === 'velas' ? 'default' : 'outline'}
                onClick={() => setAbaAtiva('velas')}
                className={`${abaAtiva === 'velas' ? 'bg-amber-600 hover:bg-amber-700' : 'border-amber-600 text-amber-600 hover:bg-amber-50'}`}
              >
                <Building className="h-4 w-4 mr-2" />
                Nossas Velas
              </Button>
              <Button
                variant={abaAtiva === 'agendamento' ? 'default' : 'outline'}
                onClick={() => setAbaAtiva('agendamento')}
                className={`${abaAtiva === 'agendamento' ? 'bg-amber-600 hover:bg-amber-700' : 'border-amber-600 text-amber-600 hover:bg-amber-50'}`}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Trabalhos Espirituais
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {abaAtiva === 'velas' && (
          <>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-800 mb-4">
                Nossa Coleção de Velas
              </h2>
              <p className="text-amber-700 text-lg max-w-2xl mx-auto">
                Descubra nossa seleção especial de velas artesanais. 
                Clique na vela de seu interesse para entrar em contato via WhatsApp.
              </p>
            </div>

            {/* Grid de Velas */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {velas.map((vela) => (
                <Card 
                  key={vela.id} 
                  className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-white/80 backdrop-blur-sm border-amber-200"
                  onClick={() => abrirWhatsApp(vela.nome)}
                >
                  <CardContent className="p-4">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-white">
                      <img 
                        src={vela.imagem} 
                        alt={vela.nome}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-amber-800 text-center mb-3">
                      {vela.nome}
                    </h3>
                    <Button 
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center space-x-2"
                      size="sm"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {abaAtiva === 'agendamento' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-800 mb-4">
                Trabalhos Espirituais
              </h2>
              <p className="text-amber-700 text-lg max-w-2xl mx-auto">
                Agende sua consulta personalizada com nossa cartomante profissional.
              </p>
            </div>

            <Card className="bg-white/90 backdrop-blur-sm border-amber-200 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={agendamentoImg} 
                    alt="Cartomante Profissional - Agenda Aberta"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center justify-center">
                      <Star className="h-6 w-6 mr-2 text-yellow-500" />
                      Cartomante Profissional
                    </h3>
                    <p className="text-amber-700 text-lg mb-6">
                      Consulta com cartas, energização, limpeza espiritual e orientações personalizadas.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-amber-800 text-lg">Serviços Oferecidos:</h4>
                      <ul className="space-y-2 text-amber-700">
                        <li className="flex items-center">
                          <Star className="h-4 w-4 mr-2 text-yellow-500" />
                          Consulta com Cartas
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 mr-2 text-yellow-500" />
                          Energização
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 mr-2 text-yellow-500" />
                          Limpeza Espiritual
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 mr-2 text-yellow-500" />
                          Orientações Personalizadas
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-amber-800 text-lg">Contato:</h4>
                      <div className="flex items-center text-amber-700">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>(16) 99998-8788</span>
                      </div>
                      <p className="text-amber-600 text-sm">
                        Agenda aberta para atendimentos personalizados
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button 
                      onClick={agendarTrabalhoEspiritual}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg flex items-center justify-center space-x-2 mx-auto"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>Agendar via WhatsApp</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-amber-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo e Info Principal */}
            <div className="text-center md:text-left">
              <img 
                src={logo} 
                alt="Mensageiros de Maria" 
                className="h-16 w-auto object-contain opacity-80 mx-auto md:mx-0 mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Mensageiros de Maria</h3>
              <p className="text-amber-100 mb-2">Loja e Fábrica de Velas</p>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="h-4 w-4" />
                <span>(16) 99998-8788</span>
              </div>
              <p className="text-amber-200 text-sm mt-2">
                CNPJ: 50.254.397/0001-16
              </p>
            </div>

            {/* Loja 1 */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 flex items-center justify-center md:justify-start">
                <MapPin className="h-5 w-5 mr-2" />
                Loja 01 - São Joaquim da Barra
              </h4>
              <div className="text-amber-100 space-y-1">
                <p>Rua São Paulo, 2524</p>
                <p>Lapa</p>
                <p>São Joaquim da Barra - SP</p>
              </div>
            </div>

            {/* Loja 2 */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 flex items-center justify-center md:justify-start">
                <MapPin className="h-5 w-5 mr-2" />
                Loja 02 - Ipuã
              </h4>
              <div className="text-amber-100 space-y-1">
                <p>Rua Barão do Rio Branco, 345</p>
                <p>Centro</p>
                <p>Ipuã - SP</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-amber-700 text-center">
            <p className="text-amber-200 text-sm">
              © 2024 Mensageiros de Maria. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

