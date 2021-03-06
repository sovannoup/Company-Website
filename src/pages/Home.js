import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Item, Partner, Content, Feature, FeaturePhone } from './CircleFile';
import { Container, Row, Col } from "react-bootstrap"
import { BiMenu } from "react-icons/bi";
import './Home.css';
import imageProduct1 from './../assets/blog-img1.png';
import imageProduct2 from './../assets/blog-img2.png';
import imageProduct3 from './../assets/blog-img3.png';
import computer from './../assets/computer.png';
import code from './../assets/code.png';
import partnerLogo1 from './../assets/partner-logo1.png';
import imageicon2 from './../assets/icon-phone.png';
import logo from './../assets/logoAmatak.png';
import 'react-awesome-slider/dist/styles.css';
import headerImg from '../assets/1.png';
import featureImg from '../assets/2.png';
import footerImg from '../assets/3.png';
import cheavSrun from '../assets/cheavSrun.png';
import phone from '../assets/phone.png';
import web from '../assets/web.png';
import webApp from '../assets/webApp.png';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import partner1 from '../assets/partner1.png';
import partner2 from '../assets/partner2.png';
import partner3 from '../assets/partner3.png';
import partner4 from '../assets/partner4.png';
import partner5 from '../assets/partner5.png';
import partner6 from '../assets/partner6.png';
import partner7 from '../assets/partner7.png';
import partner8 from '../assets/partner8.png';
import partner9 from '../assets/partner9.png';


const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2)
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500]
	}
});


const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 420, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3, itemsToScroll: 3 },
	{ width: 1200, itemsToShow: 4, itemsToScroll: 4 },
];
const logoBreakPoint = [
	{ width: 200, itemsToShow: 6 },
	{ width: 300, itemsToShow: 7, itemsToScroll: 7 },
	{ width: 400, itemsToShow: 9, itemsToScroll: 9 },
	{ width: 700, itemsToShow: 10, itemsToScroll: 10 },
	{ width: 1300, itemsToShow: 15, itemsToScroll: 15 },
]

const contentBreakPoint = [
	{ width: 1, itemsToShow: 1 },
	{ width: 275, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 650, itemsToShow: 3, itemsToScroll: 3 },
]

const webFeatureBreakPoint = [
	{ width: 1, itemsToShow: 1, itemsToScroll: 1 },
	{ width: 576, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 750, itemsToShow: 3, itemsToScroll: 3 },
	{ width: 950, itemsToShow: 4, itemsToScroll: 4 },
]

const phoneFeatureBreakPoint = [
	{ width: 1, itemsToShow: 1 },
	{ width: 300, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 650, itemsToShow: 3, itemsToScroll: 3 },
]

