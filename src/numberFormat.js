const numberFormat = (number) => {
  return new Intl.NumberFormat("en-IN").format(number);
};
export default numberFormat;
