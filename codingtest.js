const list = [];
const getRewards = (price) => {
    if (price >=50 && price < 100) {
        return price-50;
    } else if (price >100){
        return (2*(price-100) + 50);
    }
    return 0;
}

const addTransaction = (price) => {
    const rewards = getRewards(price);
    list.push({rewards: rewards, date: new Date()});
}

const getRewardsforThreeMonths = () => {
    return list.filter((val) => val.date.getMonth() <= new Date().getMonth());
}

const getRewardsforThreeMonthsTotal = () => {
    return getRewardsforThreeMonths().reduce((acc,cur) => acc +cur.rewards,0);
}

/**addTransaction(154);
addTransaction(54);
addTransaction(200);
addTransaction(20);
addTransaction(300);

console.log(getRewardsforThreeMonths());
console.log(getRewardsforThreeMonthsTotal()); */
module.exports = {
    list: list,
    addTransaction: addTransaction,
    getRewardsforThreeMonths: getRewardsforThreeMonths,
    getRewardsforThreeMonthsTotal: getRewardsforThreeMonthsTotal
};
