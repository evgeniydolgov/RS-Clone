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
    const response = await fetch(`${this.baseUrl}/${path}`, { method });

    if (response.ok) {
      return response.json();
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

const api = new RecipeApi('www.themealdb.com/api/json/v1/1');
