import { number } from "yargs";
import { fetchData } from "./fetchdata";

describe('fetchData', () => {
  it('should fetch data from a valid URL', async () => {
    const mockData = { key: 'value' };
    const mockResponse = { ok: true, json: async () => mockData };
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-07-10&sortBy=publishedAt&apiKey=f0880f7d2363474680cd06c3c59b01d2';
    const data = await fetchData(url);

    expect(data).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('should throw an error for a network error', async () => {
    const mockResponse = { ok: false };
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-07-10&sortBy=publishedAt&apiKey=f0880f7d2363474680cd06c3c59b01d2';
    await expect(fetchData(url)).rejects.toThrow('Network response was not ok');
  });

  it('should throw an error for other errors', async () => {
    const mockResponse = { ok: true, json: async () => { throw new Error('Test Error'); } };
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-07-10&sortBy=publishedAt&apiKey=f0880f7d2363474680cd06c3c59b01d2';
    await expect(fetchData(url)).rejects.toThrow('Error fetching data: Test Error');
  });

  it('should parse URL to an object', () => {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-07-10&sortBy=publishedAt&apiKey=f0880f7d2363474680cd06c3c59b01d2';
    const expectedObject = {
        protocol: 'https:',
        host: 'newsapi.org',
        from: '2023-07-10',
        apiKey:'f0880f7d2363474680cd06c3c59b01d2',
        search: '?q=tesla&from=2023-07-10&sortBy=publishedAt&apiKey=f0880f7d2363474680cd06c3c59b01d2',
    };
    expect(parseUrlToObject(url)).toEqual(expectedObject);
  });

  it('render a omponent with correct data', () => {
   // xử lý nếu truyền đúng 
    const data ={

    }
    //new tới component test, và test các field được truyền vào data.

    // const cardComponent = new component(mockData);
    // const renderedComponent = cardComponent.render();
  });
  it('render a  component with correct data -- xử lý cho tất cả các component còn lại ', () => {
    // xử lý nếu truyền đúng 
   });

   it('render a  component with incorrect data', () => {
    // xử lý nếu truyền sai, show lỗi error nếu sai cho tất cả các component đã render data
   });

});

function parseUrlToObject(url: string): any {
    const urlObject: any = new URL(url);
    return {
        protocol: urlObject.protocol,
        host: urlObject.host,
        from: urlObject.searchParams.get('from'),
        apiKey: urlObject.searchParams.get('apiKey'),
        search: urlObject.search,
    };
}
