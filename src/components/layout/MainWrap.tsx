import { LayoutProps } from "@/types/interface";

export default function MainWrap({children}:LayoutProps) {
    return (
        <main className="my-[100px] overflow-hidden">
            {children}
        </main>
    )
}