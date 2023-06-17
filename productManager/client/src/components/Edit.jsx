import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [prod, setProd] = useState({
        title: "",
        price: 0,
        description: "",
    });

    const [errors, setErrors] = useState({});
    const changeHandler = (e) => {
        setProd({ ...prod, [e.target.name]: e.target.value });
    };
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
    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/updateProdById/${id}`, prod)
            .then((resp) => {
                // console.log(resp, "message from CreateForm > submitHandler");
                console.log(resp.data.title, "was add as Title");
                console.log(resp.data.price, "was add for Price");
                console.log(resp.data.description, "was add as description");
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    };
    return (
        <div>
            <h2>Edit Product Details</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title : </label>
                    <input
                        type="text"
                        name="title"
                        onChange={changeHandler}
                        value={prod.title}
                    />
                    {errors.title ? (
                        <p className="text-danger">{errors.title.message}</p>
                    ) : null}
                </div>
                <div>
                    <label>Price : </label>
                    <input
                        type="number"
                        name="price"
                        onChange={changeHandler}
                        value={prod.price}
                    />
                    {errors.price ? (
                        <p className="text-danger">{errors.price.message}</p>
                    ) : null}
                </div>
                <div>
                    <label>Description : </label>
                    <textarea
                        type="text"
                        name="description"
                        onChange={changeHandler}
                        value={prod.description}
                    />
                    {errors.description ? (
                        <p className="text-danger">
                            {errors.description.message}
                        </p>
                    ) : null}
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Edit;
