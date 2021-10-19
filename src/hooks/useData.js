import { useEffect, useState } from "react";


const useData = () => {
    const [doctors, setDoctors] = useState([]);

    const dataLocation = './docData.json';

    useEffect(() => {
        fetch(dataLocation)
            .then(res => res.json())
            .then(data => setDoctors(data));

    }, [])

    return { doctors };
}

export default useData;