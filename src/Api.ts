interface IFetch {
  path: string;
  body?: BodyInit;
  method?: string;
}

export class RecipeApi {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async fetch({ method = 'GET', path = '' }: IFetch) {
    const fullPath = `${this.baseUrl}/${path}`;
    debugger;
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata', {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type, x-requested-with',
        'Access-Control-Allow-Origin': '*',
        origin: 'http://localhost:3000',
        mode: 'no-cors',
      },
    });

    if (response.ok) {
      const body = await response.json();
      return body;
    }

    return { success: false };
  }

  loadAllCategories() {
    return this.fetch({
      path: 'categories.php',
    });
  }

  loadAllCuisine() {
    return this.fetch({
      path: 'list.php?a=list',
    });
  }
}

export const api = new RecipeApi('www.themealdb.com/api/json/v1/1');
