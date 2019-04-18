/**
 * Created by will on 13/04/19.
 */
import React from 'react';

const CommonsOverview = ({name, description}) => {
  return (
    <div className="commons-overview">
      <p className="org-label">Organisation name</p>
      <h1>{name}</h1>
      <p className="des-label">Description</p>
      <p className="description">{description}</p>
    </div>
  )
};

export default CommonsOverview;