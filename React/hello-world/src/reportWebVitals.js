const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
/* 
    getCLS: Cumulative Layout Shift
    getFID: First Input Delay
    getFCP: First Contentful Paint
    getLCP: Largest Contentful Paint
    getTTFB: Time to First Byte
*/