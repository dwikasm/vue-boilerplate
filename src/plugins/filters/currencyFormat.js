export default (numberParam) => {
  let number = numberParam;
  if (isNaN(number)) {
    return 'Rp0';
  }
  const decimals = 0;
  const decPoint = ',';
  const thousandsSep = '.';
  number = (`${number}`).replace(/[^0-9+\-Ee.]/g, '');
  const n = !isFinite(+number) ? 0 : +number;
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  const sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep;
  const dec = (typeof decPoint === 'undefined') ? '.' : decPoint;
  let s = '';
  const toFixedFix = function (nLower, precLower) {
    // const k = Math.pow(10, precLower);
    const k = 10 ** precLower;
    return `${(Math.round(nLower * k) / k)
      .toFixed(precLower)}`;
  };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : `${Math.round(n)}`)
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return `Rp${s.join(dec)}`;
};
