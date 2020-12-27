import React, { useState, useMemo } from 'react';

import camera from '../../assets/camera.svg';

import './styles.css';

    export default function New() {

        const [thumbnail, setThumbnail] = useState(null);

        const [company, setCompany] = useState('');

        const [techs, setTechs] = useState('');

        const [price, setPrice] = useState('');

        const preview = useMemo(

            () => {

                return thumbnail ? URL.createObjectURL(thumbnail) : null;

            }, [ thumbnail ]

        );

            function handleSubmit() {



            }

                return (

                    <form onSubmit={ handleSubmit }>

                        <label id="thumbnail" style={ { backgroundImage: `url( ${ preview } )` } } className={ thumbnail ? 'has-thumbnail' : '' }>

                            <input type="file" onChange={ event => setThumbnail(event.target.files[0]) }/>

                                <img src={ camera } alt="Select Spot Image"/>

                        </label>

                        <label htmlFor="company"> EMPRESA <span> * </span> </label>

                            <input id="company" placeholder="O nome completo da sua empresa" value={ company } onChange={ event => setCompany(event.target.value) }/>

                                <label htmlFor="techs"> TECNOLOGIAS <span> * </span> <span> (separadas por vírgula) </span> </label>

                                <input id="techs" placeholder="Tecnologias utilizadas pela sua empresa" value={ techs } onChange={ event => setTechs(event.target.value) }/>

                                    <label htmlFor="techs"> VALOR DA DIÁRIA <span> * </span> <span> (em branco para gratuita) </span> </label>

                                    <input id="price" placeholder="Valor desejado para a diária" value={ price } onChange={ event => setPrice(event.target.value) }/>

                                        <button type="submit" className="btn"> Cadastrar Spot </button>

                    </form>

                )

    }