import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DisplayOne = (props) => {
    const [prod, setProd] = useState({});
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/findProdById/${id}`)
            .then((resp) => {
                console.log(resp.data);
                setProd(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <p>
                <span style={{ fontWeight: "bold" }}>Title :</span>
                <span> {prod.title}</span>
            </p>
            <p>
                <span style={{ fontWeight: "bold" }}>Price :</span>
                <span> {prod.price}</span>
            </p>
            <p>
                <span style={{ fontWeight: "bold" }}>Description :</span>
                <span> {prod.description}</span>
            </p>
        </div>
    );
};

export default DisplayOne;
