//  创造首行数据
// const firstList = createFirstList(data.intrinsicList);

// 单行整合
// integration(firstList, 0);
//  单列整合
// IntegrateColumns(firstList, 0);
//  分区
// zoning(data.rowsList[0], 0);
// console.log('固  有', data.intrinsicList);


// const secondList = createSecondList(data.intrinsicList, 1);
// console.log('第二行', secondList);
{
    james:for (let i = 0; i < data.rows; i++) {
        data.blockData[i] = data.blockData[i] || [];
        for (let k = 0; k < data.innerRows; k++) {
            data.rowsList[i * 3 + k] = data.rowsList[i * 3 + k] || [];
            for (let j = 0; j < data.cols; j++) {
                data.blockData[i][j] = data.blockData[i][j] || [];
                for (let m = 0; m < data.innerCols; m++) {
                    data.colsList[j * 3 + m] = data.colsList[j * 3 + m] || [];
                    console.log(`大行${i},小行${k},大列${j},小列${m}`);
                    //  1.算出能用的部分
                    const useList = calculateAble(i, k, j, m);
                    //  2.随机之,算出这个位置的数
                    const thisValue = calculateValue(useList, i, k, j, m);
                    data.rowsList[k].push(thisValue);
                    console.log('************************');
                    console.log(thisValue);
                    console.log('行  ', data.rowsList);
                    console.log(data.rowsList[k]);

                    console.log('列  ', data.colsList);
                    console.log('块级', data.blockData);
                    break james;
                }
            }
        }
    }
}
console.log(data.rowsList)
console.log(data.colsList)
console.log(data.blockData);
