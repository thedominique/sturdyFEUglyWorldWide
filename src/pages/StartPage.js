import React, { Component } from 'react'
import './startPage.css'

import Tent from '../images/Tent.jpeg'
import Hike1 from '../images/hike1.jpg'
import Hike2 from '../images/hike2.jpg'
import Hike3 from '../images/hike3.jpg'
import Hike8 from '../images/hike8.jpeg'
import Hike9 from '../images/hike9.jpeg'
import Hike7 from '../images/hike7.png'
import Hike10 from '../images/hike10.jpeg'
import Hike6 from '../images/hike6.jpg'


import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import FooterComponent from '../components/static/FooterComponent';

import { WithRouter } from 'react-router-dom'


var sectionStyle = {

    width: "100%",
    height: "400px",
    backgroundImage: `url(${Tent})`,
    "margin-bottom": "3%"
};


class StartPage extends Component {

    render() {
        return (
            <>

                {/* <div class="search__container">
                    <input class="search__input" type="text" placeholder="Search" />
                </div> */}


                <Carousel id="carousel">
                    <Carousel.Item id="item1">
                        <img
                            className="d-block w-100"
                            src={Hike7}
                            alt="First slide"
                            width={900}
                            height={600}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Hike8}
                            alt="First slide"
                            width={900}
                            height={600}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Hike9}
                            alt="Second slide"
                            width={900}
                            height={600}
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Hike10}
                            alt="Third slide"
                            width={900}
                            height={600}
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Hike2}
                            alt="Second slide"
                            width={900}
                            height={600}
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Hike10}
                            alt="Third slide"
                            width={900}
                            height={600}
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                {/* <div classname = "card-cuntainer"> */}

                <div class="product" onClick={() => this.props.history.push({
                    pathname: "/productPage",
                    state: { image: "hike6.jpg" }

                })}>
                    <div class="imgbox" > <img src={Hike6}></img> </div>
                    <div class="specifies">
                        <h2>Camping delux <br></br> <span>Camping</span></h2> <br></br>
                        {/* <div class="price">$1500</div> <label>Size</label> */}
                        <ul>
                            <li>10MM</li>
                            <li>20MM</li>

                        </ul> <label>Colors</label>
                        <ul class="colors">
                            <li></li>
                            <li></li>

                        </ul> <button class="btn btn-primary" >Buy Now</button>
                    </div>
                </div>



                <div class="product" onClick={() => this.props.history.push({
                    pathname: "/productPage",
                    state: { image: "hike1.jpg" }

                })}>
                    <div class="imgbox"> <img src={Hike1}></img> </div>
                    <div class="specifies">
                        <h2>Fishing starter kit <br></br> <span>Rolex</span></h2>
                        <div class="price">$1500</div> <label>Size</label>
                        <ul>
                            <li>10MM</li>
                            <li>20MM</li>

                        </ul> <label>Colors</label>
                        <ul class="colors">
                            <li></li>
                            <li></li>

                        </ul> <button class="btn btn-primary" >Buy Now</button>
                    </div>
                </div>


                <div class="product" onClick={() => this.props.history.push({
                    pathname: "/productPage",
                    state: { image: "hike3.jpg" }

                })}>
                    <div class="imgbox"> <img src={Hike3}></img> </div>
                    <div class="specifies">
                        <h2>Camping basics<br></br> <span>Rolex</span></h2>
                        <div class="price">$1500</div> <label>Size</label>
                        <ul>
                            <li>10MM</li>
                            <li>20MM</li>

                        </ul> <label>Colors</label>
                        <ul class="colors">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul> <button class="btn btn-primary">Book Now</button>
                    </div>
                </div>

                {/* </div> */}

                {/* <Card id="card">
                            <Card.Img variant="top" src={Hike6} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                         </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card id="card">
                            <Card.Img variant="top" src={Hike6} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                         </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card id="card">
                            <Card.Img variant="top" src={Hike6} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                         </Card.Text>
                            </Card.Body>
                        </Card> */}





                {/* <div className="container">
                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non-numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipitlaboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui inea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non-provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non-recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat…
        
            This is H. Rackham's translation as printed in the Loeb Classical Library edition with underlining added for the translation of the text found in the example of the Lorem ipsum[2]:
        
            [32] But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? [33] On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammeled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse.
            </div> */}

            </>
        );

    }


}

export default StartPage;