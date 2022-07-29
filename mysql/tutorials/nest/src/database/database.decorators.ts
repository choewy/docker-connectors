import { SetMetadata } from '@nestjs/common';

export const CustomRepository = (
  magicString: string,
  entity: any,
): ClassDecorator => SetMetadata(magicString, entity);
