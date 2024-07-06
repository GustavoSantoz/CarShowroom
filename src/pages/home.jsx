export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <h1 className="text-white text-4xl font-bold mb-5">Home</h1>
            <button className="bg-white text-black rounded-lg px-4 py-2 font-bold" onClick={() => window.location.href = '/login'}>Login</button>
        </div>
    )
}