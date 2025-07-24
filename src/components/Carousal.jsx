import { useEffect, useState } from "react"

const Carousal = ({ children }) => {
    const [active, setActive] = useState(0);
    const limit = children.length;

    useEffect(() => {
        const interval = setInterval(() => {
            const newInd = (active + 1) % limit;
            setActive(newInd);
        }, 5000);

        return () => {
            clearInterval(interval);
        }
    }, [active, setActive]);

    return (
        <div className="relative w-full mt-12 overflow-hidden">

            <div className="group flex p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] flex-row overflow-x-scroll">
                {
                    children[children.length - 1]
                }
                {
                    children
                }
                {
                    children[0]
                }
            </div>
            <div className="flex justify-center mt-6 gap-3">
                {
                    children.map((_, index) => {
                        return (
                            <button className={`p-2 cursor-pointer w-4 h-4 rounded-full inline-block ${index == active ? 'bg-lavender' : 'bg-white'}`}>
                            </button>
                        )
                    })
                }
            </div>
            <div className="hidden md:block absolute inset-y-0 left-0 w-1/5 pointer-events-none bg-gradient-to-r from-primary"></div>
            <div className="hidden md:block absolute inset-y-0 right-0 w-1/5 pointer-events-none bg-gradient-to-l from-primary"></div>
        </div>
    )
}


export default Carousal;