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
    try {
      const fullPath = `${this.baseUrl}/${path}`;
      const response = await fetch(`https://${fullPath}/9973533/${path}`, {
        method,
      });

      if (response.ok) {
        const body = await response.json();

        return body;
      }

      throw new Error('Problem with fetch');
    } catch (error) {
      return { success: false };
    }
  }

  loadRandomSelection() {
    return this.fetch({
      path: 'randomselection.php',
    });
  }

  loadAllCuisine() {
    return this.fetch({
      path: 'list.php?a=list',
    });
  }
}

export const api = new RecipeApi('www.themealdb.com/api/json/v2/9973533');
