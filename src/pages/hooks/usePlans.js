import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const usePlans = () => {
    const [plans, setPlans] = useState([])
    const getPlans = () => {
        axios.get("https://blooming-scrubland-16632.herokuapp.com/plans")
            .then(res => {
                const myPlans = res.data;
                setPlans(myPlans)
                // console.log(myPlans)
            })
    }
    useEffect(() => getPlans(), [])
    return [plans, setPlans]
};

export default usePlans;