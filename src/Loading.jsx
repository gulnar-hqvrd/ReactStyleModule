import React from "react";

function Loading(WrappedComponent) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <h3 className="text-3xl font-bold text-blue-600 mb-4" >Loading ...</h3>
    }
    return <WrappedComponent {...props} />;
  };
}

export default Loading;

