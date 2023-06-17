import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateForm = (props) => {
    const navigate = useNavigate();
    const [prods, setProds] = useState({
        title: "",
        price: 0,
        description: "",
    });
    const [errors, setErrors] = useState({});
    const changeHandler = (e) => {
        setProds({ ...prods, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/createProd", prods)
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
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title : </label>
                    <input
                        type="text"
                        name="title"
                        onChange={changeHandler}
                        value={prods.title}
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
                        value={prods.price}
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
                        value={prods.description}
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

export default CreateForm;
