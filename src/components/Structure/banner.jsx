export default function Main() {
    return (
        <div className="">
            <main className="flex-1">
                <section className="w-full bg-[#F5F5F5] bg-cover bg-center py-24 md:py-32">
                    <div className="container mx-auto px-12 md:px-6">
                        <div className="max-w-2xl space-y-4">
                            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
                                Encontre o Carro dos Seus Sonhos
                            </h1>
                            <p className="text-lg text-primary-foreground">
                                Explore nossa ampla seleção de veículos de alta qualidade e encontre o carro perfeito para você.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-md bg-[--orange] px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                prefetch={false}
                            >
                                Ver Inventário
                            </a>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold">Sobre Nossa Concessionária</h2>
                                <p className="text-muted-foreground">
                                    Na Car Dealer, estamos apaixonados por oferecer aos nossos clientes a melhor experiência possível na compra de carros.
                                    Com mais de 20 anos de experiência no setor, construímos uma reputação de honestidade, integridade e serviço ao cliente excepcional.
                                </p>
                                <p className="text-muted-foreground">
                                    Nossa missão é ajudá-lo a encontrar o veículo perfeito que atenda às suas necessidades e orçamento.
                                    Acreditamos na transparência e buscamos construir relacionamentos duradouros com nossos clientes.
                                    Visite-nos hoje mesmo e deixe-nos mostrar por que somos o destino principal para todas as suas necessidades automotivas.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="w-full bg-[#f4f4f5] py-6 px-4 md:px-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-muted-foreground">Car Dealer</span>
                    </div>
                    <nav className="flex items-center gap-4 mt-4 md:mt-0">
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:underline" prefetch={false}>
                            Início
                        </a>
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:underline" prefetch={false}>
                            Inventário
                        </a>
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:underline" prefetch={false}>
                            Sobre
                        </a>
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:underline" prefetch={false}>
                            Contato
                        </a>
                    </nav>
                    <p className="text-sm font-medium text-muted-foreground mt-4 md:mt-0">
                        &copy; 2024 Car Dealer. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    )
}
