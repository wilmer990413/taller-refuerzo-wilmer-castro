import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/productos';
import Card from '../../components/card/Card';
import './MisProductos.css';

function MisProductos() {
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState('');
    const [ratingSeleccionado, setRatingSeleccionado] = useState('');
    const handleCategoriaChange = (event) => {
        const categoriasSeleccionadasTemp = Array.from(event.target.selectedOptions, option => option.value)[0];
        setCategoriasSeleccionadas(categoriasSeleccionadasTemp);
    };
    const handleRatingChange = (event) => {
        const ratingSeleccionadoTemp = event.target.value;
        setRatingSeleccionado(ratingSeleccionadoTemp);
    };
    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const datos = await getProducts();
                setProductos(datos);
                setProductosFiltrados(datos);
            } catch (error) {
                console.error('Error al cargar datos:', error);
            }
        };
        cargarDatos();
    }, []);
    useEffect(() => {
        const filtrarProductos = () => {
            let productosFiltradosTemp = [...productos];
            if (categoriasSeleccionadas === 'all') {
                productosFiltradosTemp = [...productos];
            }else {
                productosFiltradosTemp = productosFiltradosTemp.filter(producto =>
                    categoriasSeleccionadas === producto.category
                );
            }
            if (ratingSeleccionado !== '') {
                if(parseInt(ratingSeleccionado-1) === 0 ){
                    productosFiltradosTemp = productosFiltradosTemp.filter(producto =>
                        producto.rating >= parseInt(ratingSeleccionado-1) && producto.rating <= parseInt(ratingSeleccionado)
                    );
                }else{
                    productosFiltradosTemp = productosFiltradosTemp.filter(producto =>
                        producto.rating > parseInt(ratingSeleccionado-1) && producto.rating <= parseInt(ratingSeleccionado)
                    );
                }
                
            }
            setProductosFiltrados(productosFiltradosTemp);
        };
        filtrarProductos();
    },[categoriasSeleccionadas, ratingSeleccionado]);
    return (
        <div>
            <h2>Mis Productos</h2>
            <div>
                <label htmlFor="categorias">Categorías:</label>
                <select id="categorias" multiple onChange={handleCategoriaChange}>
                    <option value="smartphones">Smartphones</option>
                    <option value="laptops">Laptops</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="skincare">Skincare</option>
                    <option value="groceries">Groceries</option>
                    <option value="home-decoration">Home Decoration</option>
                    <option value="all">Todas</option>
                </select>
            </div>
            <div>
                <label htmlFor="rating">Rating:</label>
                <select id="rating" onChange={handleRatingChange}>
                    <option value="">Todos</option>
                    <option value="1">Menor o igual 1 estrella</option>
                    <option value="2">Mayor a 1 estrella y menor o igual a 2 estrellas</option>
                    <option value="3">Mayor a 2 estrellas y menor o igual a 3 estrellas</option>
                    <option value="4">Mayor a 3 estrellas y menor o igual a 4 estrellas</option>
                    <option value="5">Mayor a 4 estrellas</option>
                </select>
            </div>
            <div className='container'>
                {!productosFiltrados? <p>Cargando...</p> : productosFiltrados.map((producto) => (
                    <Card key={producto.id} product={producto}/>
                ))}
            </div>
        </div>
    );
}

export default MisProductos;