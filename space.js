const costs= [
 { name: '喝奶茶', cost: 18 },
  { name: '买衣服', cost: 200 },
  { name: '看电影', cost: 24 },
  { name: '午餐', cost: 59 },
  { name: '晚餐', cost: 50 },
  { name: '宵夜', cost: -34 },  
  { name: '买水', cost: -3 }  
];

const cleanCosts = (list) => list.filter(s => s.cost >= 0 );
const highest = (list) => list.reduce((max, s) => s.cost > max.cost ? s : max, list[0]);
const low = (list) => list.filter(s => s.cost < 50).map(s => s.name);
const totalCosts = ( list ) => cleanCosts (list). reduce ( ( sum, item ) => sum + item. cost , 0 );
console.log('清洗后：', cleanCosts(costs));
console.log('最高分：', highest(cleanCosts(costs)));
console.log('低消费：', low(cleanCosts(costs)));
console.log('总花费：', totalCosts(costs), '元');

