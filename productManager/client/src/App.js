import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Display from "./components/Display";
import CreateForm from "./components/CreateForm";
import DisplayOne from "./components/DisplayOne";
import Edit from "./components/Edit";

export default function App() {
    const [prodList, setProdList] = useState([]);

    return (
        <div>
            <BrowserRouter>
                <div>
                    <h1>Product Manager</h1>
                    <Link to="/addNewProd">Add New Product</Link>
                    <br />
                    <Link to="/">Home</Link>
                </div>
                <Routes>
                    <Route path="/" element={<Display prodList={prodList} setProdList={setProdList}/>}/>
                    <Route path="/addNewProd" element={<CreateForm />} />
                    <Route path="/findProdById/:id" element={<DisplayOne/>}/>
                    <Route path="/edit/:id" element={<Edit/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
