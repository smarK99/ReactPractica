import { Carousel } from "react-bootstrap"

const Carrouselhome = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        style={{maxHeight:"500px", objectFit:'cover'}}
                        src="src/assets/1.jpg" alt="Hacker" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        style={{maxHeight:"500px", objectFit:'cover'}}
                        src="src/assets/5.jpg" alt="Binario" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                        <img 
                        className='d-block w-100'
                        style={{maxHeight:"500px", objectFit:'cover'}}
                        src="src/assets/2.jpg" alt="codigo" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </>
    )
}

export default Carrouselhome