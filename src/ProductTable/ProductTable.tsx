import { useEffect, useState } from "react";
import { ProductService } from "../services/ProductService";
import { Product } from "../types/Product";
import { Table } from "react-bootstrap";
import Loader from "../components/Loader/Loader";

const ProductTable = () => {
    //Variable que va a tener los datos recibidos por la API
    const [products, setProducts] = useState<Product[]>([]);

    //Componente loader mientras cargan los recursos de la api
    const [isLoading, setIsLoading] = useState(true);

    //Este hook se va a ejecutar cada vez que se renderice el componente
    useEffect( () => {
        //Llamamos a la funcion para obtener todos los productos declarados en el product service
        const fetchProducts = async () => {
            const products = await ProductService.getProducts();
            setProducts(products);
            setIsLoading(false);
        };

        fetchProducts();
    }, []);

    //Log modificado para mostrar datos mas legibles
    //Stringify es convertir un objeto Js en una cadena JSON
    console.log(JSON.stringify(products, null, 2));



    return(
        <>
            {isLoading ? <Loader/> : (
                <Table hover>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Precio</th>
                            <th>Descripcion</th>
                            <th>Categoria</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(
                            product => (
                                <tr key ={product.id}>
                                    <td>{product.title}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>{product.category}</td>
                                    <td><img src={product.image} alt={product.description} 
                                    style={{width: '50px'}}/></td>
                                </tr>
                            )
                        )}
                    </tbody>
                </Table>
            )
            }
        </>
    )
}

export default ProductTable