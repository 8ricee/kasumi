import { GlowingEffectDemo } from "@/components/demo";
import { NavBarMain } from "@/components/navbar";
import { SparklesPreview } from "@/components/preview";
import { TimelineMain } from "@/components/timeline";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
    return (
        <>
            <NavBarMain />
            <div className="grid sm:pt-20 xl:grid-cols-2 xl:grid-rows-1 grid-cols-1 items-center justify-between xl:px-40 xl:pt-40">
                <SparklesPreview />
                <GlowingEffectDemo />
            </div>
            <TimelineMain />
            <BackgroundBeams />
        </>
    );
}
