exports.getCurKrTime = function (minus) {
  const curr = new Date();
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_curr = new Date(utc + KR_TIME_DIFF);
  if (minus) kr_curr.setDate(kr_curr.getDate() - minus);
  return kr_curr;
};
