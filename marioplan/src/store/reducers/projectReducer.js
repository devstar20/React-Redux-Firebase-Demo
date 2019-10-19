const initState = {
    projects: [
        {id:'1', title: 'help me find peach', content: 'blah hello world 1'},
        {id:'2', title: 'collect all the stars', content: 'blah hello world 2'},
        {id:'3', title: 'egg hunt with ?!', content: 'blah hello world 3'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('create project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create proejct error', action.err)
            return state;
        default:
            return state;
    }
}

export default projectReducer;