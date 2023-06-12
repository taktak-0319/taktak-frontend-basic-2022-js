const userIdList = (datas) => {
    const returnUserId = [];
    const allUserIds = datas.map((data) => {
        return data.userId;
    });
    for (userId of allUserIds) {
        const getUserId = returnUserId.findIndex((eachReturnUserId) => {
            return eachReturnUserId === userId;
        });

        if (getUserId === -1) {
            returnUserId.push(userId);
        }
    }
    return returnUserId;
};

const fixData = (jsonDates) => {
    const userIds = userIdList(jsonDates);
    const array = [];
    // return userIds;
    for (userId of userIds) {
        const machedUserData = jsonDates.filter(
            (jsondata) => jsondata.userId === userId
        );
        for (eachMachedUserData of machedUserData) {
            delete eachMachedUserData.userId;
        }

        array.push(machedUserData);
    }
    const newDatas = userIds.map((id, index) => {
        return {
            userId: id,
            datas: array[index],
        };
    });
    return newDatas;
};

module.exports = { userIdList, fixData };