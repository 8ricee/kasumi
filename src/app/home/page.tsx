import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Connect } from "@/components/layout/home/connect"
import { Preview } from "@/components/layout/home/preview"
import { Frame } from "@/components/layout/home/frames"

function Home() {
    return (
        <div className="block">
            <Header />
            <div className="py-20 grid grid-cols-1 gap-20">
                <Connect />
                <Preview />
                <div className="pb-4">
                    <Frame />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home