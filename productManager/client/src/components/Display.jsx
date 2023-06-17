import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import axios from "axios";

const Display = (props) => {
    const { prodList, setProdList } = props;
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/allProducts")
            .then((resp) => {
                // console.log(resp, "from display all useEffect");
                console.log(resp);
                setProdList(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <div>
                {prodList.map((eaProd, i) => (
                    <div key={i}>
                        <p>Title : {eaProd.title}</p>
                        <p>Price : {eaProd.price}</p>
                        <p>Description : {eaProd.description}</p>
                        {/* link paths need to match with paths in App.js */}
                        <Link className="btn btn-success" to={`/findProdById/${eaProd._id}`}>View</Link>
                        <Link className="btn btn-warning" to={`/edit/${eaProd._id}`}>Edit</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Display;
