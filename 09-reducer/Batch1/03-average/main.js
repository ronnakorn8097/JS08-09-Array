// จงหาคะแนนเฉลี่ยแบบถ่วงน้ำหนัก


const scores = [
  { score: 90, subject: 'HTML', weight: 0.2 },
  { score: 95, subject: 'CSS', weight: 0.3 },
  { score: 85, subject: 'JavaScript', weight: 0.5 }
];
// expected result: 89

const newScore = scores.reduce((acc,item)=>acc+(item.score*item.weight),0);
console.log(newScore);

// 10 5 => 10*1 + 5*1 / 2 
// 10 5 => 10*2 + 5*1 / (2+1)
// 10 5 => 10*0.6 + 5*0.4 / (0.6+0.4)

// avg by weight = sum (score*weight) / sum (weight)
// (90*0.2 + 95*0.3 + 85 *0.5) / (0.2+0.3+0.5)

  //////////////////////// OR /////////////////////////
  
  const initial = { sum: 0, total: 0 };
  
  // acc = {sum:....., total:......}
  // cur = {score:..., subject:....., weight:.....}
  
  const summarizeObj = scores.reduce((acc, cur) => {
    acc.sum += cur.score * cur.weight; // (score * weight)
    acc.total += cur.weight; // (weight)
    return acc;
  }, initial);
  
  console.log(summarizeObj);
  console.log(summarizeObj.sum / summarizeObj.total);
  /////
  // AVG by Weight = SUM of (value * weight) / SUM of Weight
  // (90 * 0.2) + (95 * 0.3) + (85 * 0.5) / (0.2 + 0.3 + 0.5)
  // ในโจทย์ SUM of Weight = 0.2 + 0.3 + 0.5 = 1 เลยไม่ต้องใส่ก็ได้
  
  // #1 finalValue == (90 * 0.2) + (95 * 0.3) + (85 * 0.5)
  // #2 finalValue == {sum: 90 * 0.2 + 95 * 0.3 + 85 * 0.5, totalWeight: (0.2 + 0.3 + 0.5)}