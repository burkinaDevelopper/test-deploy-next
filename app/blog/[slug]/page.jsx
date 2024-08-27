'use client';
import { useParams, useRouter } from "next/navigation";


const page = () => {
    const router = useRouter();
    const params = useParams();
    console.log(router);
    console.log(params);

    return (
        <div>parama</div>
    )
}

export default page