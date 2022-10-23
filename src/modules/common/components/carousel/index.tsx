import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image"
export default class NextJsCarousel extends Component {
	render() {
		return (
			<div>
			<Carousel showStatus={false} showThumbs={false} autoPlay infiniteLoop>
				<div>
					
					<Image
					src="/butterfly.jpg"
					alt="Light blue and purple wall mounted buttterfly supports that can handle light weight items"
				    layout="fill"
					/>
					<p className="legend">Decor</p>

				</div>
				
				<div>
					<Image 
					src="/eyetable.jpg" 
					alt="a three-tier eye ball table on wheels. The top tier has a bloodshot blue eye with blood hand prints on the corners. The second tier has a red border with a black center. The bottom tier is blue"
					layout="fill" 
					 />
					<p className="legend">Decor</p>

				</div>
				
				<div>
					<Image 
					src="/Dialogue.jpg" 
					alt="a depiction of battle representing the colors of Belgium flag. The soldiers at war on the black and red colors"
					layout="fill"
					/>
					<p className="legend">Painting</p>

				</div>

				<div>
					<Image
					src="/six.jpg" 
					alt="an interpretation of the end of the world due to capitalism" 
					layout="fill"/>
					<p className="legend">Painting</p>

				</div>
				
				<div>
					<Image
					src="/shit.jpg" 
					alt="A glow in the dark Toilet Paper Bathroom Sign that reads 'Shit tickets' in old english" 
					layout="fill"/>
					<p className="legend">Sticker</p>

				</div>
				
				<div>
					<Image
					src="/stickergroup.jpg" 
					alt="a collection of psychotic and weird stickers" 
					layout="fill"/>
					<p className="legend" >Sticker</p>

				</div>

				<div>
					<img
					src="/crow.jpg" 
					alt="A black drunk bird dropping its bottle"
					/>
					<p className="legend">Tattoo</p>

				</div>

				<div>
					<Image 
					src="/love.jpg" 
					alt="A tattoo of the text 'Love After Pain' writen in olde english"
					layout="fill" />
					<p className="legend">Tattoo</p>

				</div>
			</Carousel>
        </div>

        
      
        );
    }
};
