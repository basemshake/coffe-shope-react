import React from 'react'
import '../App.css'
export default function Slider() {
    return (

        <div>
            <h1 style={{position:'relatve' , margin:' 30px 420px'  , fontStyle:'italic'}} >
                Faster Cup Coffe <span><i class="fa-solid fa-mug-saucer"></i></span></h1>


                
            <div className='Slider'>


                <div className='text1'>
                    <h3> Are You like Ice Coffe</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                         aliquid iure delectus in laboriosam at iusto nostrum similique optio doloremque fuga
                          quae quidem, ratione sunt deleniti modi expedita eos animi, sequi officia amet porro illo 
                          perferendis repellendus! Quisquam, sed ratione!</p>

                    <button type="button" className=" btn btn-outline-dark my-3" >learn moer</button>
                </div>
                <div className='Slider2'>
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img className='' src="https://th.bing.com/th/id/OIP.3u6nVg0GgkLKhR4sXAHTpQHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="d-block w-100  height-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img className='' src="https://th.bing.com/th/id/OIP.H1aQuM_2kK0zDyQOZfPLTQHaE7?w=292&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="d-block w-100  height-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img className='' src="https://th.bing.com/th/id/OIP.dILU-C5U-1oTganMZzrRgQHaEo?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="d-block w-100  height-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div>
                    <div className='text2'>
                        <h3>Or Hot coffe</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere aliquid iure delectus in laboriosam at iusto nostrum similique optio doloremque fuga quae quidem, ratione sunt deleniti modi expedita eos animi, sequi officia amet porro illo perferendis repellendus! Quisquam, sed ratione!</p>

                        <button type="button" className=" btn btn-outline-dark my-3" >learn moer</button>
                    </div>
                </div>


            </div>
        </div>
    )
}
