interface ArticleRequest {
  title: string;
  description: string;
  body: string;
}

interface Article {
  // title: string;
  // description: string;
  // body: string;
  slug: string;
  favoritesCount: number;
  author: Author;
}

interface Author {
  bio: string;
  image: string;
  _id?: string;
  username: string;
  following?: string;
}

interface WithDate {
  createdAt: string;
  updateAt: string;
}

type ArticleResponse = Article & WithDate & ArticleRequest;

export { ArticleResponse, ArticleRequest, Author };
