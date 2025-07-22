

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DossierCard from '@/components/DossierCard';
import Modal from '@/components/Modal';
import { RSVPForm } from '@/components/RSVPForm';
import { DOSSIER_ITEMS, STRATEGIC_AXES_DETAILS } from '@/constants';

const App: React.FC = () => {
    const [isRsvpModalOpen, setRsvpModalOpen] = useState(false);

    const LinkHighlight: React.FC<{href: string, children: React.ReactNode}> = ({ href, children }) => (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-amber-600 font-medium underline decoration-dotted underline-offset-4 hover:text-amber-700">
            {children}
        </a>
    );

    return (
        <>
            <Header onRsvpClick={() => setRsvpModalOpen(true)} />

            <section className="w-full bg-stone-100">
                <img 
                    src="https://i.ibb.co/1fYNQ4jM/Card-climax-jequitinhonha.png" 
                    alt="Convite para o CLIMAX 2025 no Vale do Jequitinhonha" 
                    className="w-full h-auto object-cover" 
                />
            </section>

            <main className="container mx-auto px-6 py-12">
                
                {/* Section 1: O Chamado */}
                <section id="chamado" className="text-center pt-8 pb-8">
                    <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-4 tracking-tight">⚡️ENCONTRÃO CLIMÁTICO RELÂMPAGO EM DIAMANTINA⚡️</h2>
                    <p className="text-4xl md:text-5xl font-black text-amber-600 mb-8 tracking-tight">PARA VIRAR O JOGO NO VALE</p>
                    <div className="text-md text-stone-600 max-w-4xl mx-auto leading-relaxed space-y-4">
                        <p>
                            Convidamos para um estratégico em busca de soluções climáticas para o Vale. Em formato imersivo para colaboração focal com objetivo definido: dar formato ao litígio climático de alto nível, de impacto sistêmico, aproveitando o 40º FESTIVALE - Festival da Cultura Popular do Vale do Jequitinhonha, uma resistência cultural exemplar que completa 40 anos ressignificando o Vale. Nos reuniremos da noite de sexta até o cortejo de abertura. Chega junto que toda colaboração será necessária. Se este convite chegou até você é porque sua participação é necessária às soluções climáticas do Vale.
                        </p>
                        <p className="font-bold text-stone-700 pt-4">
                            Entende porque:
                        </p>
                    </div>
                </section>

                {/* Section 2: A Estratégia */}
                <section id="estrategia" className="pt-0 pb-16">
                    <div className="max-w-4xl mx-auto">
                        
                        <h3 className="text-3xl font-bold mb-8 pl-4 border-l-4 border-amber-600">O TABULEIRO DO JOGO</h3>
                        <div className="space-y-6 text-stone-700 leading-relaxed mb-12">
                            <p>
                                O Vale do Jequitinhonha é uma encruzilhada definitiva: séculos de racismo ambiental e economia de exaustão encontram uma vulnerabilidade climática gravíssima, onde estão{' '}
                                <LinkHighlight href="https://climainfo.org.br/2024/02/28/cemaden-mostra-cidades-que-mais-sofreram-com-calor-extremo-em-2023/">
                                    18 das 20 cidades que mais aqueceram no país
                                </LinkHighlight>
                                . Sobre este cenário, impõe-se a corrida do neocolonialismo da transição energética, patrocinado com recursos da NDC brasileira, fazendo com que o Fundo Clima promova o agravamento da vulnerabilidade extrema, sem qualquer medida de resiliência ou adaptação.
                            </p>
                            <p>
                                Neste tabuleiro sofisticado, a <strong className="text-stone-800">Nota Técnica do Projeto LIQUIT</strong> emergiu como peça-chave, expondo as fragilidades do projeto. A{' '}
                                <LinkHighlight href="https://conflitosambientaismg.lcc.ufmg.br/noticias/nota-de-repudio-da-aba-mineradora-tenta-censurar-a-imprensa-e-impedir-a-divulgacao-de-resultados-de-pesquisa-em-19052025/">
                                    tentativa de censura da Sigma Lithium ao Observatório da Mineração
                                </LinkHighlight>
                                , seguida da reação de 25 sociedades científicas, complicou o ponto mais crítico: o desembolso de{' '}
                                <LinkHighlight href="https://agenciadenoticias.bndes.gov.br/industria/BNDES-aprova-R$-4867-milhoes-para-Sigma-Lithium-beneficiar-litio-de-forma-sustentavel/">
                                    R$ 486,7 milhões do Fundo Clima pelo BNDES
                                </LinkHighlight>
                                . Sem estes recursos, o castelo de cartas da mineradora, já abalado por disputas internas e crises financeiras, desaba.
                            </p>
                        </div>

                        <h3 className="text-3xl font-bold mb-8 pl-4 border-l-4 border-amber-600">NOSSA VIRADA NO JOGO</h3>
                        <div className="space-y-6 text-stone-700 leading-relaxed mb-12">
                            <p>
                                É neste ponto que o CLÍMAX 2025 se torna estratégico e decisivo para articular as contribuições individuais que já existem em campo, dando corpo a uma coalizão robusta para o litígio de alto nível via <strong className="text-stone-800">Ação Direta de Inconstitucionalidade (ADI) no STF</strong>. Proposta em nosso encontro de 2024, idealizada por Marielle Ramires e Ricardo Targino, a ADI foi abraçada pela Deputada Federal Célia Xakriabá para derrubar os decretos que sustentam as lavras de lítio. O CLÍMAX terá este papel estratégico para a ADI e para a conclusão das filmagens de{' '}
                                <LinkHighlight href="https://selffiction.storylab.cc/pt">
                                    AUTOFICÇÃO: Cinema como dispositivo de intervenção
                                </LinkHighlight>
                                , com entrevistas e o registro da formação desta sofisticada coalizão para o litígio histórico que vai questionar a desregulamentação ambiental e mineral do governo Bolsonaro é o alvo principal de um litígio climático de alto nível, uma Ação Direta de Inconstitucionalidade (ADI) que busca anular decretos e resoluções que afetam toda a mineração.
                            </p>
                        </div>
                        
                        <h3 className="text-3xl font-bold mb-8 pl-4 border-l-4 border-amber-600">LITÍGIO CLIMÁTICO DE ALTO NÍVEL</h3>
                        <div className="space-y-6 text-stone-700 leading-relaxed">
                            <p>
                                Essas normas, como os Decretos Federais nº 10.657/2021 e nº 10.965/2022, simplificam o licenciamento e reduzem a fiscalização, criando um ambiente que facilita a mineração com menos proteções. Em todo o mundo o litígio climático tem sido utilizado nas altas instâncias do Poder Judiciário para obter impacto imediato e conquistas sistêmicas.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3: A Coalizão */}
                <section id="coalizao" className="py-16 bg-stone-100 -mx-6 px-6">
                    <div className="container mx-auto">
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-3xl font-bold mb-4 pl-4 border-l-4 border-amber-600">COALIZÃO VIDA, VERDE, VERSO E VIOLA, VIVOS NO VALE</h3>
                            <div className="text-stone-600 mb-10 pl-4 space-y-4 leading-relaxed">
                                <p>A Coalizão Vida, Verde, Verso e Viola, Vivos no Vale é uma articulação multidisciplinar que emerge do próprio coração do Vale do Jequitinhonha, defendendo a riqueza cultural e socioambiental da região contra os impactos devastadores da mineração. Nosso nome ecoa o lema <strong className="text-stone-700">"Vale, Vida, Verde, Verso e Viola"</strong>, uma consigna do movimento cultural que celebra a capacidade de ressignificação do território pelos seus próprios habitantes e artistas.</p>
                                <p>Historicamente estigmatizado como "vale da miséria" ou "vale da fome", o Jequitinhonha foi transformado em Vale da Vida, do Verde, do Verso e da Viola pela força de sua cultura. Contudo, a mineração e o "Mercador de Minas Gerais", após mais de três séculos de exploração que arruinaram o Vale socioambientalmente, agora tentam rebatizar a região como "Vale do Lítio". Nossa coalizão se levanta para lembrar que a mineração empobrece e destrói, enquanto a cultura enriquece e ressignifica. Viva a cultura popular do Vale do Jequitinhonha, que é a base de todas as resistências!</p>
                                <p>Para representar a sociedade do Vale como <i>amicus curiae</i> e para que arranjos de futuro possam se fortalecer e surgir organicamente na região, a coalizão será articulada a partir dos seguintes eixos:</p>
                            </div>
                             <div className="space-y-6">
                                {STRATEGIC_AXES_DETAILS.map((axis) => (
                                    <div key={axis.title} className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                                        <p className="leading-relaxed text-stone-700">
                                            <strong className="font-black uppercase block mb-2 text-amber-600">{axis.title}</strong> 
                                            {axis.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Section 4: Dossiê Estratégico */}
                <section id="dossie" className="py-16">
                     <div className="max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold mb-8 pl-4 border-l-4 border-amber-600">Dossiê: Material de Preparação</h3>
                        <p className="text-stone-600 mb-10 pl-4">Para otimizar nosso trabalho em Diamantina, disponibilizamos aqui os documentos centrais que baseiam nossa estratégia. Sua análise prévia é fundamental para a profundidade de nossas discussões.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {DOSSIER_ITEMS.map((item) => (
                                <DossierCard key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 5: Logística */}
                <section id="logistica" className="py-16 bg-stone-800 text-stone-200 rounded-lg -mx-6 px-6">
                    <div className="max-w-4xl mx-auto px-6">
                        <h3 className="text-3xl font-bold mb-8 pl-4 border-l-4 border-amber-500">Logística e Informações Práticas</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-xl text-amber-400">Local, Hospedagem e Alimentação</h4>
                                <p className="text-stone-300 mt-2">O encontro será realizado na <a href="https://www.airbnb.com.br/rooms/1345191675520242285?source_impression_id=p3_1752489039_P3bYA8Mu1srugK5Q" target="_blank" rel="noopener noreferrer" className="text-amber-500 font-medium underline decoration-dotted underline-offset-4 hover:text-amber-400"><strong>Casa Verde, em Diamantina/MG</strong></a>. Para garantir a imersão e a integração do grupo, a organização assegura a hospedagem e todas as refeições no próprio local para todos os convidados durante os dias do evento.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-amber-400">Apoio ao Transporte</h4>
                                <p className="text-stone-300 mt-2">Sabemos que os desafios são muitos e que nosso financiamento é colaborativo. Pedimos que qualquer necessidade de apoio com despesas de transporte seja comunicada no formulário de confirmação. Faremos o possível para, através da coletivização de soluções, viabilizar a sua chegada.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-amber-400">Contexto Cultural</h4>
                                <p className="text-stone-300 mt-2">Nosso encontro se encerrará na abertura do <strong>40º FESTIVALE</strong>, o que nos permitirá conectar nossa articulação estratégica à celebração de quatro décadas de heróica resistência cultural do Vale.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 7: RSVP */}
                <section id="rsvp" className="py-20 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold mb-4 text-stone-900">Confirme Sua Presença Estratégica</h3>
                        <p className="text-stone-600 mb-8">Sua participação é vital. Por favor, acesse o formulário para confirmar sua presença e nos ajudar com a organização logística. É rápido e fundamental para o sucesso do nosso encontro.</p>
                        <div className="mt-10">
                            <button onClick={() => setRsvpModalOpen(true)} className="w-full md:w-auto inline-block bg-amber-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-amber-700 transition-shadow shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                ➜ Confirmar Presença (Formulário Seguro)
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <Modal isOpen={isRsvpModalOpen} onClose={() => setRsvpModalOpen(false)}>
                <RSVPForm />
            </Modal>
        </>
    );
};

export default App;