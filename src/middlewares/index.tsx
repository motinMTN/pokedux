export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{ name: 'odilongas' }, ...actionInfo.action.payload];
    const updatedActionInfo = {
        ...actionInfo,
        action: { ...actionInfo.action, payload: featured },
    };
    console.log({updatedActionInfo});    
    next(updatedActionInfo);
}