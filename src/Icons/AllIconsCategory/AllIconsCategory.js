import React, { useEffect, useState } from 'react';
import IconsCategories from '../Icons/IconsCategories';

const AllIconsCategory = () => {

    const [categorie, setCategorie] = useState([]);


    useEffect(() => {
        fetch('hhttps://icons-server.vercel.app/categorie')
            .then(res => res.json())
            .then(data => setCategorie(data))
    }, []);
    return (
        <div>
            {
                categorie?.map(category => <IconsCategories
                    key={category._id}
                    category={category}
                ></IconsCategories>)
            }

        </div>
    );
};

export default AllIconsCategory;