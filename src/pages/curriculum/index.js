import { useEffect } from "react";
import { useRouter } from "next/router";

const Curriculum = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/learningcenter');
    }, [router]);

    return (
        <></>
    )
}

export default Curriculum;