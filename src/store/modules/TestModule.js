const TestModule = {
    state: {
        testObjects: [
            { 
                id: 1,
                text: 'Lorem Ipsum'
            }
        ]
    },

    actions: {
        updateTestText: ({state, commit}, {id, text}) => {
            commit('setTestText');
        }
    },

    mutations: {
        setTestText: (state, payload) => {
            const {id, text} = payload;
            state.testObjects.map(obj => {
                if (obj.id === id) {
                    obj.text = text;
                }
                return obj;
            })
        }
    },

    getters: {
        getTestById: state => id => {
            return state.testObjects.find(test => test.id === id);
        }
    }
}

export default TestModule;