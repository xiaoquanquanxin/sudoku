function createElement(tagName, i, j) {
    const el = document.createElement(tagName);
    // if (tagName === 'div' && i !== undefined && j !== undefined) {
    //     el.innerHTML = `${i + 1}行${j + 1}列`;
    // }
    return el
}

//  随机数
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

//
function toJSON(data) {
    return JSON.parse(JSON.stringify(data));
}

//  按照intrinsicList创建某一行纯随机
function createFirstList(originList) {
    const aimList = [];
    const List = toJSON(originList);
    while (List.length) {
        const Val = randomInt(0, List.length - 1);
        aimList.push(List[Val]);
        List.splice(Val, 1)
    }
    return aimList;
}

//  单行整合
// function integration(list, index) {
//     data.rowsList[index] = toJSON(list);
// }

//  全列整合
// function IntegrateColumns(list, index) {
//     toJSON(list).forEach(function (t, i) {
//         data.colsList[i] = data.colsList[i] || [];
//         data.colsList[i].push(t);
//     });
// }

//  单行分区
function zoning(list, index) {
    const _list = toJSON(list);
    //  第几大行
    const row = Math.floor(index / 3);
    //  第几小行
    const innerRows = index % 3;
    data.blockData[row] = [];
    while (_list.length) {
        //  第几大列
        const cols = (9 - _list.length) / 3;
        data.blockData[row][cols] = data.blockData[row][cols] || [];
        data.blockData[row][cols][innerRows] = _list.splice(0, 3)
    }
}


/**
 * 算出当前位置下，列与所处块
 *  @i:大行
 *  @k:小行
 *  @j:大列
 *  @m:小列
 * */
function calculateAble(i, k, j, m) {
    //  处于哪一个大块
    const block = data.blockData[i][j];
    //  处于列哪一列
    const colList = data.colsList[m];
    const list = [...new Set(colList.concat(...block))].sort();
    return deWeight(list, data.intrinsicList);
}

//  对于主数据，删除重复数据，并返主数据，其实不需要返回
function deWeight(listA, listB) {
    let i = 0;
    let j = 0;
    //  去除重复
    while (listA.length) {
        if (listB[i] > listA[j]) {
            j++;
        } else if (listB[i] < listA[j]) {
            i++;
        } else {
            listB.splice(i, 1);
            listA.splice(j, 1);
        }
    }
    return listB;
}

/**
 * 计算接下来的任意位置上的值
 * @useList:可能用到的值
 *  @i:大行
 *  @k:小行
 *  @j:大列
 *  @m:小列
 * */
function calculateValue(useList, i, k, j, m) {
    console.log(useList, i, k, j, m);
    return useList[randomInt(0, useList.length - 1)];
}
