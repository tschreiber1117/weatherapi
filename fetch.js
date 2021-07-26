class Fetch {
    async getCurrent(input) {
      const myKey = "1144c86896bf788b52ddde7a4be06fc7";
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }
  