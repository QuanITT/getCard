class DataComponent {
    private data: any[] = [];
  
    async fetchData() {
      const response = await fetch('./data.json');
      this.data = await response.json();
    }
  
    getData() {
      return this.data;
    }
  }
  
  const dataComponent = new DataComponent();
  export default dataComponent;