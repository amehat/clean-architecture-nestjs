import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export default interface Article extends InMemoryDBEntity {
    id: string;
    slug: string;
    title: string;
    description: string;
    content: string;
}