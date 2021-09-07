import { useFetch } from '../../../utils/hooks/useFetch';
import { renderHook } from '@testing-library/react-hooks';

describe('useFetch Hook', () => {

    test('should return initial state', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetch());
        const  videos = result.current;
        // await waitForNextUpdate();
        expect(videos.length).toBeGreaterThan(0);        
    })
    
});
