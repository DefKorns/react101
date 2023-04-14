import { useEffect, useState } from "react"

export function WindowResize() {

    const [size, setSize] = useState(getSize());

    function getSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        function handleResize() {
            setSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        console.log('resize effect');

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div>
            <p>Width: {size.width} Height: {size.height}</p>
        </div>
    )
}