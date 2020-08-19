//equation
//A=P(1+i)^t
//Principal amount
//interest rate
//time

function calc(principal, ratePercentage, time) {
  const formattedRate = ratePercentage / 100;
  const answer = [];
  let value = 0;
  let expo = 0;
  for (let x = 0; x < time; x++) {
    expo = Math.pow(1 + formattedRate, x + 1);
    value = principal * expo;
    answer.push({
      amountAccumulated: formatCurrency(value),
      rateAccumulated: formatNumber(value / principal - 1),
      amountDifference: formatCurrency(value - principal),
      time: x + 1,
    });
  }

  return answer;
}

function formatCurrency(number) {
  const formatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
  return formatted;
}

function formatNumber(number) {
  const formatted = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 2,
    style: 'percent',
  }).format(number);
  return formatted;
}

export { calc };
