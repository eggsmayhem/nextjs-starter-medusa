import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image"
export default class NextJsCarousel extends Component {
	render() {
		return (
			<div>
			<Carousel>
				<div>
					<Image 
					src="/butterfly.jpg"
					alt="decor item"
					layout="fill"/>
					<p className="legend">Decor</p>

				</div>
				
				<div>
					<img src="/eyetable.jpg" alt="decor item"  />
					<p className="legend">Decor</p>

				</div>
				
				<div>
					<img src="/Dialogue.jpg" alt="painting"/>
					<p className="legend">Painting</p>

				</div>

				<div>
					<img src="/six.jpg" alt="painting" />
					<p className="legend">Painting</p>

				</div>
				
				<div>
					<img src="/shit.jpg" alt="sticker" />
					<p className="legend">Sticker</p>

				</div>
				
				<div>
					<img src="/stickergroup.jpg" alt="sticker" />
					<p className="legend">Sticker</p>

				</div>

				<div>
					<img src="/crow.jpg" alt="tattoo" />
					<p className="legend">Tattoo</p>

				</div>

				<div>
					<img src="/love.jpg" alt="tattoo" />
					<p className="legend">Tattoo</p>

				</div>
			</Carousel>
        </div>

        
      
        );
    }
};
