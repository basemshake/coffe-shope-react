import React from 'react'
import "../App.css"
export default function Scroll() {
    return (
        <div className='container pt-5'>

            <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
                <a class="navbar-brand" href="#">Cup Coffe  <span><i class="fa-solid fa-mug-saucer"></i></span></a>

                <h4>Feedback <i class="fa-solid fa-users"></i></h4>

                <ul class="nav nav-pills">

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">See More</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                            <li><a class="dropdown-item" href="#scrollspyHeading6">Sixth</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#scrollspyHeading7">Seventh</a></li>
                            <li><a class="dropdown-item" href="#scrollspyHeading8">Eighth</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
                <h4 id="scrollspyHeading1">First heading </h4>

                <div className='First gggg'>

                    <p>This is some placeholder content for the scrollspy page.
                        Note that as you scroll down the page, the appropriate
                        navigation link is highlighted. It's repeated throughout
                        the component example. We keep adding some more example
                        copy here to emphasize the scrolling and highlighting.</p>
                    <><i class="fa-solid fa-circle-user fa-2xl"></i></>
                    <br />
                </div>

                <h4 id="scrollspyHeading2">Second heading</h4>
                <div className='Second gggg'>
                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                    <><i class="fa-solid fa-circle-user fa-2xl"></i></>
                </div>
                <h4 id="scrollspyHeading2">Third heading</h4>
                <div className='Third gggg'>
                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                    <><i class="fa-solid fa-circle-user fa-2xl"></i></>
                </div>
                <h4 id="scrollspyHeading2">Fourth heading</h4>
                <div className='Fourth gggg'>
                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                    <><i class="fa-solid fa-circle-user fa-2xl"></i></>
                </div>
                <h4 id="scrollspyHeading2">Fifth heading</h4>
                <div className='Fifth gggg'>
                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                    <><i class="fa-solid fa-circle-user fa-2xl"></i></>
                </div>
                <h4 id="scrollspyHeading2">Sixth heading</h4>
                <div className='Sixth gggg'>
                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                    <><i class="fa-solid fa-circle-user fa-2xl"></i></>
                </div>
                <h4 id="scrollspyHeading3">Seventh heading</h4>
                <div className='Seventh gggg'>
                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                    <><i class="fa-solid fa-circle-user fa-2xl"></i></>
                </div>
                <h4 id="scrollspyHeading3">Eighth heading</h4>
                <div className='Eighth gggg'>
                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                    <><i class="fa-solid fa-circle-user fa-2xl"></i></>
                </div>
                <h4 id="scrollspyHeading3">Ninth heading</h4>
                <div className='Ninth gggg'>
                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                    <><i class="fa-solid fa-circle-user fa-2xl"></i></>
                </div>
                <h4 id="scrollspyHeading3">Tenth heading</h4>
                <div className='Tenth gggg'>
                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                    <><i class="fa-solid fa-circle-user fa-2xl"></i></>
                </div>






            </div>

            <section class="">
               
                <footer class="text-center text-white" style={{backgroundColor:" #0a4275" , margin: "50px 0 0 0" ,height:"100px"}}>
                    
                    <div class="container p-4 pb-0">
                        
                        <section class="">
                            <p class="d-flex justify-content-center align-items-center">
                                <span class="me-3">Register for free</span>
                                <button type="button" class="btn btn-outline-light btn-rounded">
                                    Sign up!
                                </button>
                            </p>
                        </section>
                    
                    </div>
                   

                   
                   
                </footer>
               
            </section>

        </div>
    )
}