const data = [
	{ image: webApp, title: "App?????????", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet." },
	{ image: phone, title: "???????????????", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet." },
	{ image: web, title: "???????????????", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet." },
	{ image: webApp, title: "App?????????", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet." },
	{ image: phone, title: "???????????????", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet." },
	{ image: webApp, title: "???????????????", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet." },
]

const partnerImage = [
	{ image: partner1 }, { image: partner2 }, { image: partner3 }, { image: partner4 }, { image: partner5 }, { image: partner6 }, { image: partner7 }, { image: partner8 }, { image: partner9 },
	{ image: partner1 }, { image: partner2 }, { image: partner3 }, { image: partner4 }, { image: partner5 }, { image: partner6 }, { image: partner7 }, { image: partner8 }, { image: partner9 },
]


function Home() {
	return (
		<div className="home ">
			<div className="headerRow">
				<div className="topRow">
					<img src={headerImg} className="topRow" />
				</div>
				<div className="headerContent">
					<div className="headerItem">
						<img src={logo} className="logo-company" />
						<div className="txtNabar">
							<a href="#" className="navbar">Home</a>
							<a href="#" className="navbar">About</a>
							<a href="#" className="navbar">Service</a>
							<a href="#" className="navbar">Blog</a>
							<a href="#" className="navbar">Contact</a>
						</div>{' '}
						<div className="menu">
							<BiMenu />
						</div>
					</div>
					<div className="firstRow">
						<h1 className="labelTxt">Your Best Technology Solution Partner</h1>
						<h1 className="labelh2">???????????????????????????????????????</h1>
						<div>
							<button className="visitUs">????????????</button>
						</div>{' '}
					</div>
				</div>
			</div>

			<Container fluid className="secondRow">
				<h3 className={"headertxt"}>??????????????????</h3>
				<Row className="setTop">
					<Carousel breakPoints={contentBreakPoint} showArrows={false} >
						{data.map((item, index) =>
							<Col>
								<Content image={item['image']} title={item['title']} desc={item['desc']} />
							</Col>
						)}
					</Carousel>
				</Row>
			</Container>
			<div className="featureRow">
				<div className="topRow">
					<img src={featureImg} className="topRow" />
				</div>

				<div class="featureContainer">
					<Container className="innerAbs">
						<Row className="featureBox">
							<h1 className="headertxt">????????????</h1>
							<p className="description">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</Row>
						<Row className="sss">
							<Row className="webFeature">
								<Carousel breakPoints={webFeatureBreakPoint} showArrows={false}>
									{data.map((item, index) =>
										<Col>
											<Feature image1={feature1} title1={item['title']} desc1={item['desc']} image2={feature2} title2={item['title']} desc2={item['desc']} />
										</Col>
									)}
								</Carousel>
							</Row>
							<div className="phoneFeature">
								<Carousel breakPoints={phoneFeatureBreakPoint} showArrows={false}>
									{data.map((item, index) =>
										<Col>
											<FeaturePhone image={feature2} title={item['title']} desc={item['desc']} />
										</Col>
									)}
								</Carousel>
							</div>
						</Row>
					</Container>
				</div>

			</div>
			<div className="fifthRow">
				<h2 className="ourService">????????????</h2>
				<div className="double_Col">
					<div className="firstCol">
						<div className="phComputerDiv"><img src={computer} className="phoneComputerImg" /></div>
						<div className="listStyle"><ul>
							<li ><div className="dakRow"> <p className="listItem">  ???????????? : </p><p className="data">Noup Sovan</p></div></li>
							<li ><div className="dakRow"> <p className="listItem">  ???????????? : </p><p className="data">Samboo ToamChet Express MST Express</p></div></li>
							<li ><div className="dakRow"> <p className="listItem">  ???????????? : </p><p className="data">Jummert</p></div></li>
							<li ><div className="dakRow"> <p className="listItem">  ??????????????????????????????????????????????????? </p></div></li>
							<li ><div className="dakRow"> <p className="listItem">  ??????????????????????????????????????? App</p></div></li>
							<li ><div className="dakRow"> <p className="listItem">  ??????????????????????????????????????????????????? ABA ??? Wing??? ???????????? App</p></div></li>
							<li ><div className="dakRow"> <p className="listItem">  ????????????????????????</p></div></li>
						</ul>
						</div>
					</div>
					<div className="secondCol"><img src={computer} className="computerImg" /></div>
				</div>
			</div>
			<div className="sixthRow">
				<h1 className="ourService1">????????????</h1>
				<div className="sixthRowDiv">
					<img src={code} className="sixthRowImg" />
				</div>
				<div className="moreInfo">
					<h1 className="ourService">????????????</h1>
					<p className="listItem">
						Amatak Technologies (Cambodia) Co., Ltd. ????????????????????????????????????????????????????????????????????? ???????????????APP??????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
					</p>{' '}
				</div>{' '}
			</div>
			<div className="seventhRow">
				<button className="button">??????????????????</button>
			</div>
			<div className="eighthRow">
				<div className="App">
					<Carousel breakPoints={breakPoints} showArrows={false}>
						<Item sourceImg={imageProduct1} name="MT Express" caption="App Development" />
						<Item sourceImg={imageProduct2} name="Beelink HR" caption="Website Development" />
						<Item sourceImg={imageProduct3} name="" caption="Focus on Digitle Website Development" />
						<Item sourceImg={imageProduct1} name="MT Express" caption="App Development" />
						<Item sourceImg={imageProduct2} name="" caption="Focus on Digitle Website Development" />
						<Item sourceImg={imageProduct3} name="Beelink HR" caption="Website Development" />
					</Carousel>
				</div>
			</div>{' '}
			{/* <div className="row"> */}
			<div className="ninethRow border-top border-dark ">
				<div className="App">
					<Carousel breakPoints={logoBreakPoint} showArrows={false}>
						{partnerImage.map((item, index) =>
							<Partner sourceImg={item['image']} />
						)}
					</Carousel>
				</div>
			</div>{' '}
			<div className="seventhRow">
				<button className="button">????????????</button>{' '}
			</div>

			<div className="lastOne">
				<p className="lastTxt"> Telegram: 023 452398 | 012 769078 </p>
				<p className="lastTxt"> Email: seavengseng@gmail.com. </p>
			</div>

			<div className="footerRow">
				<div className="footerBg">
					<img src={footerImg} className="topRow" />
				</div>
				<div className="footerCon">
					<div class="logoCenter"><img src={logo} className="logo-footer" /></div>
					<div class="left">
						<i class="fab fa-facebook-square"></i>
						<i class="fab fa-twitter"></i>
						<i class="fab fa-youtube"></i>
						<i class="fab fa-instagram"></i>
						<i class="fas fa-globe"></i>
						<i class="fab fa-pinterest"></i>
						<i class="fab fa-behance"></i>
					</div>
					<div class="center"><img src={logo} className="logo-footer" /></div>
					<div class="right">	<p> 2021 Copyrights & Protected </p></div>
				</div>
			</div>
		</div >
	);


}

export default Home;

