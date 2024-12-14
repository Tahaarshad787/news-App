 let getSearch = document.getElementById("exampleInputEmail1");
  let card = document.getElementById("card");

  let apifatch = async () => {
    let input = getSearch.value;
    let getData = `https://newsapi.org/v2/everything?q=${input}&from=2024-11-14&sortBy=publishedAt&apiKey=d8c8d845c6d8407b86c6640d54fb122c`;

    try {
      let getapi = await fetch(getData);
      let res = await getapi.json();
      card.innerHTML = "";

      res.articles.map((e) => {
        card.innerHTML += `
          <div class="card" style="width: 18rem;">
            <img src="${e.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${e.title}</h5>
              <p class="card-text">${e.description}</p>
              <a href="${e.url}" class="btn btn-primary" target="_blank">Read More</a>
            </div>
          </div>`;
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  // Fetch dummy data for testing
  let fetchData1 = async () => {
    try {
      let getData = await fetch("https://jsonplaceholder.typicode.com/posts");
      let response = await getData.json();
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  fetchData1();

