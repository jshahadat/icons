import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icons/Icon';
import './Category.css'

const Category = ({ cate }) => {
    const { name } = cate

    const [icons, setIcons] = useState([])

    useEffect(() => {
        fetch(`hhttps://icons-server.vercel.app//icons?ame=${name}`, {

        })
            .then(res => res.json())
            .then(data => setIcons(data))
    }, [name])

    return (

        <div>
            <Link to={name}>

                <div className="card w-full mb-10 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Icon Name: {name}</h2>

                    </div>
                </div>
            </Link>


            <div>
                {
                    icons.map(icon => <Icon
                        icon={icon}
                    ></Icon>)
                }
            </div>
        </div>

    );
};

export default Category;