import { useFetch } from '../../../utils/hooks/useFetch';
import { renderHook } from '@testing-library/react-hooks';

describe('useFetch Hook', () => {
    let fakeData = [];
    beforeEach(() => {
        fakeData = [{ id: 1, data: 'test'}]
    })
    test('should return initial state', async() => {
        const fakeService = jest.fn(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(fakeData);
                }, 10);
            })
        });
        const { result, waitForNextUpdate } = renderHook( () => useFetch(fakeService, ''));
        const  response = result.current;
        const { data } = response;
        await waitForNextUpdate();
        expect(data).toBe(null);
    });
    test('should return data', async() => {
        const fakeService = jest.fn(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([{ id: 1, data: 'test'}]);
                }, 10);
            })
        });
        const { result, waitForNextUpdate } = renderHook( () => useFetch(fakeService, ''));
        await waitForNextUpdate();
        const  response = result.current;
        const { data } = response;
        expect(data).toMatchObject(fakeData);
    });
    
});
