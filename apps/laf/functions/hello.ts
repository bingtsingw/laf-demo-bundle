import { CONSTANT } from '@mono/constants';
import { EnumMessage } from '@mono/enums';

export default async function (ctx: FunctionContext) {
  return { data: EnumMessage.HELLO + CONSTANT.appName };
}
