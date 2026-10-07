const costs= [
 { name: '喝奶茶', cost: 18 ,type : '购物'},
  { name: '买衣服', cost: 200 ,type : '购物'},
  { name: '看电影', cost: 24 ,type : '娱乐'},
  { name: '午餐', cost: 59 , type : '餐饮'},
  { name: '晚餐', cost: 50 , type : '餐饮'},
  { name: '宵夜', cost: -34, type : '餐饮' },  
  { name: '买水', cost: -3 , type : '餐饮'}  
];

const cleanCosts = (list) => list.filter(s => s.cost >= 0 );
const highest = (list) => list.reduce((max, s) => s.cost > max.cost ? s : max, list[0]);
const low = (list) => list.filter(s => s.cost < 50).map(s => s.name);
const totalCosts = ( list ) => cleanCosts (list). reduce ( ( sum, item ) => sum + item. cost , 0 );
const lowest = ( list ) =>list. reduce ( ( min, i ) => i. cost < min. cost ? i : min, list[ 0 ]);
console.log('清洗后：', cleanCosts(costs));
console.log('最高消费：', highest(cleanCosts(costs)));
console.log('最低消费：', lowest(cleanCosts(costs)));
console.log('低消费：', low(cleanCosts(costs)));
console.log('总花费：', totalCosts(costs), '元');

const toLevel = (cost) => {
  if (cost >= 100) return '高';
  if (cost >= 50) return '中';
  return '低';
};
const levelCount = (list) => {
  const result = { 高: 0, 中: 0, 低: 0 };
  list.forEach(item => { result[toLevel(item.cost)]++; });
  return result;
};
const report = (list) => {
  const valid = cleanCosts(list);
  if (valid.length === 0) {
    return '没有有效消费记录';
  }
const total = valid.reduce((sum, item) => sum + item.cost, 0);
const CostType=(list)=>[...list].sort((a,b)=>{
  if(a.type!==b.type){
    return a.type.localeCompare(b. type , 'zh-CN' );
  }
  return a.cost-b.cost;
});
console.table(CostType(costs));
const dist = levelCount(valid);
  return `有效记录${valid.length}笔，总花费${total}元，最低消费${lowest(valid).cost}元（${lowest(valid).name})，最高消费${highest(valid).cost}元（${highest(valid).name}）；
消费等级分布：高${dist.高}笔 中${dist.中}笔 低${dist.低}笔；
小额消费（<50元）：${low(valid).join('、') || '无'}`;
};

try {
  console.log(report(costs));
} catch (err) {
  console.error('报告生成失败：', err.message);
}

