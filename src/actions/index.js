export function selectCategory(selected){
    return ({//actual action, selectBook is action creator, needs to return an action, an object with a type proprty
        type: 'CATEGORY_SELECTED',
        selected
    });
}