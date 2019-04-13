/**
 * Created by will on 13/04/19.
 */
import React from 'react';

const  CurveVisualisation = ({curveType}) => {

  return (
    <div className={curveType ? "curve-visualisation" + curveType : "curve-visualisation"}>

    </div>
  )
}


export default CurveVisualisation;