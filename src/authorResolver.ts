import { Resolver, Query, ResolveProperty, Args, Parent } from '@nestjs/graphql';

@Resolver('Author')
export class AuthorResolver {
  constructor(
  ) {}

  @Query()
  async author() {
    return 'author';
  }

  @ResolveProperty()
  async posts(@Parent() author) {
    throw new Error('author.posts error');
  }
}