import Cabecalho from "./Cabecalho"
import LinkButton from "./LinkButton"
import Rodape from "./Rodape"
import saveMoney from '/save-money.gif'
import moneybag from '/money-bag.gif'
import './Home.css'
function Home() {
    return (
        <>
            <Cabecalho />
            <div className='meio'>
                <section className="primeira1">
                    <section className="welcome-section">
                        <h1 className="title">Bem vindo ao COSTS.</h1>
                        <h3 className="subtitle">Gerencie seus projetos e investimentos agora!</h3>
                        <div className="tarefas">
                            <div className="dentroDT">
                                <div className="circulo"><img src="/public/pexels1.jpg" alt="" /></div> <div className="oqueCon"><h2 className="peqfrase">investir em crypto moedas...</h2></div>
                            </div>
                            <div className="dentroDT">
                                <div className="circulo"><img src="/public/pexels2.jpg" alt="" /></div> <div className="oqueCon"><h2 className="peqfrase">salário dos funcionários...</h2></div>
                            </div>
                            <div className="dentroDT">
                                <div className="circulo"><img src="/public/pexels3.jpg" alt="" /></div> <div className="oqueCon"><h2 className="peqfrase">setor imobilístico...</h2></div>
                            </div>
                            <div className="dentroDT">
                                <div className="circulo"><img src="/public/pexels4.jpg" alt="" /></div> <div className="oqueCon"><h2 className="peqfrase">um presente especial...</h2></div>
                            </div>
                        </div>
                        <LinkButton to="/novo-projeto" text="Criar Projeto" />

                    </section>
                    <section className='ladoD'>
                        <div className="seuOrg">
                            Seu organizador de finanças <span>pessoal</span>
                        </div>

                        <div>
                            <img src={saveMoney} alt="" className="money" />
                            <img src={moneybag} alt="" className="bag" />
                        </div>
                    </section>
                </section>
                <section className="utilidades">
                    <div className="primeiraPart">
                        <div className="filtragem">
                            <h1>Filtre projetos.</h1>
                            <img src="/public/quadrado.png" alt="" />
                            <img src="/public/quadradoOval.png" alt="" />
                            <img src="/public/quadradoTriang.png" alt="" />
                        </div>
                        <div className="receita">
                            <h1>Receita para o sucesso.</h1>
                            <img src="/public/shape-heart.png" alt="" />
                        </div>
                    </div>
                    <div className="outraParte">
                        <div className="checklist">
                            <img src="/public/calendar.gif" alt="" />
                            <h1>Mantenha-se em dia, não perca o foco.</h1>
                        </div>
                        <div className="porcentanges">
                            <img src="/public/grafi2.png" alt="" />
                            <h1>Acompanhe seu orçamento.</h1>
                        </div>
                    </div>
                </section>
                <section className="FAQs">
                    <h2>Perguntas Frequentes</h2>
                    <div className="faq-container">
                        <div className="faq-item">
                            <div className="envelopar">
                                <h3>Como criar um novo projeto?</h3>
                            </div>
                            <p>Para criar um novo projeto, clique no botão "Criar Projeto" na página inicial ou no menu de navegação. Preencha as informações necessárias como nome, orçamento e categoria do projeto.</p>
                        </div>

                        <div className="faq-item">
                            <div className="envelopar">
                                <h3>Como gerenciar meu orçamento?</h3>
                            </div>
                            <p>O COSTS permite que você acompanhe seus gastos em tempo real. Você pode adicionar serviços e custos a cada projeto, e o sistema calculará automaticamente quanto do seu orçamento já foi utilizado.</p>
                        </div>

                        <div className="faq-item">
                            <div className="envelopar">
                                <h3>Posso editar um projeto depois de criado?</h3>
                            </div>
                            <p>Sim! Você pode editar as informações do projeto, adicionar ou remover serviços e atualizar o orçamento a qualquer momento através da página de detalhes do projeto.</p>
                        </div>

                        <div className="faq-item">
                            <div className="envelopar">
                                <h3>Como filtrar meus projetos?</h3>
                            </div>
                            <p>Na página de projetos, você encontrará opções de filtro que permitem organizar seus projetos por categoria, status ou valor do orçamento.</p>
                        </div>

                        <div className="faq-item">
                            <div className="envelopar">
                                <h3>O COSTS é gratuito?</h3>
                            </div>
                            <p>Sim, o COSTS é uma ferramenta gratuita para ajudar você a gerenciar seus projetos e finanças pessoais de forma eficiente.</p>
                        </div>
                    </div>
                </section>

            </div>
            <Rodape />
        </>
    )
}
export default Home