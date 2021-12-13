const initialNavBarState = {
    changeoption: "keep"
};

export const navReducer = (state = initialNavBarState, action) => {
    console.log(action)
    switch (action.type) {
        case 'CLICK_ON_NOTE':
            console.log("hii")
            return {
                ...state,
                changeoption: "note"
            };
        case 'CLICK_ON_ARCHIVE':
            return {
                ...state,
                changeoption: "Archive"
            };
        case 'CLICK_ON_TRASH':
            return {
                ...state,

                changeoption: "Trash"
            };
        default:
            return state;
    }
};

