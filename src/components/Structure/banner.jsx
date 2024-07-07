export default function Main() {
    return (
        <div>
            <main className="flex-1">
                <section className="w-full bg-[#F5F5F5] bg-cover bg-center py-24 md:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-2xl space-y-4">
                            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
                                Find Your Dream Car
                            </h1>
                            <p className="text-lg text-primary-foreground">
                                Explore our wide selection of high-quality vehicles and find the perfect car for you.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-md bg-[--orange] px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                prefetch={false}
                            >
                                Browse Inventory
                            </a>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold">About Our Dealership</h2>
                                <p className="text-muted-foreground">
                                    At Car Dealer, we are passionate about providing our customers with the best possible car-buying
                                    experience. With over 20 years of experience in the industry, we have built a reputation for honesty,
                                    integrity, and exceptional customer service.
                                </p>
                                <p className="text-muted-foreground">
                                    Our mission is to help you find the perfect vehicle that fits your needs and budget. We believe in
                                    transparency, and we strive to build long-lasting relationships with our customers. Visit us today and
                                    let us show you why we are the premier destination for all your automotive needs.
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
                            Home
                        </a>
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:underline" prefetch={false}>
                            Inventory
                        </a>
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:underline" prefetch={false}>
                            About
                        </a>
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:underline" prefetch={false}>
                            Contact
                        </a>
                    </nav>
                    <p className="text-sm font-medium text-muted-foreground mt-4 md:mt-0">
                        &copy; 2024 Car Dealer. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}