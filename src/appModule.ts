import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthorResolver } from './authorResolver';
import { ExampleController } from './exampleController';
import { PostResolver } from './postResolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
    }),
  ],
  providers: [AuthorResolver, PostResolver],
  controllers: [ExampleController]
})
export class ApplicationModule {}