import { useEffect } from "react";
import { useRouter } from "next/router";

const Curriculum = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/learningcenter');
    }, []);

    return (
        <></>
    )
}

export default Curriculum;