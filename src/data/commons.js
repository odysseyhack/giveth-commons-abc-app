import {commonsViews} from '@giveth/commons-components';

export const commons = [
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