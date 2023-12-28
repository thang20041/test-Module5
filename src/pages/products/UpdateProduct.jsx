import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Update, updateForm} from "../../redux/service/productService.jsx";
import {Field, Form, Formik} from "formik";

export default function UpdateProduct() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const product = useSelector(({products}) => {
        console.log(products.productEdit)
        return products.productEdit
    })
    const {id} = useParams();
    useEffect(() => {
        dispatch(updateForm(id))
    }, []);

    const Edit = (value)=>{
        dispatch(Update(value)).then(()=>{
            navigate("/products/home")
        })

    }
    return (
        <>
            <Formik initialValues={product} onSubmit={Edit}
                    enableReinitialize={true}>
                <Form>
                    <Field name={"title"}></Field>
                    <Field name={"description"}></Field>

                    <Field name={"price"}></Field>

                    <button type={"submit"} >Sửa</button>
                </Form>
            </Formik>
        </>

    )

}