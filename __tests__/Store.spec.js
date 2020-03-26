import TestModule from '../src/store/modules/TestModule'

describe('TestModule Tests', () => {
    test('If setTestText mutation is called it should set the text of that object', () => {
        const { state, mutations } = TestModule
        mutations.setTestText(state, {
            id: 1,
            text: 'bar baz'
        })
        expect(state.testObjects.find(obj => obj.id === 1).text).toBe('bar baz')
    })
});