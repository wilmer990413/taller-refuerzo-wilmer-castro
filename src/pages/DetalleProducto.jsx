import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsById } from '../services/productos';

const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const datos = await getProductsById(id);
                setProducto(datos);
            } catch (error) {
                console.error('Error al cargar datos:', error);
            }
        };
        cargarDatos();
    }, [id]);
    if (!producto) {
        return <p>Cargando...</p>; 
    }
    return (
        <div>
            <h2>Detalle del Producto</h2>
            <p>ID: {producto.id}</p>
            <p>Nombre: {producto.title}</p>
            <p>Descripción: {producto.description}</p>
            <p>Precio: ${producto.price}</p>
            <p>Porcentaje de descuento: {producto.discountPercentage} %</p>
            <p>Estrellas: {producto.rating}</p>
            <p>Stock: {producto.stock}</p>
            <p>Marca: {producto.brand}</p>
            <p>Categoria: {producto.category}</p>
            <p>Imagen:</p>
            <img src={producto.thumbnail} alt="product" />
        </div>
    );
};

export default DetalleProducto;