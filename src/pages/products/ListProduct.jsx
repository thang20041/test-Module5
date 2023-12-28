import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Delete, getAll } from "../../redux/service/productService.jsx";

export default function ListProduct() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
     const products = useSelector(({ products }) => products.list);

    useEffect(() => {
        setLoading(true);
        dispatch(getAll())
            .then(() => setLoading(false))
            .catch((error) => {
                console.error("Error loading products:", error);
                setLoading(false);
            });
    }, [dispatch]);

    const remove = (id) => {
        const shouldDelete = window.confirm("Bạn có chắc chắn muốn xóa không?");
        if (shouldDelete) {
            setLoading(true);
            dispatch(Delete(id))
                .then(() => setLoading(false))
                .catch((error) => {
                    console.error("Error deleting product:", error);
                    setLoading(false);
                });
        }
    };

    return (
        <>
            <h1>List Product</h1>

            {loading && <p>Loading...</p>}
            <table border={1}>
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Price</td>
                    <td colSpan={2}>Action</td>
                </tr>
                </thead>
                <tbody>
                {products.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>
                            <Link to={`/products/${item.id}`}>
                                <button>Edit</button>
                            </Link>
                        </td>
                        <td>
                            <button onClick={() => remove(item.id)} disabled={loading}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}
