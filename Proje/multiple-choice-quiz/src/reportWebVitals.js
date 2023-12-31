// This function reports web vitals metrics to a provided callback function

const reportWebVitals = onPerfEntry => {
    // Checking if the provided callback is a function

  if (onPerfEntry && onPerfEntry instanceof Function) {
        // Importing the 'web-vitals' library and reporting various metrics

    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
// Exporting the reportWebVitals function as the default export

export default reportWebVitals;
