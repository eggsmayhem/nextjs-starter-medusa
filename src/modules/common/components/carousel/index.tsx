import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image"
export default class NextJsCarousel extends Component {
	render() {
		return (
			<div>
			<Carousel showStatus={false} showThumbs={false}>
				<div>
					
					<Image
					src="/butterfly.jpg"
					alt="decor item"
				    layout="fill"
					/>
					<p className="legend">Decor</p>

				</div>
				
				<div>
					<Image 
					src="/eyetable.jpg" 
					alt="decor item"
					layout="fill" 
					 />
					<p className="legend">Decor</p>

				</div>
				
				<div>
					<Image 
					src="/Dialogue.jpg" 
					alt="painting"
					layout="fill"
					/>
					<p className="legend">Painting</p>

				</div>

				<div>
					<Image
					src="/six.jpg" 
					alt="painting" 
					layout="fill"/>
					<p className="legend">Painting</p>

				</div>
				
				<div>
					<Image
					src="/shit.jpg" 
					alt="sticker" 
					layout="fill"/>
					<p className="legend">Sticker</p>

				</div>
				
				<div>
					<Image
					src="/stickergroup.jpg" 
					alt="sticker" 
					layout="fill"/>
					<p className="legend" >Sticker</p>

				</div>

				<div>
					<img
					src="/crow.jpg" 
					alt="tattoo"
					/>
					<p className="legend">Tattoo</p>

				</div>

				<div>
					<Image 
					src="/love.jpg" 
					alt="tattoo"
					layout="fill" />
					<p className="legend">Tattoo</p>

				</div>
			</Carousel>
        </div>

        
      
        );
    }
};
