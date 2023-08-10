import React from 'react';
import "../App.css";
import { Outlet, Link , NavLink} from "react-router-dom";



export default function Header() {
    return (
        <div className='Header'>
            <section className="bg-dark text-light py-5 text-center text-md-start ">
                <div className="container-fluid ">
                    <div className="d-md-flex align-items-center">
                        <div className='container'>
                            <h1 className="text-light display-3 " >Cup Coffe </h1>
                            <p style={{width:'90%'}}className="py-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Tempore aspernatur repellat hic officiis cumque fuga iure modi? Veritatis quae laborum commodi,
                              quos repellendus illo nesciunt assumenda. Praesentium debitis ut dolor? In debitis nemo odio asperiores 
                              libero placeat fugiat nisi, maiores doloremque beatae velit possimus perspiciatis incidunt iste. Quasi,
                               omnis quis?</p>
                            
                            <Link to="/Learn"><button type="button" className=" btn btn-outline-success my-3" >learn moer</button></Link>
                        </div>

                        <img  src= 'https://th.bing.com/th/id/R.340e7dfca975bd1418d535f00278bc0b?rik=C0Hmrz16VbstNA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-cI4RG_G85sU%2fTVkxS54tYWI%2fAAAAAAAAAGU%2f26sGavuCEos%2fs1600%2f3d_coffee%2525285%252529.jpg&ehk=bENq1klHc7NlLHf4h5NU5Cl1feTl%2bm82ROP1X5Bid4o%3d&risl=&pid=ImgRaw&r=0'/>

                    </div>

                </div>

            </section>
        </div>
    )
}
