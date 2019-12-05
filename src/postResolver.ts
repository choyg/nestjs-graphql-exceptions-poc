import { Resolver, Query, ResolveProperty, Args, Parent } from '@nestjs/graphql';

@Resolver('Post')
export class PostResolver {
  constructor(
  ) {}

  @Query()
  async post() {
    throw new Error('post error')
  }
}