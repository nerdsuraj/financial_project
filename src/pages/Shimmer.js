import React from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const Shimmer = () => {
    return (
      <>
        <ShimmerSimpleGallery card imageHeight={300} caption row={3} col={4} />
      </>
    );
}

export default Shimmer;