import './PersonajesDetallesPage.scss'
import axios from "axios";
import {  useContext, useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Footer from '../../Components/Footer/Footer';
import { MyContext } from '../../context/MyContext';
import Navbar from '../../Components/Navbar';

export default function PersonajesDetallesPage(){
    const {t} = useContext(MyContext)
    const [Personaje, PonerPersonajes] = useState([]);
    const [Alianzas, PonerAlianzas] = useState([])
    const [Apariciones, PonerApariciones] = useState([]);
    const [Descendientes, PonerDescendientes] = useState([]);
    const [Titulos, PonerTitulos] = useState([]);
    const [casa, Ponercasa] = useState([]);
    const { name } = useParams();
    
    useEffect(() => {
        
        const getData = async () => {
            const { data } = await axios.get(
                `https://api.got.show/api/show/characters/${name}`
            );
            
            console.log(data)
            console.log(data.allegiances)
            console.log(data.appearances)
            console.log(data.siblings)
            console.log(data.titles)
            console.log(data.house)
            PonerPersonajes(data);
            PonerAlianzas(data.allegiances);
            PonerApariciones(data.appearances);
            PonerDescendientes(data.siblings);
            PonerTitulos(data.titles);
            Ponercasa(data.house);
            
            
        }
        getData();console.log(Alianzas)
        
    }, [])


    
    return(
        <div className='Personaje'>
           <div className='Header-prueba'>
           <Link className='Personaje-img' to={`/personajes`}>
                <div className='VolverAtras'>
                    
                </div></Link>
                <div className='Header-prueba2'>
                    <Link className='Personaje-img' to={`/`}>
                        <div className='VolverInicio'></div>
                    </Link>
                <Navbar></Navbar>
                </div>
            </div>
           <main>
                <div className='Personaje-1'>
                    <div className='Personaje-img'><img className='Personaje-img-img' src={Personaje.image} alt="" /></div>
                    <div className='Personaje-name'><h1 className='Personaje-name-h1'>{Personaje.name}</h1></div>
                </div>
                <div className='Personaje-2'>
                    <div className='Personaje-casa'>
                        <div className='Personaje-Casa-titulo'><h1>{t('detail_p1')}</h1></div>
                        
                            
                                <div className='Personaje-Casa-img' >
                                {Personaje?.house === "House Stark" ? <img className='Personaje-Casa-img-img' src="https://toppng.com/uploads/preview/house-stark-jon-sigil-game-of-thrones-stark-logo-115628801416r51xwlyzi.png" alt=""></img>
                                :Personaje?.house === "House Karstark" ? <img className='Personaje-Casa-img-img' src="https://i.pinimg.com/originals/e1/2d/dc/e12ddc4e47bdad0097eb1377a8e25d33.png" alt=""></img> 
                                :Personaje?.house === "House Cassel" ? <img className='Personaje-Casa-img-img' src="http://awoiaf.westeros.org/images/thumb/c/c3/House_Cassel.PNG/205px-House_Cassel.PNG" alt=""></img>
                                :Personaje?.house === "House Greyjoy" ? <img className='Personaje-Casa-img-img' src="https://64.media.tumblr.com/tumblr_m52zo4sxE11qhhjs2o1_1280.png" alt=""></img> 
                                :Personaje?.house === "House Bolton" ? <img className='Personaje-Casa-img-img' src="https://upload.wikimedia.org/wikipedia/commons/b/b4/House-Bolton-Main-Shield.png" alt=""></img>
                                :Personaje?.house === "House Cerwyn" ? <img className='Personaje-Casa-img-img' src="https://awoiaf.westeros.org/images/thumb/2/2c/House_Cerwyn.svg/1200px-House_Cerwyn.svg.png" alt=""></img>
                                :Personaje?.house === "House Reed" ? <img className='Personaje-Casa-img-img' src="https://www.symbols.com/images/symbol/2823_house-reed.png" alt=""></img>
                                :Personaje?.house === "House Lannister" ? <img className='Personaje-Casa-img-img' src="https://awoiaf.westeros.org/images/thumb/1/1e/House_Targaryen.svg/1200px-House_Targaryen.svg.png" alt=""></img>
                                :Personaje?.house === "House Manderly" ? <img className='Personaje-Casa-img-img' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9108eafe-35a1-414d-b42f-a3512c783765/d5v4pq2-3d30314e-cbd9-40f2-bb16-d01baabe139e.png/v1/fill/w_480,h_576,strp/manderly_sigil_by_varvara64_d5v4pq2-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvOTEwOGVhZmUtMzVhMS00MTRkLWI0MmYtYTM1MTJjNzgzNzY1XC9kNXY0cHEyLTNkMzAzMTRlLWNiZDktNDBmMi1iYjE2LWQwMWJhYWJlMTM5ZS5wbmciLCJ3aWR0aCI6Ijw9NDgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.aW_oWNgAtZesZrPPXJmmDt_kp8dthJbR3g6gc-jtOtc" alt=""></img>
                                :Personaje?.house === "House Glover" ? <img className='Personaje-Casa-img-img' src="http://gobmush.wdfiles.com/local--files/house-arms/Arms_House-Glover.png" alt=""></img>
                                :Personaje?.house === "House Baratheon" ? <img className='Personaje-Casa-img-img' src="https://throneslife.files.wordpress.com/2013/06/baratheon-sigil.png" alt=""></img>
                                :Personaje?.house === "House Tyrell" ? <img className='Personaje-Casa-img-img' src="http://gobmush.wdfiles.com/local--files/house-arms/Arms_House-Tyrell.png" alt=""></img>
                                :
                                <img src={casa.logoURL} alt=""/> }                   
                                </div>
          
       
                    </div>
                    <div className='Personaje-alianzas'>
                        <div className='Personaje-alianzas-titulo'><h1>{t('detail_p2')}</h1></div>
                        <div className='Personaje-alianzas-desc'>
                        {Alianzas.map((alianza, index)=>
                            <p className='Personaje-Listado' key={index}>
                                {alianza}
                            </p>
                            )}
                
                        </div>
                    </div>
                    <div className='Personaje-apariciones'>
                        <div className='Personaje-apariciones-titulo'><h1>{t('detail_p3')}</h1></div><SimpleBarReact style={{maxHeight:200}}>
                        <div className='Personaje-apariciones-desc'>
                        {Apariciones.map((aparicion, index)=>
                            <p className='Personaje-Listado' key={index}>
                                {aparicion}
                            </p>
                            )}
                        </div></SimpleBarReact>
                    </div>
                    <div className='Personaje-padre'>
                        <div className='Personaje-padre-titulo'><h1>{t('detail_p4')}</h1></div>
                        <div className='Personaje-padre-desc'>
                            {Personaje.father}
                        </div>
                    </div>
                    <div className='Personaje-descendientes'>
                        <div className='Personaje-descendientes-titulo'><h1>{t('detail_p5')}</h1></div>
                        <div className='Personaje-descendientes-desc'>
                        {Descendientes.map((descendiente, index)=>
                            <p className='Personaje-Listado' key={index}>
                                {descendiente}
                            </p>
                            )}
                        </div>
                    </div>
                    <div className='Personaje-titulos'>
                        <div className='Personaje-titulos-titulo'><h1>{t('detail_p6')}</h1></div><SimpleBarReact style={{maxHeight:200}}>
                        <div className='Personaje-titulos-desc'>
                        {Titulos.map((titulo, index)=>
                            <p className='Personaje-Listado' key={index}>
                                {titulo}
                            </p>
                            )}
                        </div></SimpleBarReact>
                    </div>
                </div>
            </main>
            
        </div>
    )
}