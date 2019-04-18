/**
 * Created by will on 16/04/19.
 */
import React from 'react';
import { CommonsCard, commonsViews } from "@giveth/commons-components";




const campaigns = [
  {
    title: "Water Preservation",
    description: "Preserving our precious supply since 2022",
    giversCount: 18,
    donationsCount: 32,
    commonsView: commonsViews.participate,
    image: process.env.PUBLIC_URL + "/images/indonesia.jpg",
    curve: {
      reserveToken: 12345678,
      reserveRatio: 142857, // reserveRatio = kappa ~ 6
      gasPrice: 15000000000, // 15gwei
      theta: Math.ceil(200000), // % in ppm
      p0: Math.ceil(0.2),
      initialRaise: Math.ceil(3000000),
      fundingPool: 10000000,
      friction: Math.ceil(20000), // % in ppm
      duration: 3,
      minimunContribution: 20,
      address: 1234567,
      tokenSupply: 1000,
      currentUserBalance: 220
    }
  },
  {
    title: "Sustainable Power Development",
    description: "Hello there test much description",
    giversCount: 18,
    commonsView: commonsViews.participate,

    donationsCount: 32,
    image: process.env.PUBLIC_URL + "/images/mexico-fires.jpg",
    curve: {
      reserveToken: 12345678,
      reserveRatio: 142857, // reserveRatio = kappa ~ 6
      gasPrice: 15000000000, // 15gwei
      theta: Math.ceil(200000), // % in ppm
      p0: Math.ceil(0.2),
      initialRaise: Math.ceil(3000000),
      fundingPool: 10000000,
      friction: Math.ceil(20000), // % in ppm
      duration: 3,
      minimunContribution: 20,
      address: 1234567,
      tokenSupply: 1000,
      currentUserBalance: 220
    }


  },
  {
    title: "Indonesia Campaign",
    description: "Hello there test much description",
    giversCount: 18,
    commonsView: commonsViews.participate,

    donationsCount: 32,
    image: process.env.PUBLIC_URL + "/images/gronningen.jpg",
    curve: {
      reserveToken: 12345678,
      reserveRatio: 142857, // reserveRatio = kappa ~ 6
      gasPrice: 15000000000, // 15gwei
      theta: Math.ceil(200000), // % in ppm
      p0: Math.ceil(0.2),
      initialRaise: Math.ceil(3000000),
      fundingPool: 10000000,
      friction: Math.ceil(20000), // % in ppm
      duration: 3,
      minimunContribution: 20,
      address: 1234567,
      tokenSupply: 1000,
      currentUserBalance: 220
    }

  },
  {
    title: "Indonesia Campaign",
    description: "Hello there test much description",
    giversCount: 18,
    donationsCount: 32,
    commonsView: commonsViews.participate,
    curve: {
      reserveToken: 12345678,
      reserveRatio: 142857, // reserveRatio = kappa ~ 6
      gasPrice: 15000000000, // 15gwei
      theta: Math.ceil(200000), // % in ppm
      p0: Math.ceil(0.2),
      initialRaise: Math.ceil(3000000),
      fundingPool: 10000000,
      friction: Math.ceil(20000), // % in ppm
      duration: 3,
      minimunContribution: 20,
      address: 1234567,
      tokenSupply: 1000,
      currentUserBalance: 220
    }
  },
  {
    title: "Indonesia Campaign",
    description: "Hello there test much description",
    giversCount: 18,
    donationsCount: 32,
    commonsView: commonsViews.participate,
    curve: {
      reserveToken: 12345678,
      reserveRatio: 142857, // reserveRatio = kappa ~ 6
      gasPrice: 15000000000, // 15gwei
      theta: Math.ceil(200000), // % in ppm
      p0: Math.ceil(0.2),
      initialRaise: Math.ceil(3000000),
      fundingPool: 10000000,
      friction: Math.ceil(20000), // % in ppm
      duration: 3,
      minimunContribution: 20,
      address: 1234567,
      tokenSupply: 1000,
      currentUserBalance: 220
    }
  },
  {
    title: "Indonesia Campaign",
    description: "Hello there test much description",
    giversCount: 18,
    donationsCount: 32,
    curve: {
      reserveToken: 12345678,
      reserveRatio: 142857, // reserveRatio = kappa ~ 6
      gasPrice: 15000000000, // 15gwei
      theta: Math.ceil(200000), // % in ppm
      p0: Math.ceil(0.2),
      initialRaise: Math.ceil(3000000),
      fundingPool: 10000000,
      friction: Math.ceil(20000), // % in ppm
      duration: 3,
      minimunContribution: 20,
      address: 1234567,
      tokenSupply: 1000,
      currentUserBalance: 220
    }

  }
];


const AllCommonsView = () => {
  return (
    <div className="campaigns">
      <h3>Campaigns</h3>
      <p>These Campaigns are working hard to solve causes of the Commons</p>
      <div className="cards">
        {campaigns.map(({ title, description, image, contract }) => {
          console.log(image);
          return (
            <CommonsCard
              key={contract}
              title={title}
              description={description}
              giversCount={18}
              donationsCount={32}
              image={image}
              contractAddress={contract}
            />
          )
        })}
      </div>
    </div>
  )
};

export default AllCommonsView


