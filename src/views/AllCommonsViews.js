/**
 * Created by will on 16/04/19.
 */
import React from 'react';
import { CommonsCard } from "@giveth/commons-components";
import {commons} from '../data/commons';


const AllCommonsView = () => {
  return (
    <div className="campaigns">
      <h3>Campaigns</h3>
      <p>These Campaigns are working hard to solve causes of the Commons</p>
      <div className="cards">
        {commons.map(({ title, description, image, contract }) => {
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


